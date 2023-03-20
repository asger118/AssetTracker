import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as AvatarImage} from "../images/avatar.svg"
import { ReactComponent as DashboardImage} from "../images/dashboard.svg"
import { ReactComponent as MyAssetImage} from "../images/myAsset.svg"
import { ReactComponent as MarketImage} from "../images/market.svg"
import { ReactComponent as AccountSettingsImage} from "../images/accountSettings.svg"
import { ReactComponent as SettingsImage} from "../images/settings.svg"
import { ReactComponent as SunImage} from "../images/sun.svg"
import { ReactComponent as MoonImage} from "../images/moon.svg"
import { ReactComponent as ArrowImage} from "../images/arrow.svg"
import { auth } from '../config/firebase';



const Navbar = () => {
    return (
    <nav className="navbar">
        <ul className="navbar-nav">
          <div className="header">
            <AvatarImage />
            <div className="header-info">
              <h3>{auth.currentUser?.email}</h3>
              <p>10.000.000kr</p>
            </div>
          </div>
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
};

export default Navbar;