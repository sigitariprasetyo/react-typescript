//Prop with type String
type GreetProps = {
  name: string
  numberCount?: number //optional props
  isLogin?: boolean
}

export const Greet = (props: GreetProps) => {
  const { numberCount = 1 } = props //make default value
  return (
    <h2>Wellcome {props.name}, you are login for {numberCount} times!</h2>
  )
}