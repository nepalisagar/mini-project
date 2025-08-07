import { useState } from "react"

function App() {

  let [count, setCount] = useState(0)

  const countIncrease = () => {
    setCount( count + 1 )
  }
  const countDecrease = () => {
    setCount( count - 1 )
  }

  return (
    <div>
    <h1>Z Coder</h1>
    <span>{ count }</span>
    <div className="alignBtn">
    <button onClick={countIncrease}>Increase</button>
    <button onClick={countDecrease}>Decrease</button>
    </div>

    </div>
  )
}

export default App
