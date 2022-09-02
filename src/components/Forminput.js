import React, {useState, useContext} from "react";
import {DataContext, DataProvider} from "./DataProvider"
import {BsPlus} from 'react-icons/bs'

export default function FormInput({props, parentFunction}) {

    const [todos, setTodos] = useContext(DataContext);
    const [todoName, setTodoName] = useState('');
    
    const addTodo = e =>{
        e.preventDefault();
        setTodos([...todos, {name: todoName, complete: false}])
        setTodoName('');
    }

    
    

    return (
        <form autoComplete="off" onSubmit={addTodo}>
            <button type="submit"><BsPlus color="gray" size="24" /></button>
            <input type="text" name="todos" 
            required placeholder="Type your task" 
            value={todoName} onChange={e => setTodoName(e.target.value.toLowerCase())} />
        </form>
    )
}