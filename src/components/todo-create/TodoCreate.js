import './TodoCreate.css';
import { useState } from 'react';


const TodoCreate = (props) => {
    const [getInputTodo, setInputTodo] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()

        const newTodo = {
            id: Math.floor(Math.random() * 100) + 1,
            title: getInputTodo
        }
        props.onCreateTodo(newTodo)

        setInputTodo('')

    }

    const handleInputTodo = (event) => {
        setInputTodo(event.target.value)
        console.log(getInputTodo)
    }
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" autoFocus="True" placeholder="input your task" value={getInputTodo} onChange={handleInputTodo}/>
            <button className="button" type="submit">Add</button>
        </form>
    );
}

export default TodoCreate