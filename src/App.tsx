import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { ListPerson } from './components/ListPerson';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { Status } from './components/Status';

function App() {
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
    </div>
  );
}

export default App;
