import { useState } from "react";
import { useDispatch } from "react-redux";
import '../style/TodoGenerator.css'

const TodoGenerator = () => {
    const [text, setText] = useState("")
    const dispatch = useDispatch()
    return(
        <div>
            <input onChange={event => setText(event.target.value)} defaultValue={text} placeholder="Add todo here" className="TodoGenerator"></input>
            <button onClick={() => dispatch({type: 'todo/add', payload : text})} className="TodoGeneratorButton">Add</button>
        </div>
    )
}
export default TodoGenerator;