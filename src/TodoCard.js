import { useDispatch } from "react-redux"
import {completeTask, deleteTask, editTheTask, editTheTaskOk} from './component/Action'
import React,{useState} from 'react'


const TodoCard=({el}) =>{
    const [editedText, setEditedText] = useState(el.text)

   const dispatch=useDispatch()
   const  handleComplete =()=>{
       dispatch(completeTask(el.id))
   }
   const handleDelete=()=>{
       dispatch(deleteTask(el.id))
   }
   const handleEditOk=()=>{
    dispatch(editTheTaskOk({id:el.id,text:editedText}))
   }
   const handleEdit=()=>{
       dispatch(editTheTask(el.id))
       setEditedText(el.text)
   }
     return(
         <div>
            {(el.tabdil) ? (
            <>
            <input value={editedText} onChange={(e)=>setEditedText(e.target.value)}/> 
            <button class="btn btn-outline-success" onClick={handleEditOk}>OK</button>
            <button class="btn btn-outline-secondary" onClick={handleEdit}>Cancel</button>
            </>
            ) :(
            <>
            <h3 style={(el.isDone)?{textDecoration:'line-through'}:{textDecoration:'none'}}>{el.text}</h3>
            <button class="btn btn-outline-secondary" onClick={handleComplete}>Complete</button>
            <button class="btn btn-outline-warning" onClick={handleEdit}>Edit</button>
            <button class="btn btn-outline-danger" onClick={handleDelete}>Delete</button>
            </>
            )
            }
            </div>
    
    )
}
export default TodoCard