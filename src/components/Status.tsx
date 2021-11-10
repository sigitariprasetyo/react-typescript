// Define value props
type StatusProps = {
  status: 'loading' | 'complate' | 'error'
}
export const Status = (props: StatusProps) => {
  let message
  if (props.status === "loading") {
    message = "loading..."
  } else if (props.status === "complate") {
    message = "fetch is successfuly!"
  } else if (props.status === "error") {
    message = "error!"
  }

  return (
    <h2>Status: {message}</h2>
  )
}