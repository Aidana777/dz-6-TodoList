import React from 'react'

const TodoList = ({ todos, setTodos, setEditTodo }) => {
    function deleteTodo({ id }) {
        let newTodo = [...todos].filter(todo => todo.id !== id)
        setTodos(newTodo)
    }
    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id)
        setEditTodo(findTodo)
    }
    return (

        <div>
            {
                todos.map(todo => (
                    <div key={todo.id}>
                        <h2>{todo.title}</h2>
                        <button onClick={() => handleEdit(todo)}>Edit</button>
                        <button
                            onClick={() => deleteTodo(todo)}
                        >Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default TodoList