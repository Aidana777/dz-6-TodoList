import React, { useState } from 'react'
import Header from './component/Header/Header'
import TodoItem from './component/Todo/TodoItem'
import TodoList from './component/Todo/TodoList'

const App = () => {
 
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState(null)
  return (
    <div>
      <Header />
      <TodoItem
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        setEditTodo={setEditTodo}
      />
    </div>
  )
}

export default App
