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
  const [list, setList] = useState(["to-do 1", "to-do 2", "to-do 3"])

  const handleForm = (newItem) => {
    setList([...list, newItem])
  }

  return (
    <div className="wrapper">
      <UserInput handleForm={handleForm} />
      <List items={list} />
    </div>
  )
}

export default App
