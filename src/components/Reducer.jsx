import React, { useReducer } from 'react'
import useForm from '../hooks/useForm'

const INITIAL_STATE = [
  { id: 1, title: 'Task 1', completed: false },
  { id: 2, title: 'Task 2', completed: true },
]

const tasksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload]

    case 'UPDATE_TASK':
      return state.map(task =>
        task.title === action.payload.title
          ? { ...task, ...action.payload }
          : task
      )

    case 'COMPLETE_TASK':
      return state.map(task =>
        task.title === action.payload.title
          ? { ...task, completed: !task.completed }
          : task
      )

      case 'DELETE_TASK':
      return state.filter(task =>
        task.title !== action.payload.title
      )

      case 'DELETE_ALL':
        return []

    default:
      return state
  }
}

const Reducer = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, INITIAL_STATE)

  const { formState, handleInputChange, handleReset } = useForm({ title: '', completed: false })

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTask = formState.title.trim()
    if (newTask === '') {
      alert('Task title cannot be empty!')
      return
    }
    if (tasks.some(task => task.title === newTask)) {
      alert('Task already exists. It cannot be duplicated')
      handleReset()
      return
    }
    dispatch({ type: 'ADD_TASK', payload: { ...formState, id: tasks.length + 1 } })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Task title</label>
          <input
            type="text"
            name="title"
            value={formState.title}
            className="form-control"
            id="title"
            onChange={handleInputChange}
          />
          <div id="emailHelp" className="form-text">Enter a new task</div>
        </div>
        <div className='d-flex gap-2'>
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="button" className="btn btn-danger" onClick={() => dispatch({ type: 'DELETE_ALL' })
          }>Delete all</button>
        </div>
      </form>

      <ul className="list-group mt-5">
        {tasks.map(task => (
          <li className="list-group-item" key={task.id}>
            <input
              className="form-check-input me-1"
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch({ type: 'COMPLETE_TASK', payload: task })}
              id={`checkbox-${task.id}`}
            />
            <label className="form-check-label" htmlFor={`checkbox-${task.id}`}>
              {task.title}
            </label>
            <button className='btn btn-danger btn-sm float-end' onClick={() => dispatch({ type: 'DELETE_TASK', payload: task })}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Reducer
