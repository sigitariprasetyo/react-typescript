// Props with type Array of object
import { Name } from "./Person.types"

type ListPersonProps = {
  persons: Name[]
}


export const ListPerson = (props: ListPersonProps) => {
  return (
    <div>
      {
        props.persons.map((el, i) => {
          return (
            <h2 key={i}>{el.first} {el.last}</h2>
          )
        })
      }
    </div>
  )
}