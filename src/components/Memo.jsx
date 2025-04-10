import React, { useMemo, useState } from 'react'

const Memo = () => {
  const [numList, setNumList] = useState([1, 2, 3, 4, 5])
  const [showCalculation, setShowCalculation] = useState(true)

  const handleAddNum = () => {
    setNumList([...numList, numList.at(-1) + 1])
  }

  const toggleCalculation = () => {
    setShowCalculation(!showCalculation)
  }

  const result = useMemo(() => {
    console.log('Calculating result...')
    return numList.reduce((acc, curr) => acc * curr, 1)
  }, [numList])

  return (
    <>
      <h2>Calculation</h2>
      <h3 className='mt-3'>{numList.join(', ')}</h3>
      {showCalculation && <h4>The result is: {result}</h4>}
      <div className="d-flex gap-2 mt-3">
        <button className="btn btn-primary" onClick={toggleCalculation}>
          Toggle calculation
        </button>
        <button className="btn btn-success" onClick={handleAddNum}>
          Add a number
        </button>
      </div>
    </>
  )
}

export default Memo
