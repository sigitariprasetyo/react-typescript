//Props with type Object
type PersonProps = {
  name: {
    first: string
    last: string
  }
}

export const Person = (props: PersonProps) => {
  return (
    <h2>Name: {props.name.first} {props.name.last}</h2>
  )
}