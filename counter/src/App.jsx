import { useState } from "react"

function App() {

  let [count, setCount] = useState(0)

  const countClick = () => {
    setCount( count + 1 )
  }

  return (
    <div>
    <h1>Z Coder</h1>
    <button onClick={countClick}>Count {count}</button>
    <span><i>*reload the page to start count from 0.</i></span>
    </div>
  )
}

export default App
