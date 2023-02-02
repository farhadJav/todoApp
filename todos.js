"use client";

import { useRouter } from "next/navigation";



const getTodos = async () => {
    let todos = await fetch("http://localhost:3000/api/todolist");
    return todos.json();
  };

async function update(id, completed, refresh) {
  await fetch("../api/updateTodo", {
    method: "POST",
    body: JSON.stringify({ id, completed }),
  });

  refresh();
}

async function deleteTodo(id, refresh) {
  await fetch("../api/delete?id=${id}", {
    method: "DELETE",
  });

  refresh();
}

export default function Todo({ todo }) {
  const router = useRouter();
  return (
    <>
      <input
        type="checkbox"
        onChange={(e) => update(todo.id, e.target.checked, router.refresh)}
        checked={todo.completed}
      />
     <>{todo.todo}</>
     <>{todo.id}</>
      <button onClick={() => deleteTodo(todo.id, router.refresh)}>
        Delete
      </button>
      
    </>
    
  );
}