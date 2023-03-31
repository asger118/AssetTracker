import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../Contexts/AuthContext'

const PrivateRoutes = () => {
    const { currentUser } = useAuth()
    
    return(
        currentUser ? <Outlet/> : <Navigate to="Login"/>
    )
}

export default PrivateRoutes