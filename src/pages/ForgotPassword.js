import React, { useRef, useState } from "react"
import { useAuth } from "../Contexts/AuthContext"
import { Link } from "react-router-dom"
import { ReactComponent as EmailImage } from "../images/email.svg"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch (err){
      setError("Failed to reset password")
      console.log(err)
    }

    setLoading(false)
  }

  return (
    <div className="wrapper">
                <header>Reset Password</header>
                {error && <div variant="danger">{error}</div>}
                {message && <div variant="success">{message}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="field email">
                        <div className="input-area">
                            <input placeholder="Email Address" type="email" ref={emailRef} required />
                            <i className="icon fas fa-envelope"><EmailImage /></i>
                        </div>
                    </div>
                    <input type="submit" disabled={loading} value="Reset Password" />
                </form>
                <div className="sign-txt">Need an account? <Link to="/signup">Sign Up</Link></div>     
            </div>
  )
}