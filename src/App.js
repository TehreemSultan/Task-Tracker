import {useState} from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Header from './components/Header'
import './App.css';

function App() {
 
  const [showAddTask, setshowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

    
//add task
   const addTask=(task)=>{
    const id=Math.floor(Math.random()*10000)+1;
    const newTask={id,...task}
    setTasks([...tasks, newTask])
  }

    //for deleting task
    const deleteTask=(id)=>{
      setTasks(tasks.filter((task)=>task.id!==id))
    }

    //for toggling reminder
    const toggleReminder=(id)=>{
      setTasks(tasks.map((task)=>task.id===id?{...task, reminder:!task.reminder}:task))
    }
    
  const onClick=()=>{
    setshowAddTask(!showAddTask);
  }
    

  return (
    <div className="container">
    <Header onClick={onClick} btnText={showAddTask?'Cancel':'Add Task'} color={showAddTask?'red':'#06d892'}/>
    {showAddTask&& <AddTask onAdd={addTask}/>}
    {tasks.length>0?<Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}/>:'No Tasks to Show, Add task using above button'}
    </div>
  );
}

export default App;
