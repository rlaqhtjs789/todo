import React, {useContext, useEffect, useState} from "react";
import {DataContext, DataProvider} from "./DataProvider"

export default function Header(props) {
    const [todos,setTodos] = useContext(DataContext)
        
    const deleteTodo = () =>{
        const newTodos = todos.filter(todo => {
            return todo.complete === false
        })
        setTodos(newTodos)
    }
    
    return(
        <div className="header">
            <div className="contents">
                <div className="dateBox">
                    <div><span>{props.dateText},</span> {props.date}th</div>
                    <p>{todos.length} Tasks</p>
                </div>
                <div className="deleteBox">
                    <span>{props.month}</span>
                    <button id="delete" onClick={deleteTodo}>CLEAR LIST</button>
                </div>
            </div>
        </div>
    )
}
