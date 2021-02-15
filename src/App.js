import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "2DA3 Assignment",
            day: "Feb 20 at 11:59pm",
            reminder: false,
        },
        {
            id: 2,
            text: "4X03 A2",
            day: "Feb 21 at 11:59pm",
            reminder: false,
        },
        {
            id: 3,
            text: "Apply to Jobs",
            day: "Everyday at 11:59pm",
            reminder: false,
        },
    ])

    // Add Task
    const addTask = (newTask) => {
        console.log(newTask)
        const id = Math.floor(Math.random() * 10000) + 1
        setTasks([...tasks, { id, ...newTask }])
    }

    // Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    //Toggle Reminder
    const toggleReminder = (id) => {
        console.log(id)
        setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)))
    }

    const name = "Forrest"

    return (
        <div className='container'>
            <Header />
            <AddTask onAdd={addTask} />
            {(tasks.length > 0 && <Tasks tasks={tasks} onDelete={deleteTask} toggleReminder={toggleReminder} />) || (
                <h3>You have no tasks at this time</h3>
            )}
            {/* <h1>Hello from React</h1>
      <h2>Hello {name}</h2> */}
        </div>
    )
}

export default App
