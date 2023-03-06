import FormInput from "../Form-input/FormInput.component";
import signInStyles from './sign-in-form.module.scss';
import Button from "../button/Button.component";
import { useReducer } from "react";
type FormComponents = {
    email: string
    password: string
}
const formValues: FormComponents = {
    email: '',
    password: ''
}
const SignInForm = ()=>{
    function signInReducer(prev: FormComponents,next: {name :string,value: string}) {
        return {
            ...prev,
            [next.name]: next.value
        }
    }
    const [state,dispatch] = useReducer(signInReducer,formValues)
    function handleOnChange(e: React.FormEvent<HTMLInputElement>){
        const {name,value} = e.target as HTMLTextAreaElement
        dispatch({name ,value})
    }

    return(
        <div className={signInStyles["sign-up-container"]}>
            <h2>Already have an account? </h2>
            <span>Sign in with your Email and Password</span>
            <form >
                <FormInput label="Email" 
                    required  
                    name="email" 
                    type="email"
                    value={state.email}
                    onChange={handleOnChange}
                    />
                <FormInput label="Password" 
                    required 
                    name="password"
                    type="password" 
                    value={state.password}
                    onChange={handleOnChange}
                    />
                {/* <button type="submit">Sign Up</button> */}
                <div className={signInStyles["buttons-container"]}>
                <Button buttonType="inverted">Sign In</Button>
                <Button type="submit"  buttonType="google">Sign In with Google</Button>
                </div>
            </form>
        </div>
    )
}
export default SignInForm;