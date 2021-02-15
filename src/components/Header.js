import PropTypes from "prop-types"
import { useLocation } from "react-router-dom"
import Button from "./Button"

const Header = ({ title, showTaskForm, buttonText }) => {
    // const onClick = () => {
    //     setShowAddTask(true)
    // }

    const location = useLocation()

    return (
        <div>
            <header className='header'>
                <h1>{title}</h1>
                {location.pathname == "/" && (
                    <Button
                        color={buttonText ? "#8f4113" : "#af4113"}
                        text={buttonText ? "Cancel" : "Add Task"}
                        click={showTaskForm}
                    />
                )}
            </header>
        </div>
    )
}

Header.defaultProps = {
    title: "Task Tracker",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
const headingStyle = {
    color: "red",
    backgroundColor: "black",
    click: PropTypes.func,
}

export default Header
