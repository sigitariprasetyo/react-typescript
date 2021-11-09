// Props with type Array of object
type ListPersonProps = {
  persons: {
    first: string
    last: string
  }[]
}


export const ListPerson = (props: ListPersonProps) => {
  return (
    <div>
      {
        props.persons.map(el => {
          return (
            <h2>{el.first} {el.last}</h2>
          )
        })
      }
    </div>
  )
}