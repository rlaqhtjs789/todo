import React, {useState, useEffect, createContext} from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [todos, setTods] = useState([])
    useEffect(() => {
        const todoStore = JSON.parse(localStorage.getItem('todoStore'))
        if(todoStore) setTods(todoStore)
    },[])

    useEffect(() =>{
        localStorage.setItem('todoStore', JSON.stringify(todos))
    },[todos])

    return(
        <DataContext.Provider value={[todos, setTods]}>
            {props.children}
        </DataContext.Provider> 
    )
}