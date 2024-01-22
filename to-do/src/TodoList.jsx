import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


export default function TodoList() {

    let [todo, setTodo] = useState([{ task: "sample task", id: uuidv4() , isDone:false}]);
    let [newTodo, setNewTodo] = useState("");

    let updateTodo = (event) => {
        setNewTodo(event.target.value);
    }
    let addNewTodo = () => {

        setTodo((prevTodo) => {
            return [...prevTodo, { task: newTodo, id: uuidv4() , isDone:false }]
        })
        setNewTodo("")
    }
   
let deleteTodo = (id)=>{
    setTodo (todo.filter((todo)=>todo.id != id));
}

let doneTodo = (id)=>{
    setTodo((prevTodo)=>{
       return prevTodo.map((el)=>{
            if(el.id == id){
                return {
                    ...el,isDone:true
                }
            }else{
                return el;
            }
        })
    })
}



return (
    <div>
        <input type="text" placeholder='enter tasks' value={newTodo} onChange={updateTodo} />
        <br /><br />
        <button onClick={addNewTodo}>Add Task</button><br /><br /><hr />
        <h4>Tasks to do.</h4>
        <ul>
        {
                    todo.map((el) => (
                        <li key={el.id}>
                            <span style={el.isDone ? {textDecorationLine:"line-through"}:{}}>{el.task}</span>&nbsp;&nbsp;
                            <button onClick={()=>{deleteTodo(el.id)}}>Delete</button>
                            <button onClick={()=>{doneTodo(el.id)}}>mark as done</button>
                        </li>
                    ))
                }
        </ul>
    </div>
)
}