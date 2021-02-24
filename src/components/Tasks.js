import {FaTimes} from 'react-icons/fa'

const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
       <>
       {tasks.map((task)=>
        <div className={`task ${task.reminder?'reminder':''}`} onDoubleClick={()=>onToggle(task.id)}>
             <h3>{task.text} <FaTimes onClick={()=>onDelete(task.id)} style={{color:'red', cursor:'pointer'}}/></h3>
             <p>{task.day} </p> 
        </div>
         
       )}
       </>
    )
}

export default Tasks