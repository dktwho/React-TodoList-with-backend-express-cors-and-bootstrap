

import React from 'react'

const Todo = ({title, status, setTodos, id}) => {

  const deleteHandler = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_FETCH}/todos/${id}`, {method: 'delete' })
    if(response.ok) {
      setTodos((prev) => prev.filter((el) => el.id !== id))
    }  
  }

  return (
    <li className="list-group-item align-items-center d-flex justify-content-between">{title}
    <button onClick={() => deleteHandler(id)} type="button" className="btn btn-danger">Delete</button></li>
  )
}

export default Todo
