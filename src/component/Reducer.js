import {ADD_TASK, ALL_TASK, COMPLETE_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK, EDIT_TASK_OK, FILTER_TASK}from './ActionType'

  const initState ={
    tasks:[{id:'1',text:'behi',isDone:false, tabdil:false},
    {id:'2',text:'akeka',isDone:false,tabdil:false}
],
y:"ALL"


}
const reducer =(state=initState,action)=>{
    switch (action.type) {
        case ADD_TASK:
            return{
            ...state,
            tasks:[...state.tasks,{text:action.payload,id:Math.random(),isDone:false,tabdil:false}]
            }
            
        case COMPLETE_TASK:
            return{
        ...state,
        tasks:state.tasks.map(el=>el.id===action.payload?{...el,isDone:!el.isDone} : el)    
            }
            

            case DELETE_TASK :
                return{
                    ...state,
                    tasks:state.tasks.filter(el=>el.id!==action.payload)
                }
            case EDIT_TASK_OK:
                return {
                    ...state,
                    tasks:state.tasks.map(el=>el.id===action.payload.id?{...el,tabdil:!el.tabdil,text:action.payload.text}:el)
                }
                case EDIT_TASK:
                    return{
                        ...state,
                        tasks:state.tasks.map(el=>el.id===action.payload?{...el,tabdil:!el.tabdil}:el)
                    }
                case FILTER_TASK:
                    return {
                        ...state,
                        y:action.payload
                    }
        default:
            return state;
    }


}
export default reducer