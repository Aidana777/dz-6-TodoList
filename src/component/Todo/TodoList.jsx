import React from 'react'
import './todo.css';
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
                    <div key={todo.id}
                    className='content'
                    >
                        <h2 className='title '>{todo.title}</h2>
                        <div className="list__btns">
                            <button
                                className='edit_btn'
                                onClick={() => handleEdit(todo)}
                            >Edit</button>
                            <button
                                className='delete_btn'
                                onClick={() => deleteTodo(todo)}
                            >Delete</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TodoList