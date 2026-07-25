import { createContext, useMemo, useState } from 'react'
import { getItem, removeItem, setItem } from '../utils/storage'

export const AuthContext = createContext(null)

const USER_KEY = 'skymart_user'
const USERS_KEY = 'skymart_users'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => getItem(USER_KEY, null))

  function getUsers() {
    return getItem(USERS_KEY, [])
  }

  function signup({ name, email, password }) {
    const users = getUsers()
    const exists = users.some(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    )
    if (exists) {
      throw new Error('An account with this email already exists')
    }
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters')
    }

    const nextUser = { name: name.trim(), email: email.trim().toLowerCase(), password }
    setItem(USERS_KEY, [...users, nextUser])

    const session = { name: nextUser.name, email: nextUser.email }
    setItem(USER_KEY, session)
    setUser(session)
    return session
  }

  function login({ email, password }) {
    const users = getUsers()
    const found = users.find(
      (u) =>
        u.email.toLowerCase() === email.trim().toLowerCase() &&
        u.password === password
    )

    if (!found) {
      throw new Error('Invalid email or password')
    }

    const session = { name: found.name, email: found.email }
    setItem(USER_KEY, session)
    setUser(session)
    return session
  }

  function logout() {
    removeItem(USER_KEY)
    setUser(null)
  }

  const value = useMemo(
    () => ({
      user,
      isLoggedIn: Boolean(user),
      signup,
      login,
      logout,
    }),
    [user]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
