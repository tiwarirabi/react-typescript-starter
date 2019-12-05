import React from "react";
import "./Button.css";

interface ButtonProps{
    className?: String;
    text: any;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {

    const {className, text, onClick} = props;

    return (
        <button className={`Button ${className}`} onClick={onClick}>
            <span className="Button--text">{text}</span>
        </button>
    );
};

export default Button;