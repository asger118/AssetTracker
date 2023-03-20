import "../styles/LoginStyle.css"
import { ReactComponent as EmailImage } from "../images/email.svg"
import { ReactComponent as LockImage } from "../images/lock.svg"
import { ReactComponent as GoogleImage } from "../images/google.svg"

import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup,  signOut, } from "firebase/auth";
import { useState } from "react";

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err);
        }
    };

    const signInWithGoogle = async () => {
        try {
          await signInWithPopup(auth, googleProvider);
        } catch (err) {
          console.error(err);
        }
      };

      const logout = async () => {
        try {
          await signOut(auth);
        } catch (err) {
          console.error(err);
        }
      };

    return (
        <main>
            <div className="wrapper">
                <header>Login</header>
                <form>
                    <div className="field email">
                        <div className="input-area">
                            <input placeholder="Email Address" onChange={(e) => setEmail(e.target.value)}/>
                            <i className="icon fas fa-envelope"><EmailImage /></i>
                            <i className="error error-icon fas fa-exclamation-circle"></i>
                        </div>
                        <div className="error error-txt">Email can't be blank</div>
                    </div>
                    <div className="field password">
                        <div className="input-area">
                            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                            <i className="icon fas fa-lock"><LockImage /></i>
                            <i className="error error-icon fas fa-exclamation-circle"></i>
                        </div>
                        <div className="error error-txt">Password can't be blank</div>
                    </div>
                    <div className="pass-txt"><a href="/#">Forgot password?</a></div>
                    <input type="submit" value="Login" onClick={signIn}/>
                    <GoogleImage className="SignInWithGoogleIcon" onClick={signInWithGoogle}/>
                </form>
                <div className="sign-txt">Not yet member? <a href="/#">Signup now</a></div>
            </div>
            <button onClick={logout}> Logout </button>
        </main>

    );

};

export default SignIn;