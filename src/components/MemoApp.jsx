import React, { useMemo, useState } from 'react'

const MemoApp = () => {
  const [numList, setNumList] = useState([1, 2, 3, 4, 5])
  const [showCalculation, setShowCalculation] = useState(true)

  const handleAddNum = () => {
    setNumList([...numList, numList.at(-1) + 1])
  }

  const toggleCalculation = () => {
    setShowCalculation(!showCalculation)
  }

  // Use useMemo to calculate the result only when numList changes
  const result = useMemo(() => {
    console.log('Calculating result...')
    return numList.reduce((acc, curr) => acc * curr, 1) // Fixed initial value to 1 for multiplication
  }, [numList])

  return (
    <>
      <h2>Calculation</h2>
      <h3>{numList.join(', ')}</h3>
      {/* Show or hide the result based on showCalculation */}
      {showCalculation && <h4>The result is: {result}</h4>}
      <div className="d-flex gap-2">
        <button className="button button-success" onClick={toggleCalculation}>
          Toggle calculation
        </button>
        <button className="button" onClick={handleAddNum}>
          Add a number
        </button>
      </div>
    </>
  )
}

export default MemoApp
