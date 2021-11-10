//Props with type Object
import { PersonProps } from "./Person.types"

export const Person = (props: PersonProps) => {
  return (
    <h2>Name: {props.name.first} {props.name.last}</h2>
  )
}