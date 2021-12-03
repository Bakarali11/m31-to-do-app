import "./App.css"
import { useState } from "react"
import List from "./components/List"
import UserInput from "./components/UserInput"

// TODO APP
// Display list ✅
// Add items ✅
// Remove items ✅
// Check items as done ✅

const App = () => {
  const [list, setList] = useState([])

  const handleForm = (newItem) => {
    setList([...list, { value: newItem, checked: false }])
  }

  const handleChecked = (index) => {
    // copy the data into a mutable variable
    let storedList = [...list]
    // do any mutations you want...
    storedList[index].checked = !storedList[index].checked
    // set the updated variable as the new state value
    setList(storedList)
  }

  const handleDelete = (index) => {
    let storedList = [...list]
    storedList.splice(index, 1)
    setList(storedList)
  }

  return (
    <div className="wrapper">
      <UserInput handleForm={handleForm} />
      <List items={list} handleDelete={handleDelete} handleChecked={handleChecked} />
    </div>
  )
}

export default App
