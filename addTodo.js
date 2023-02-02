import { addTodo } from "./todolist";

//import { count } from 'console';




export default function handler(req, res) {
    if (req.method === "POST") {
        console.log("inside adder");
        
      let { todo: todo} = JSON.parse(req.body);
      console.log("after parse");
      addTodo(todo);
      res.status(200).json({ msg: "todo added" });
    } else {
      res.status(400).json({ msg: "invalid request method" });
    }
  }












