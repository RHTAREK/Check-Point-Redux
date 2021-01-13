import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import { addNewTask } from './component/Action';

const AddTodo=()=>{
    const [inputText, setInputText] = useState('')
    const dispatch=useDispatch()
   const  handleChange=(e)=>{
       e.preventDefault()
        dispatch(addNewTask(inputText))
        setInputText('')

    }
    return (

        <div >
            <form onSubmit={handleChange}>
            <input type='text' placeholder='enter text...'value={inputText} onChange={(e)=>setInputText(e.target.value)}/>
            <button class="btn btn-outline-success" onClick={handleChange}>Add</button>
            </form>
           </div>
    )
}
export default AddTodo