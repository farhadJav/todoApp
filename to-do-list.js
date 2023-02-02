//"use client";

//import { useRouter } from "next/navigation";


import Todo from "./todos";

const getTodos = async () => {
  let todos = await fetch("http://localhost:3000/api/todolist");
  return todos.json();
};    

//async function updateList(id, completed, refresh) {
  //await fetch("../api/updateTodo", {
    //method: "no-cors",
    //body: JSON.stringify({ id, completed }),
  //});

  //refresh();
//}

export default async function TodoList() {
  //const router = useRouter();
  const { todos } = await getTodos();
  return (
     <div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((t) => {
          return (
            <li key={t.id} style={{ padding: "5px 0" }}>
            <Todo todo={t}/>
              
            </li>
          );
        }
        )}
      </ul>
    </div>
  );
}
