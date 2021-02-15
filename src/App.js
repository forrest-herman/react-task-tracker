import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState([{
    id: 1,
    text: '2DA3 Assignment',
    day: 'Feb 20 at 11:59pm',
    reminder: false,
  },])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const name = 'Forrest'

  return (
    <div className="container">
      <Header />
      {(tasks.length > 0 && <Tasks tasks = {tasks} onDelete= {deleteTask}/>) || <h3>You have no tasks at this time</h3>}
      {/* <h1>Hello from React</h1>
      <h2>Hello {name}</h2> */}
    </div>
  );
}



export default App;
