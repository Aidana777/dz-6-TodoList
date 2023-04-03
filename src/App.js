import React, { createContext, useState } from 'react'
import Header from './component/Header/Header'
import TodoItem from './component/Todo/TodoItem'
import TodoList from './component/Todo/TodoList'
export const ThemeContext=createContext(null)
const App = () => {

  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState(null)
  const [theme, setTheme]=useState('light')

const toggleTheme=()=>{
  setTheme((curr)=>(curr==='light'? 'dark':'light'))
}

  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
    <div className='App'id={theme}>
      <Header toggleTheme={toggleTheme}
       theme={theme}
       setTheme={setTheme}
        />
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
    </ThemeContext.Provider>
  )
}

export default App
