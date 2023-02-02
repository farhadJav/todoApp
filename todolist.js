import {v4 as uuidv4} from "uuid";


let todos = [
    {
    id: 1,
    todo: "Do something nice for someone I care about",
    completed: false,
    },
{
    id: 2,
    todo: "Memorize the fifty states and their capitals",
    completed: false,
}
// other todos
    ];


let count = 2;

    export const addTodo = (todo) => {
        console.log(uuidv4());

        let newTodo = {
          id: uuidv4(),
          todo,
          completed: false,
        };
        todos.push(newTodo);
      };




      //delete


      export const deleteTodo = (id) => {
        todos = todos.filter((obj) => {
          return obj.id !== id;
        });
      };


      export const updateTodo = ({ id, completed,refresh }) => {
        // only isDone can be updated atm
        let newTodos = [];
        todos.map((obj) => {
          let newTodo = { ...obj };
          if (obj.id == id) {
            newTodo = {
              id:obj.id,
              todo:obj.todo,
              completed:true,
            };
          }
          newTodos.push(newTodo);
        });
        todos = newTodos;
      };


export default function handler(req, res) {
   
    res.status(200).json({todos});
}

