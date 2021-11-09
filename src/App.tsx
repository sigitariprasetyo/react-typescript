import './App.css';
import { Greet } from './components/Greet';
import { ListPerson } from './components/ListPerson';
import { Person } from './components/Person';

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
      <Greet name="Reyna" numberCount={10} />
      <Person name={person} />
      <ListPerson persons={listPerson} />
    </div>
  );
}

export default App;
