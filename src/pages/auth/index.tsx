import SignInForm from '@/components/Sign-In-Form/sign-in-form.component';
import SignUpForm from '@/components/Sign-Up-Form/sign-up-form.component';
import React from 'react';

function AuthPage() {
    return (
        <div>
            <h1>This is the AUth page</h1>
            <SignInForm/>
            <SignUpForm/>
        </div>
    );
}

export default AuthPage;