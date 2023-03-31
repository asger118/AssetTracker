import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';
import { useState } from "react"

import { ReactComponent as AvatarImage} from "../images/avatar.svg"
import { ReactComponent as DashboardImage} from "../images/dashboard.svg"
import { ReactComponent as MyAssetImage} from "../images/myAsset.svg"
import { ReactComponent as MarketImage} from "../images/market.svg"
import { ReactComponent as AccountSettingsImage} from "../images/accountSettings.svg"
import { ReactComponent as SettingsImage} from "../images/settings.svg"
import { ReactComponent as SunImage} from "../images/sun.svg"
import { ReactComponent as MoonImage} from "../images/moon.svg"
import { ReactComponent as ArrowImage} from "../images/arrow.svg"

import "../styles/NavbarStyle.css";
import "../scripts/DarkmodeScript";

export default function Navbar() {

  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    setError("")
    try {
      await logout()
      navigate("login")
    } catch (err){
      setError("Failed to log out")
      console.log(err)
    }
  }

    return (
    <nav className="navbar">
        <ul className="navbar-nav">
        {error && <div variant="danger">{error}</div>}
        {!currentUser ? (
          <NavLink to="Signup" className="nav-link">Create Account</NavLink>
        ) : (
            <div className="header">
            {!currentUser.photoURL ? <AvatarImage /> : <avatar  alt="Google Photo/Initial" src="{currentUser.photoURL}"></avatar>}
            <div className="header-info">
              <h3>{currentUser?.email}</h3> 
              <p>10.000.000kr</p>
            </div>
          </div>
        )}
          <hr />
          <li className="nav-item">
            <a href="/#" className="nav-link-seperator"><span className="link-text-seperator">MENU</span></a>
          </li>
          <li className="nav-item">
            <NavLink to="Dashboard" className={({ isActive }) => { return isActive ? "nav-link-active" : "nav-link" }}>
              <DashboardImage /><span className="link-text">Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="MyAssets" className={({ isActive }) => { return isActive ? "nav-link-active" : "nav-link" }}>
              <MyAssetImage /><span className="link-text">My asset</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="Market" className={({ isActive }) => { return isActive ? "nav-link-active" : "nav-link" }}>
              <MarketImage/><span className="link-text">Market</span><ArrowImage/>
            </NavLink>
            <ul className="sub-nav">
              <li ><Link to="Market/Stock" className="nav-link"><span className="link-text">Stock</span></Link></li>
              <li ><Link to="Market/Funds" className="nav-link"><span className="link-text">Funds</span></Link></li>
              <li ><Link to="Market/Crypto" className="nav-link"><span className="link-text">Crypto</span></Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="/#" className="nav-link-seperator"><span className="link-text-seperator">ACCOUNT</span></a>
          </li>
          <li className="nav-item">
            <NavLink to="AcoountSettings" className={({ isActive }) => { return isActive ? "nav-link-active" : "nav-link" }}>
              <AccountSettingsImage/><span className="link-text">Account settings</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="Settings" className={({ isActive }) => { return isActive ? "nav-link-active" : "nav-link" }}>
              <SettingsImage/><span className="link-text">Settings</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="Signup" className={"nav-link"} onClick={handleLogout}>
              <SettingsImage/><span className="link-text">Logout</span>
            </NavLink>
          </li>
          <li className="nav-item nav-item-toggle">
            <input type="checkbox" id="darkmode-toggle" className="darkmode-toggle-input" />
            <label htmlFor="darkmode-toggle" className="darkmode-toggle-label">
              <MoonImage/>
              <SunImage/>
            </label>
          </li>
          
        </ul>
      </nav>
      );
}