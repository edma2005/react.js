import "./Button.css"

const Button = ({onClick, children}) => {
    return <button className="styled-button" onClick={onClick}>{children}</button>
}

export default Button