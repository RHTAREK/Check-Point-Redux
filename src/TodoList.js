import React,{useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { filterTask } from './component/Action'
import TodoCard from "./TodoCard"



const TodoList=()=>{
    const dispatch=useDispatch()

    const task = useSelector(state => state)
     const handleAll=()=>{
      dispatch(filterTask("ALL"))  
     }
     const handleDone=()=>{
        dispatch(filterTask("DONE"))  
       }
       const handleNotDone=()=>{
        dispatch(filterTask("NOTDONE"))  
       }
   return (
       
       <div>
         <div><br/>
     <> <button  class="btn btn-primary" onClick={handleAll}>All</button>
        <button   class="btn btn-primary" onClick={handleDone}>Done</button>
        <button   class="btn btn-primary" onClick={handleNotDone}>Not Done</button>
         </>
         
        </div>
        
    
    { task.y==="ALL"?
    task.tasks.map((el,i)=><TodoCard key={i} el={el}/>):
    task.y==="DONE" ? task.tasks.filter(el=>el.isDone).map((el,i)=><TodoCard key={i} el={el}/>):/*task.y==="NOTDONE"*/ task.tasks.filter(el=>!el.isDone).map((el,i)=><TodoCard key={i} el={el}/>)}
    
       </div>
   )

}

export default TodoList