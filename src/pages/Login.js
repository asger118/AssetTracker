import React, { useRef, useState } from "react"
import { useAuth } from "../Contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";

import "../styles/LoginStyle.css"
import { ReactComponent as EmailImage } from "../images/email.svg"
import { ReactComponent as LockImage } from "../images/lock.svg"
import { ReactComponent as GoogleImage } from "../images/google.svg"


export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const signInWithGoogle = async () => {
    try {
        await signInWithPopup(auth, googleProvider);
        navigate("/");
    } catch (err) {
        console.error(err);
    }
};


  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
            <div className="wrapper">
                <header>Log In</header>
                {error && <alert variant="danger" className="errorAlert">{error}</alert>}
                <form onSubmit={handleSubmit}>
                    <div className="field email">
                        <div className="input-area">
                            <input placeholder="Email Address" type="email" ref={emailRef} required />
                            <i className="icon fas fa-envelope"><EmailImage /></i>
                        </div>
                    </div>
                    <div className="field password">
                        <div className="input-area">
                            <input placeholder="Password" type="password" ref={passwordRef} required />
                            <i className="icon fas fa-lock"><LockImage /></i>
                        </div>
                    </div>
                    <div className="pass-txt"><Link to="/ForgotPassword">Forgot Password?</Link></div>
                    <input type="submit" disabled={loading} value="Log In" />
                    <GoogleImage className="SignInWithGoogleIcon" onClick={signInWithGoogle} />
                </form>
                <div className="sign-txt">Need an account? <Link to="/Signup">Sign up</Link></div>
            </div>
  )
}