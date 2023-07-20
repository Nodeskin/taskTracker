import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";


const TravApp = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "Feb 6th at 12:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:40pm",
      reminder: true,
    },
  ]);

  const texty =  {
    id: 3,
   task : {
    text: "Food Shopping",
    day: "Feb 5th at 2:40pm",
    reminder: true
  }
  }

  // const newVar = {id, ...texty.task}
  

  // Add Task
  const addTask = (task) => {
    console.log(task)         
    const id = Math.floor(Math.random() * 10000) + 1;
    // console.log(id);

    const newTask = { id, ...task };
    // console.log('This is old task', newTask)
    setTasks([...tasks, newTask]);

    // const newTasks = { id, task };
    // console.log('This is new task', newTasks)
    

  
  };

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const ToggleReminder = (id) => {
    console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={ToggleReminder} />
      ) : ( "No Task" )}

    </div>
  );
};

export default TravApp;
