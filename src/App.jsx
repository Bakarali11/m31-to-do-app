import "./App.css"
import { useState } from "react"
import List from "./components/List"
import UserInput from "./components/UserInput"

// TODO APP
// Display list ✅
// Add items ✅
// Remove items ✅
// Check items as done
// Edit items

const App = () => {
  const [list, setList] = useState([])

  const handleForm = (newItem) => {
    setList([...list, newItem])
  }

  const handleDelete = (index) => {
    let storedList = [...list]
    storedList.splice(index, 1)
    setList(storedList)
  }

  return (
    <div className="wrapper">
      <UserInput handleForm={handleForm} />
      <List items={list} handleDelete={handleDelete} />
    </div>
  )
}

export default App
