import { useContext } from "react"
import { UserContex } from "./UserContex"

export const User1 = () => {
  const userContex = useContext(UserContex)
  const handleLogin = () => {
    userContex.setUser({
      name: 'Reyna',
      email: 'reyna@email.com'
    })
  }

  const handleLogout = () => {
    userContex.setUser(null)
  }

  return (
    <div style={{ marginTop: 20 }}>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {
        userContex.user ?
          <div>
            <p>User name is {userContex.user?.name}</p>
            <p>User email is {userContex.user?.email}</p>
          </div> : null
      }
    </div>
  )
}