import { useEffect, useState } from "react";
import { UserContext } from "./user-context";

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(() => Boolean(localStorage.getItem("accessToken")));
  const [error, setError] = useState(null);
  const [refreshVersion, setRefreshVersion] = useState(0);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const controller = new AbortController();

    if (!accessToken) {
      return () => controller.abort();
    }

    const getUser = async () => {
      setError(null);

      try {
        const response = await fetch(`${apiUrl}/api/auth/me`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Unable to retrieve user");
        }

        const result = await response.json();
        setUser(result.data.user);
      } catch (requestError) {
        if (requestError.name === "AbortError") {
          return;
        }

        localStorage.removeItem("accessToken");
        setUser(null);
        setError(requestError);
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    getUser();

    return () => controller.abort();
  }, [refreshVersion]);

  const refreshUser = () => setRefreshVersion((version) => version + 1);

  return (
    <UserContext.Provider value={{ user, setUser, loading, error, refreshUser }}>
      {children}
    </UserContext.Provider>
  );
};