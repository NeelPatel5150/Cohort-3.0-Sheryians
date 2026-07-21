import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const USER_STORAGE_KEY = "day16-user";
const REGISTERED_USER_STORAGE_KEY = "day16-registered-user";

const readStoredUser = (storageKey) => {
  const storedValue = localStorage.getItem(storageKey);

  return storedValue ? JSON.parse(storedValue) : null;
};

const persistUser = (storageKey, user) => {
  localStorage.setItem(storageKey, JSON.stringify(user));
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => readStoredUser(USER_STORAGE_KEY));
  const [registeredUser, setRegisteredUser] = useState(() =>
    readStoredUser(REGISTERED_USER_STORAGE_KEY),
  );

  useEffect(() => {
    if (user) {
      persistUser(USER_STORAGE_KEY, user);
    } else {
      localStorage.removeItem(USER_STORAGE_KEY);
    }
  }, [user]);

  useEffect(() => {
    if (registeredUser) {
      persistUser(REGISTERED_USER_STORAGE_KEY, registeredUser);
    }
  }, [registeredUser]);

  const register = (formData) => {
    const nextUser = {
      name: formData.name,
      email: formData.email,
    };

    setRegisteredUser({ ...nextUser, password: formData.password });
    setUser(nextUser);

    return nextUser;
  };

  const login = (formData) => {
    const isRegisteredUserValid =
      registeredUser &&
      registeredUser.email === formData.email &&
      registeredUser.password === formData.password;

    if (!registeredUser) {
      throw new Error("Please register first");
    }

    if (!isRegisteredUserValid) {
      throw new Error("Invalid email or password");
    }

    const nextUser = {
      name: registeredUser?.name || formData.email.split("@")[0],
      email: formData.email,
    };

    setUser(nextUser);

    return nextUser;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: Boolean(user),
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};