//Prop with type String
type GreetProps = {
  name: string
  numberCount: number
}

export const Greet = (props: GreetProps) => {
  return (
    <h2>Wellcome {props.name}, you are login for {props.numberCount} times!</h2>
  )
}