import { useState } from "react";
import { AuthContext } from "./auth-context";
import { useUser } from "./useUser";
import useApi from "../modules/shared/api";

export const AuthProvider = ({ children }) => {
  const { setUser, refreshUser } = useUser();
  const api = useApi();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const setAccessToken = (accessToken) => {
    localStorage.setItem("accessToken", accessToken);
    refreshUser();
  };

  const register = async (userData) => {
    setLoading(true);
    setError(null);

    try {
      const { data: result } = await api.post("/auth/register", userData);

      if (!result.accessToken) {
        const requestError = new Error(result.message || "Registration failed");
        requestError.fieldErrors = Object.fromEntries(
          (result.errors || []).map(({ field, message }) => [field, message]),
        );
        throw requestError;
      }

      setAccessToken(result.accessToken);

      setUser(result.data);

      return result;
    } catch (requestError) {
      const responseData = requestError.response?.data;
      const authError = new Error(responseData?.message || requestError.message || "Registration failed");
      authError.fieldErrors = Object.fromEntries(
        (responseData?.errors || []).map(({ field, message }) => [field, message]),
      );
      setError(authError);
      throw authError;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        register,
        setAccessToken,
        logout,
        loading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
