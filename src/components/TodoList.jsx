import TodoGroup from "./TodoGroup"
import TodoGenerator from "./TodoGenerator"
import '../style/TodoList.css'

const TodoList = () => {
    return(
    <div className='todo'>
        <h1>To do List: </h1>
        <TodoGroup></TodoGroup>
        <TodoGenerator></TodoGenerator>
    </div>)
}

export default TodoList;