import { useState } from "react"


const useCounter = ({initialValue = 0}) => {

  const [counter, setCounter] = useState(initialValue)

  const increment = (val = 1) => {
    setCounter(counter + val)
  }

  const decrement = (val = 1, allowNegative = true) => {
    if(counter - val >= 0 && !allowNegative)
      setCounter(counter - val)
  }

  const reset = () => {
  setCounter(initialValue)
 }

  return {
    counter,
    increment,
    decrement,
    reset
  }
}

export default useCounter
