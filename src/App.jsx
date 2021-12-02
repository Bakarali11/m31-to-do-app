import "./App.css"
import { useState } from "react"
import List from "./components/List"

// TODO APP
// Display list ✅
// Add items
// Remove items
// Check items as done
// Edit items

const App = () => {
  const [list, setList] = useState(["to-do 1", "to-do 2", "to-do 3"])

  // const handleAdd = () => {
  //   setList([...list, "to-do 4"])
  // }

  return (
    <div className="wrapper">
      <List items={list} />
      {/* <button onClick={() => setList([...list, "to-do 4"])}>Add item</button> */}
    </div>
  )
}

export default App
