import {useSelector} from "react-redux";
import TodoItem from "./TodoItem";

const TodoGroup = () => {
    const todos = useSelector(state => state.todoList)
    //const todos = [{id:1, text:'todo example 1', done:false}, {id:2, text:'todo example 2', done:false}]

    return(<div>
        {todos.map(todo => <TodoItem key={todo.id} todo={todo}> </TodoItem>)}
    </div>
    )
}
export default TodoGroup;