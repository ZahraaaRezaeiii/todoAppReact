import React from 'react';

export const EnterTodo = ({todo, addTodo, inputGetter, handleKeyDown}) => {
    return (
    <React.Fragment>
        <div className="input-group mb-3">
            <input type="text" value={todo} onKeyDown={handleKeyDown} onChange={inputGetter} className="form-control" placeholder="type todo name" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <div className="input-group-append">
            <button onClick={addTodo} className="btn btn-outline-secondary" type="button">Add Todo</button>
            </div>
         </div>
    </React.Fragment>
    )
}