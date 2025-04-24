import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

const IncrementComponent = React.memo(({ increment }) => {
  console.log('IncrementComponent rendered only once')
  // This component will only re-render when the increment function changes
  // If we use the increment function from the parent, it will re-render every time
  // because the parent re-renders and creates a new function reference
  // To prevent this, we can use React.memo to memoize the component
  // and use a useCallback where the increment function that is passed as a prop is declared
  return (
    <button type="button" className="btn btn-primary" onClick={() => increment(5)}>+5</button>
  )
}
)

IncrementComponent.propTypes = {
  increment: PropTypes.func.isRequired
}

const Callback = () => {
  const [counter, setCounter] = useState(0)

  const increment = useCallback((val) => setCounter(prev => prev + val), [])
  console.log('CallbackComponent re-rendered')

  return (
    <>
      <h1>Counter: {counter} </h1>
      <IncrementComponent increment={increment} />
    </>
  )
}

export default Callback
