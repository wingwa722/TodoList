import '../style/TodoItem.css'

const TodoItem = ({todo}) => {
    return(<div className='box'>
        {todo.text}
        <span className='delete'>x</span>
    </div>
    )
}
export default TodoItem;