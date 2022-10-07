import './App.css';
import Child from './components/Child'
import people from './people.json'

function App() {

  console.log(people)


  return (
    <div>
      {
        // people.map(person => <div>{person.first_name}</div>)

        people.map((person, i) => { 
          return (
            <Child first={person.first_name} last={person.last_name} key={person.id} />
          )
        })
      }
    </div>
  );
}

export default App;
