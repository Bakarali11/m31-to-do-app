import "./App.css"
import { useState } from "react"
import List from "./components/List"
import UserInput from "./components/UserInput"

// TODO APP
// Display list ✅
// Add items ✅
// Remove items 
// Check items as done
// Edit items

const App = () => {
  const [list, setList] = useState([])

  const handleForm = (newItem) => {
    setList([...list, newItem])
  }

  const handleDelete = (item) => {
    let storedList = [...list]
    let remainder = storedList.filter(currentItem => currentItem !== item)
    setList(remainder)
  }

  return (
    <div className="wrapper">
      <UserInput handleForm={handleForm} />
      <List items={list} handleDelete={handleDelete} />
    </div>
  )
}

export default App
