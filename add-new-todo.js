"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
//import {TodoList} from './to-do-list';

const getTodos = async () => {
    let todos = await fetch("http://localhost:3000/api/todolist");
    return todos.json();
  };


export default function AddNewTodo(){
    const router = useRouter();
    let [todo, settodo] = useState("");
return(
<div>
<input type="text" 
  onChange={(e) =>
 settodo(e.target.value)
}
value={todo}/>
<button
 onClick={async () => {
    await addTodo(todo, router.refresh);
    settodo("");
  }}
>Add</button>
</div>

);
}




async function addTodo(todo, refresh) {
   
    await fetch("../api/addTodo", {
      method: "POST",
      body: JSON.stringify(
        {  todo }
      ),
    });
    refresh();
    console.log(todo);
  }
  