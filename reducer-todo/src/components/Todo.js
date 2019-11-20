import React from "react";

const Todo = props => {
    let verboseClassName = "listItem";
    if (props.listItem.completed) {
        verboseClassName = verboseClassName + " completed";
    }

    const handleClick = () => {
        props.toggleCompleted(props.listItem.id)
        console.log("toggled")
    };

    return (
        <div onClick={handleClick} className={verboseClassName}>
            <p>{props.listItem.item}</p>
        </div>
    )
}

export default Todo;