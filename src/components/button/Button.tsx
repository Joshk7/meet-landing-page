import { ReactNode } from "react";
import "./Button.css";

type ButtonProps = {
    color?: "cyan" | "purple";
    children?: ReactNode;
};

export const Button = ({ color, children }: ButtonProps) => {
    const classValue = color === "cyan" ? "cyan-button" : "purple-button";
    return (
        <button className={`download-btn ${classValue}`}>
            {children}
        </button>
    );
};
