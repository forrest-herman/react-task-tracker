import { FaTimes } from "react-icons/fa"

const Task = ({ myTask, onDelete, toggle }) => {
    const taskType = () => {}

    return (
        <div
            className={`task ${myTask.reminder ? "reminder" : ""}`}
            onDoubleClick={() => {
                toggle(myTask.id)
            }}
        >
            <h3>
                {myTask.text}
                <FaTimes style={{ color: "#555", cursor: "pointer" }} onClick={() => onDelete(myTask.id)} />
            </h3>
            <p>{myTask.day}</p>
        </div>
    )
}

export default Task
