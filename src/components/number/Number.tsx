import { ReactNode } from "react";
import "./Number.css";

type NumberProps = {
    children?: ReactNode;
};

export const Number = ({ children }: NumberProps) => {
    return (
        <div className="number-container">
            <div className="number-content">
                <div className="vertical-line" />
                <span className="circle">{children}</span>
            </div>
        </div>
    );
};
