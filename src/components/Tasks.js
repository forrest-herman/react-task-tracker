import Task from "./Task"

const Tasks = ({ tasks, onDelete, toggleReminder }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} myTask={task} onDelete={onDelete} toggle={toggleReminder} />
            ))}
        </>
    )
}

export default Tasks
