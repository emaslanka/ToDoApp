import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import getTasks from "./api/tasks";
import NewTask from "./Components/NewTask";
import Tasks from "./Components/Tasks";
import TaskList from "./Components/TaskList";
import {setNewTaskAPI} from "./api/operation";

function App() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({});


  useEffect(()=>{
    console.log(getTasks(setTasks));
  },[])


    useEffect(()=>{

        if(newTask.title){
            setNewTask(newTask, setTasks)
        }

    },[newTask])

  return (
      <>
        <NewTask onNewTask={setNewTask}/>
        <TaskList tasks={tasks}/>
      </>

  )
}

ReactDOM.render(<App/>, document.querySelector("#app"));