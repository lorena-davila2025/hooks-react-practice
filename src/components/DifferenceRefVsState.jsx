import React, { useRef, useState } from 'react'

const DifferenceRefVsState = () => {

  const [counter, setCounter] = useState(0)

  const countRef = useRef(0)

  const increment = () => {
    const newCounter = counter + 1
    setCounter(newCounter) // This will trigger a re-render, comment this line to see the difference
    countRef.current = countRef.current + 1 // This will not trigger a re-render
    console.log('Increment:  ', `counter: ${counter}`, `newCounter: ${newCounter}`, `countRef: ${countRef.current}`);
  }

  console.log('Re-render counter:  ', `counter:, ${counter}`, `countRef:, ${countRef.current}`);

  return (
    <>
      <h1>Counter: </h1>
      <h4>{counter}</h4>
      <h4>{countRef.current}</h4>
      <button type="button" className="btn btn-primary" onClick={() => increment()}>+1</button>
    </>
  )
}

export default DifferenceRefVsState
