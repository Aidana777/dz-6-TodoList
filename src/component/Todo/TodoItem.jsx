import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './todo.css';
const TodoItem = ({ todos, setTodos, input, setInput, editTodo, setEditTodo }) => {



  const onInputChange = (event) => {
    setInput(event.target.value)
  }

  const upDateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    )
    setTodos(newTodo)
    setEditTodo('')
  }

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title)
    } else {
      setInput('')
    }
  }, [setInput, editTodo])

  const onFormSubmit = (event) => {
    event.preventDefault()
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }])
      setInput('')
    } else {
      upDateTodo(input, editTodo.id, editTodo.completed)
    }
  }
  return (
    <form className='form' onSubmit={onFormSubmit}>
      <input
        className='todoInput'
        type="text"
        placeholder='Enter a Todo...'
        value={input}
        required
        onChange={onInputChange}
      />
      <button
        className='submit_btn'
        type='submit'
      >Add</button>
    </form>
  )
}

export default TodoItem