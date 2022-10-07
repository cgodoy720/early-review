import './App.css';
import Child from './components/Child'
import people from './people.json'
import { useState } from 'react'

function App() {
  // useState takes initial value for variable as argument
  // In the array we have TWO values:
  // first value: the piece of state
  // second value: the handler function to update that piece of state
  const [mode, setMode] = useState('light')


  const changeMode = () => {
    if(mode === 'light'){
      setMode('dark')
    } else {
        setMode('light')
    }

    // mode === 'light' ? setMode('dark') : setMode('light')

  }

  // console.log(mode)
  return (
    <div className={mode}>
      {/* {
        // people.map(person => <div>{person.first_name}</div>)

        people.map((person, i) => { 
          return (
            <Child first={person.first_name} last={person.last_name} key={person.id} />
          )
        })
      } */}
      <button onClick={changeMode} >Change to { mode === 'light' ? 'dark' : 'light' } mode</button>
      <h1>{mode}</h1>



    </div>
  );
}

export default App;
