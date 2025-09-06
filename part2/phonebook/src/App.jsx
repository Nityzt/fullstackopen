import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleAdd = (e) => {
    e.preventDefault()
    const nameObject = {
      name: newName,
      id: persons.length + 1
    }

    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      setPersons(persons.concat(nameObject))
      setNewName('')

    }
    return

  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit" onClick={handleAdd}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((persons,id) => <p key={id}>{persons.name}</p> )}
      </div>
  )
}

export default App