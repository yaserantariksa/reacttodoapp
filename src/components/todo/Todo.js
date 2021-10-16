import './Todo.css';
import { useState } from 'react';
import TodoList from '../todo-list/TodoList';
import TodoCreate from '../todo-create/TodoCreate';

const Todo = () => {

    const [getTodos, setTodos] = useState([
        { id:1, title: 'Do'},
        { id:2, title: 'Pray'},
        { id:3, title: 'Consistent'},
    ])

    const eventCreateTodo = (todo) => {
        setTodos(getTodos.concat(todo))
    }
    

    return (
        <div>
            <h3>React : Todo List</h3>
            <TodoCreate onCreateTodo={eventCreateTodo}/>
            <TodoList dataTodos={getTodos} />
        </div>
    );
}

export default Todo