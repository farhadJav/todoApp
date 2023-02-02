import { updateTodo } from "./todolist";

export default function handler(req, res) {
  if (req.method === "POST") {
    let { id, todo, completed } = JSON.parse(req.body);
    updateTodo({ id, completed: Boolean(completed) });
    res.status(200).json({ msg: "todo updated" });
  } else {
    res.status(400).json({ msg: "invalid request method" });
  }
}