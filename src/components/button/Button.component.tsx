import { ReactNode } from 'react';
import buttonStyles from './button.module.scss';
import clsx from 'clsx';
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
    buttonType: keyof btnDef;
    type?: "submit"|"button"
}

const Button = ({children,type="button", buttonType,...otherProps}: ButtonProps)=>{
    return(
        <button type={type} className={clsx("button-container",{[BUTTON_TYPES_CLASSES[buttonType]]: BUTTON_TYPES_CLASSES[buttonType]},'')} 
        {...otherProps}>
            {children}
        </button>
    )
}
export default Button;