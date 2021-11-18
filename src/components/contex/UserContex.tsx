import React, { createContext, useState } from "react"

export type AuthUser = {
  name: string
  email: string
}

type UserContexProviderProps = {
  children: React.ReactNode
}

type UserContexType = {
  user: AuthUser | null
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export const UserContex = createContext({} as UserContexType)

export const UserContexProvider = ({ children }: UserContexProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null)

  return <UserContex.Provider value={{ user, setUser }}>{children}</UserContex.Provider>
}

