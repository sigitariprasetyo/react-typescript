import { useContext } from "react"
import { ThemeContex } from "./ThemeContex"

export const Box = () => {
  const theme = useContext(ThemeContex)

  return (
    <div style={{ marginTop: 20, padding: 20, backgroundColor: theme.secondary.main, color: theme.primary.text }}>
      Theme Contex
    </div>
  )
}