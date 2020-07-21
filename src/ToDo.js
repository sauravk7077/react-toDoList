import React from "react";

function ToDo(props) {
    return (
        <div className="toDoElement" onClick={props.onClick} id={props.id}>{props.t}</div>
    );
}

export default ToDo;