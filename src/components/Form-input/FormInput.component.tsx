import { FC, InputHTMLAttributes } from 'react';
import formInputStyles from './form-input.module.scss';
interface FormInputData extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    required?: boolean
    name?: string
    value?: string
    onChange?: (e: React.FormEvent<HTMLInputElement>)=>void
}
const FormInput: FC<FormInputData> = ({ onChange, label,...otherProps }: FormInputData)=>{
    return(
        <div className={formInputStyles.group}>
            <input onChange={onChange} required className={formInputStyles["form-input"]} {...otherProps} />
            {
                label?(
                    <label className={formInputStyles[`${otherProps.value?.length ?'shrink':''} form-input-label`]}>{label}</label>
                ):''
            }
                    
        </div>
    )
}
export default FormInput;