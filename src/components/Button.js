import PropTypes from 'prop-types';

const Button = ({ color, text, click }) => {

    return (
        <div>
            <button onClick={click} style={{backgroundColor: color}} className='btn'>{text}</button>
        </div>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button
