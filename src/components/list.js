import React, { useContext, useState } from "react";
import ListItem from "./listItem";
import {DataContext, DataProvider} from "./DataProvider"

export default function List(props) {
    
    const [todos, setTodos] = useContext(DataContext);


    const switchComplete = id =>{
        const newTodos = [...todos]
        newTodos.forEach((todo, index) => {
            if(index === id){
                todo.complete = !todo.complete
            }
        })
        setTodos(newTodos)
    }

    return(
        <ul>
            {
                todos.map((todo, index) => (
                    <ListItem todo={todo} key={index} id={index}
                    checkComplete={switchComplete} time={props.time} />
                ))
            }
        </ul>
    )
}