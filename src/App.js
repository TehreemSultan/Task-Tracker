import {useState} from 'react';
import Tasks from './components/Tasks';
import Header from './components/Header'
import './App.css';

function App() {
 
  const [tasks, setTasks] = 
  useState([
    {id:1,text:'doctor appointment',day:'feb 6th at 1:30pm',remainder:true},
    {id:2,text:'teacher appointment',day:'feb 6th at 1:30pm',remainder:true}])

    //for deleting task
    const deleteTask=(id)=>{
      setTasks(tasks.filter((task)=>task.id!==id))
    }

    //for toggling reminder
    const toggleReminder=(id)=>{
      setTasks(tasks.map((task)=>task.id===id?{...task, reminder:!task.reminder}:task))
    }

    

  return (
    <div className="container">
     <Header />
   
     {tasks.length>0?<Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}/>:'No Tasks to Show'}
    </div>
  );
}

export default App;
