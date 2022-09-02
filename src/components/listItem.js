import React from "react";
import {MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md'


export default function ListItem({todo, id, checkComplete, time}) {
    
    return(
        <li>
            <label htmlFor={id} className={todo.complete ? "active" : ""}>
                <div>{todo.complete ? <MdCheckBox color="orangered" size="20" /> : <MdCheckBoxOutlineBlank color="#ddd" size="20" />}</div>
                <input type="checkbox" id={id} checked={todo.complete}
                onChange={() => checkComplete(id)} />
                <span>{todo.name}</span>
            </label>
            <p>{time}</p>
        </li>    
    )
}