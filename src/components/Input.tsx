// event props onchange
type InputProps = {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {
  return <input value={props.value} onChange={props.onChange} />
}