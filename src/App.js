import {useState} from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Header from './components/Header'
import './App.css';

function App() {
 
  const [showAddTask, setshowAddTask] = useState(false);
  const [tasks, setTasks] = 
  useState([
    {id:1,text:'doctor appointment',day:'feb 6th at 1:30pm',remainder:true},
    {id:2,text:'teacher appointment',day:'feb 6th at 1:30pm',remainder:true}])

    
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
    <Header onClick={onClick} />
    {showAddTask&& <AddTask onAdd={addTask}/>}
    {tasks.length>0?<Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}/>:'No Tasks to Show'}
    </div>
  );
}

export default App;
