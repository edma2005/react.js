import "./CustomButton.css";

const CustomButton = ({variant, children}) => {
    if (variant === "text") {
        return <button className="button text">{children}</button>;
    } else if (variant === "contained") {
        return <button className="button contained">{children}</button>
    } else {
        return <button className="button outlined">{children}</button>
    }
}

export default CustomButton;