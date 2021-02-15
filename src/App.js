import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./components/About"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

function App() {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }

        getTasks()
    }, [])

    // Fetch Tasks
    const fetchTasks = async () => {
        const res = await fetch("http://localhost:5000/tasks")
        const data = await res.json()

        return data
    }

    // Fetch Task
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()

        return data
    }

    // Show Add Task Form
    const showAddTaskForm = () => setShowAddTask(!showAddTask)

    // Add Task
    const addTask = async (newTask) => {
        const res = await fetch("http://localhost:5000/tasks", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(newTask),
        })
        const data = await res.json()

        setTasks([...tasks, data])

        // console.log(newTask)
        // const id = Math.floor(Math.random() * 10000) + 1
        // setTasks([...tasks, { id, ...newTask }])
    }

    // Delete Task
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" })
        setTasks(tasks.filter((task) => task.id !== id))
    }

    //Toggle Reminder
    const toggleReminder = async (id) => {
        //console.log(id)
        const taskToToggle = await fetchTask(id)
        const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(updateTask),
        })

        const data = await res.json()

        setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: data.reminder } : task)))
    }

    const name = "Forrest"

    return (
        <Router>
            <div className='container'>
                <Header showTaskForm={showAddTaskForm} buttonText={showAddTask} />

                <Route
                    path='/'
                    exact
                    render={(props) => (
                        <>
                            {showAddTask && <AddTask onAdd={addTask} />}
                            {(tasks.length > 0 && (
                                <Tasks tasks={tasks} onDelete={deleteTask} toggleReminder={toggleReminder} />
                            )) || <h3>You have no tasks at this time</h3>}
                        </>
                    )}
                />
                <Route path='/about' component={About} />
                <Footer className='footer' />
            </div>
        </Router>
    )
}

export default App
