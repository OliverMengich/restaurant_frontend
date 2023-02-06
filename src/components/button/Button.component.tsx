import { ButtonHTMLAttributes, ReactNode } from 'react';
import buttonStyles from './button.module.scss';
//  inverted button, default button, google sign in button
type btnDef = {
    google: string;
    inverted: string;
}
const BUTTON_TYPES_CLASSES: btnDef ={
    google: 'google-sign-in',
    inverted: 'inverted'
}
type ButtonProps={
    children: ReactNode;
    buttonType?: keyof btnDef;
    type: ButtonHTMLAttributes<HTMLButtonElement>
}
const Button = ({children, buttonType, type,...otherProps}: ButtonProps)=>{
    return(
        <button className={buttonStyles[`button-container ${buttonType? BUTTON_TYPES_CLASSES[buttonType]:''}`]} {...otherProps}>
            {children}
        </button>
    )
}
export default Button;