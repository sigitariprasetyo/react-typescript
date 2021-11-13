import { useState } from "react";

type AuthUset = {
  name: string
  email: string
}

export const User = () => {
  const [user, setUser] = useState<AuthUset | null>(null)

  const handleLogin = () => {
    setUser({
      name: 'Reyna',
      email: 'reyna@mail.com'
    })
  }

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <p>User Name is {user?.name}</p>
      <p>User Email is {user?.email}</p>
    </>
  )
}
