
import './button.sass';

const Button = ({children,onClick,className}) => {
    return (
        <button type="button" className={`btn ${className}`} onClick={onClick ? () => onClick() : null}>
            {children}
        </button>
    )
};

export const OutlineButton = ({children,onClick,className}) => {
    return(
        <button type="button" className={`btn-outline ${className}`} onClick={onClick ? () => onClick() : null}>
            {children}
        </button>
    )
}

export default Button;