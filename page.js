import AddNewTodo from "./add-new-todo";
import TodoList from "./to-do-list";

export default function Page(){

    return (
        <div> 
           <div>
            <AddNewTodo/> 
           </div>
            <div>
            <TodoList/>
            </div>


        </div>

    );
}