import React , {useRef} from 'react'
import './SignupScreen.css';
import { firebaseApp } from '../firebase';
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";


export const SignupScreen = () => {
     const auth = getAuth();
     const emailRef = useRef(null);
     const passwordRef = useRef(null);
     const register = (e) => {
           e.preventDefault();

          createUserWithEmailAndPassword(
            auth,  
            emailRef.current.value,
            passwordRef.current.value
         ).then((userCredential)=>{
            // Signed in 
           const user = userCredential.user;
           console.log(user);
         }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });

     }

     const signIn = (e) =>{
           e.preventDefault();

         signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
         ).then((userCredential)=>{
            // Signed in 
            const user = userCredential.user;
            console.log(user);
         }).catch((error)=>{
            const errorMessage = error.message;
            console.log(errorMessage);
         })  
          
     }

    return (
        <div className='signupScreen'>
            <form>
             <h1>Sign In</h1>
             <input ref={emailRef} placeholder='Email' type="email" name="" />
             <input ref={passwordRef} placeholder='password' type="password" />
             <button type="submit" onClick={(e) => signIn(e)}>Sign In</button>
             <h4>
          <span className="signupScreen__gray">New to Netflix? </span>
          <span className="signupScreen__link"  onClick={(e)=> register(e)}>
            Sign Up now.
          </span>
           </h4>
            </form>
        </div>
    )
}

