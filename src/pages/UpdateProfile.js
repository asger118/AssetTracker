import React, { useRef, useState } from "react"
import { useAuth } from "../Contexts/AuthContext"
import { Link, useNavigate} from "react-router-dom"

export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        navigate("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className="wrapper">
                <header>Log In</header>
                {error && <div variant="danger" className="errorAlert">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="field email">
                        <div className="input-area">
                            <input placeholder="Email Address" type="email" autoComplete="on" ref={emailRef} required />
                            <i className="icon fas fa-envelope"><EmailImage /></i>
                        </div>
                    </div>
                    <div className="field password">
                        <div className="input-area">
                            <input placeholder="Password" type="password" autoComplete="on" ref={passwordRef} required />
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