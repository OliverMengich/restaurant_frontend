import formInputStyles from './form-input.module.scss';
type FormInputData={
    label: string;
}
const FormInput = ({ label,...otherProps })=>{
    return(
        <div className={formInputStyles.group}>
            <input className={formInputStyles["form-input"]} {...otherProps} />
            {
                label?(
                    <label className={formInputStyles[`${otherProps.value.length ?'shrink':''} form-input-label`]}>{label}</label>
                ):''
            }
                    
        </div>
    )
}
export default FormInput;