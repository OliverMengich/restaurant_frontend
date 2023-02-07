import FormInput from "../Form-input/FormInput.component";
import signInStyles from './sign-in-form.module.scss';
import Button from "../button/Button.component";

const SignInForm = ()=>{
    
    return(
        <div className={signInStyles["sign-up-container"]}>
            <h2>Already have an account? </h2>
            <span>Sign in with your Email and Password</span>
            <form >
                <FormInput label="Email" 
                    required  
                    name="email" 
                    type="email"
                    />
                <FormInput label="Password" 
                    required 
                    name="password"
                    type="password" 
                    />
                {/* <button type="submit">Sign Up</button> */}
                <div className={signInStyles["buttons-container"]}>
                <Button>Sign In</Button>
                <Button  buttonType='google'>Sign IN with Google</Button>
                </div>
            </form>
        </div>
    )
}
export default SignInForm;