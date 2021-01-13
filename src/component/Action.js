import {ADD_TASK, ALL_TASK, COMPLETE_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK, EDIT_TASK_OK, FILTER_TASK, NOTDONE_TASK}from './ActionType'
export const addNewTask =(x)=>{

    return{
        type : ADD_TASK,
        payload:x,
    }
}
export const  completeTask =(x)=>{
    return {
        type: COMPLETE_TASK,
        payload:x,

    }
}
export const deleteTask=(x)=>{
    return{
        type : DELETE_TASK,
        payload:x
    }
}
export const editTheTaskOk=(x)=>{
    return {
        type:EDIT_TASK_OK,
        payload:x
    }
}
export const editTheTask=(x)=>{
    return {
        type:EDIT_TASK,
        payload:x
    }
}
export const filterTask =(x)=>{
    return {
        type:FILTER_TASK,
        payload: x
    }
}
