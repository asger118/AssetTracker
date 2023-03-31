import React, { useRef, useState } from "react"
import { useAuth } from "../Contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"

import "../styles/LoginStyle.css"
import { ReactComponent as EmailImage } from "../images/email.svg"
import { ReactComponent as LockImage } from "../images/lock.svg"
import { ReactComponent as GoogleImage } from "../images/google.svg"

import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";


export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const signInWithGoogle = async (e) => {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            await signInWithPopup(auth, googleProvider);
            navigate("/");
        } catch (err){
            setError("Failed to sign up")
            console.log(error)
        }
    };
  
    async function handleSubmit(e) {
      e.preventDefault()
  
      try {
        setError("")
        setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value)
        navigate("/")
      } catch (err){
        setError("Failed to sign up")
        console.log(err)
      }
  
      setLoading(false)
    }
  return (
            <div className="wrapper">
                <header>Sign Up </header>
                {error && <div variant="danger" className="errorAlert">{error}</div>}
                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="field email">
                        <div className="input-area">
                            <input autoComplete="email" placeholder="Email Address" type="email" ref={emailRef} required />
                            <i className="icon fas fa-envelope"><EmailImage /></i>
                        </div>
                    </div>
                    <div className="field password">
                        <div className="input-area">
                            <input autoComplete="new-password" placeholder="Password" type="password" ref={passwordRef} required />
                            <i className="icon fas fa-lock"><LockImage /></i>
                        </div>
                    </div>
                    <div className="field password">
                        <div className="input-area">
                            <input autoComplete="new-password" placeholder="Confirm Password" type="password" ref={passwordConfirmRef} required />
                            <i className="icon fas fa-lock"><LockImage /></i>
                        </div>
                    </div>
                    <input type="submit" disabled={loading} value="Sign Up" />
                    <GoogleImage className="SignInWithGoogleIcon" onClick={signInWithGoogle} />
                </form>
                <div className="sign-txt">Already have an account? <Link to="/login">Log In</Link></div>
            </div>
  )
}