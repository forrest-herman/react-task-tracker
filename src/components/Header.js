import PropTypes from 'prop-types';
import Button from './Button'

const Header = ({ title }) => {
    const onClick = (e) => {
        console.log('Click')
    }

    return (
        <div>
            <header className='header'>
                <h1>{title}</h1>
                <Button color='#8f4113' text='Add' click={onClick}/>
            </header>    
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
const headingStyle = {
    color: 'red', 
    backgroundColor: 'black',
    click: PropTypes.func,
}

export default Header