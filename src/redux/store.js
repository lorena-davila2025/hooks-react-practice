
import { createStore } from 'redux'

export const INITIAL_STATE = [
  { id: 1, title: 'Task 1', completed: false },
  { id: 2, title: 'Task 2', completed: true },
]

export const tasksReducer = (state = INITIAL_STATE, action) => {
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

export const store = createStore(
  tasksReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
