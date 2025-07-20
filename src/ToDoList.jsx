import { useState } from "react";

export default function ToDoList() {
    const [toDos, setTodos] = useState([]);
    const [newToDo, setnewToDo] = useState("");
    
    function addToDo(){
        setTodos((prev)=>[...prev, newToDo]);
        setnewToDo("")
    }

    function updateToDoValue(event){
        setnewToDo(event.target.value)
    }

    function deleteToDo(e){
        e.target.parentElement.remove()
    }
    
    function upperCaseAll() {
        setTodos(toDos.map((todo) => todo.toUpperCase()));
    }

    return (
    <div className="container-fluid bg-light min-vh-100 py-5">
      <div className="text-center mb-4">
        <h2 className="text-primary fw-bold">ToDo App</h2>
      </div>

      <div className="d-flex justify-content-center">
        <input
          type="text"
          className="form-control w-50 me-2"
           value={newToDo}
          onChange={updateToDoValue}
          placeholder="Add a task"
        />
        <button className="btn btn-outline-success px-4" onClick={addToDo}>Add</button>
      </div>
      <div className="mt-4 px-5">
        {
            toDos.map((todo,index)=>(
                <div className="row" key={index}>
                    <div className=" col py-2 px-2 border-bottom bg-warning d-flex justify-content-between align-items-center">
                        <span className="fs-5">{todo}</span>
                        <button className="btn btn-danger" onClick={deleteToDo}>Delete</button>
                    </div>
                </div>

            ))
        }
      </div>
      <div className="d-flex justify-content-center mt-4">
      <button className="btn btn-dark mt-2 " onClick={upperCaseAll}>Upper Case All</button>
      </div>
    </div>
  );
}
