import './App.css';
import { useState } from 'react';
import { Button } from './components/Button';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { ListPerson } from './components/ListPerson';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { Status } from './components/Status';
import { Container } from './components/Container';
import { Login } from './components/useState/Login';
import { User } from './components/useState/User';
import { Counter } from './components/useReducer/Counter';
import { ThemeContexProvider } from './components/contex/ThemeContex';
import { Box } from './components/contex/Box';
import { UserContexProvider } from './components/contex/UserContex';
import { User1 } from './components/contex/User1';

function App() {
  const [value, setValue] = useState("")
  const person = {
    first: "Reyna",
    last: "Utari"
  }

  const listPerson = [
    {
      first: "Reyna",
      last: "Utari"
    },
    {
      first: "Reyna",
      last: "Utari"
    },
    {
      first: "Reyna",
      last: "Utari"
    }
  ]

  return (
    <div className="App">
      <Greet name="Reyna" />
      <Person name={person} />
      <ListPerson persons={listPerson} />
      <Status status="error" />
      <Oscar>
        <Heading>This is Heading with oscar wraper</Heading>
      </Oscar>
      <Input value={value} onChange={event => [setValue(event.target.value), console.log(event.target.value)]} />
      <Button handleClick={(event, id) => console.log(event, id)} />
      <Container styles={{ margin: '1rem', border: '1px solid white', padding: '1rem' }} />
      <Login />
      <User />
      <Counter />
      <ThemeContexProvider>
        <Box />
      </ThemeContexProvider>
      <UserContexProvider>
        <User1 />
      </UserContexProvider>
    </div>
  );
}

export default App;
