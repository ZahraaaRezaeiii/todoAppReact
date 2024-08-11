import React from 'react';

export const Todo = ({ todoList, toggleComplete, removeTodo }) => {
    return (
    <React.Fragment>
      <div className="card">
        {todoList.map((item) => (
          <div className="card-body d-flex justify-content-between" key={item.id} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
            <div className="d-flex align-items-center">{item.text}</div>
            <div className="d-flex justify-content-end gap-1">
              <button type="button" className="btn btn-dark" onClick={() => toggleComplete(item.id)}>
                {item.completed ? 'Undo' : 'Complete'}
              </button>
              <button type="button" className="btn btn-dark" onClick={() => removeTodo(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
    )   
}   
      
