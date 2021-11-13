import { useState } from "react";

type AuthUset = {
  name: string
  email: string
}

export const User = () => {
  const [user, setUser] = useState<AuthUset>({} as AuthUset)

  const handleLogin = () => {
    setUser({
      name: 'Reyna',
      email: 'reyna@mail.com'
    })
  }

  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <p>User Name is {user.name}</p>
      <p>User Email is {user.email}</p>
    </>
  )
}
