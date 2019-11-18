import React, { useReducer } from "react";
import Todo from "./Todo";

function TodoList(props) {


    return (
        <div>
            {props.todo.map(listItem => (
                <Todo
                    key={listItem.id}
                    listItem={listItem}
                    toggleCompleted={props.toggleCompleted}
                />
            ))}
        </div>
    )
}

export default TodoList;