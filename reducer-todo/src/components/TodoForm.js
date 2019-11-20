import React, { useState } from "react";

function TodoForm(props) {
    
    const [listItem, setItem] = useState("");

    const handleChange = e => {
        setItem(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(listItem !== "") {
            props.addItem(listItem);
            setItem("");
        }
    }

   
    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={handleChange}
                type="text"
                name="listItem"
                value={listItem}
            />
            <button type="submit">Add</button>
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </form>
    );
}

export default TodoForm;