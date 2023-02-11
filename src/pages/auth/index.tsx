import SignInForm from '@/components/Sign-In-Form/sign-in-form.component';
import SignUpForm from '@/components/Sign-Up-Form/sign-up-form.component';
import FooterComponent from '@/components/footer/Footer.component';
import React from 'react';

function AuthPage() {
    return (
        <>
            <div style={{display: 'flex', justifyContent:"space-around", color:'black', background: 'white'}}>
                <SignInForm/>
                <SignUpForm/>
            </div>
            <FooterComponent/>
        </>
    );
}

export default AuthPage;