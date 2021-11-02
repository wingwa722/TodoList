import '../style/TodoItem.css'
import { useDispatch } from "react-redux";

const TodoItem = ({todo}) => {
    const todoStatus = todo.done ? 'boxDone' : 'box'
    const dispatch = useDispatch()

    return (<div 
        onClick = {() => dispatch({ type: 'todo/updateStatus', payload: todo.id })}
        className={todoStatus}>
        {todo.text}
        <span
            onClick = {() => dispatch({ type: 'todo/delete', payload: todo.id })}
            className='delete'>
        X
        </span>
    </div>
    )
}
export default TodoItem;