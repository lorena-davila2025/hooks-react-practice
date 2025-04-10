import React from 'react'
import useCounter from '../hooks/useCounter'

const CounterApp = () => {
  const {
    counter,
    increment,
    decrement,
    reset
  } = useCounter({initialValue: 0})

  return (
    <>
      <h1>Counter: </h1>
      <h4>{counter}</h4>
      <button type="button" class="btn btn-primary" onClick={() => increment()}>+1</button>
      <button type="button" class="btn btn-danger" onClick={() => reset()}>Reset</button>
      <button type="button" class="btn btn-secondary" onClick={() => decrement(1, false)}>-1</button>
    </>
  )
}

export default CounterApp
