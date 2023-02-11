import FormInput from "../Form-input/FormInput.component";
import signUpStyles from './sign-up-form.module.scss';
import Button from "../button/Button.component";

const SignUpForm = ()=>{
    
    return(
        <div className={signUpStyles["sign-up-container"]}>
            <h2>Don&apos;t have an account? </h2>
            <span>Sign Up with your Email and Password</span>
            <form>
                <FormInput 
                    label="First Name"
                    type="text"
                    name="firstName" />
                <FormInput 
                    label="Last Name" 
                    required 
                    type="text"
                    name="lastName" />
                <FormInput label="Email" 
                    required 
                    name="email" 
                    type="email"/>
                <FormInput label="Password" 
                    required
                    name="password"
                    type="password" />
                <FormInput label="birthday" 
                    required
                    name="birthday"
                    type="date" />
                <FormInput label="phone" 
                    required
                    name="phone"
                    type="text" />
                <FormInput label="Confirm Password" 
                    required
                    name="confirmPassword"
                    type="password"
                />
                <Button buttonType="inverted" type="button">Sign Up</Button>
            </form>
        </div>
    )
}
export default SignUpForm;