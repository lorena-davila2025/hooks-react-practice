import React from 'react'

const initialState = [
  {
    id: 1,
    title: 'Task 1',
    completed: false
  },
  {
    id: 2,
    title: 'Task 2',
    completed: false
  },
  {
    id: 3,
    title: 'Task 3',
    completed: false
  }
]

const newTask = {
  id: 4,
  title: 'Task 4',
  completed: false
}

const updatedTask = {
  id: 4,
  title: 'Task 4 completed',
  completed: true
}

const addTask = {
  type: 'ADD_TASK',
  payload: newTask
}

const updateTask = {
  type: 'UPDATE_TASK',
  payload: updatedTask
}

const tasksReducer = (state = initialState, action) => {
  if(action.type === 'ADD_TASK') {
    return [...state, action.payload]
  }

  if(action.type === 'UPDATE_TASK') {
    const updatedTasks = state.map(task => {
      if(task.id === action.payload.id) {
        return {
          ...task,
          ...action.payload
        }
      }
      return task
    })
    return updatedTasks
  }

  return state
}

const updatedState = tasksReducer(initialState, addTask)
console.log('reducer 1', updatedState);
console.log('reducer 2', tasksReducer(updatedState, updateTask));

const Reducer = () => {
  return (
    <>

    </>
  )
}

export default Reducer
