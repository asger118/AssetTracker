import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    return (
    <nav className="navbar">
        <ul className="navbar-nav">
          <div className="header">
            <svg width="800px" height="800px" viewBox="0 0 64 64" className="avatar">

              <defs>

                <style>{`
              .cls-1 {
                fill: #75cef9;
              }

              .cls-2 {
                fill: #756e78;
              }

              .cls-3 {
                fill: #665e66;
              }

              .cls-4 {
                fill: #b1e4f9;
              }

              .cls-5 {
                fill: #eaafa5;
              }

              .cls-6 {
                fill: #f1cbc6;
              }

              .cls-7 {
                fill: #544f57;
              }
              `}</style>

              </defs>

              <g data-name="Winter Avatar">

                <path className="cls-1" d="M15.09,27V24.91a16.91,16.91,0,1,1,33.82,0V27l-15.8,6.29Z" id="path51134-3-2-5" />

                <path className="cls-2"
                  d="M44,47.16c0-3.19-3.62-4.53-3.62-4.53H23.64S20,44,20,47.16l-.08,4.56,2.72,2L32.74,55l9.35-1.53Z"
                  id="path37315-2-9-3" />

                <path className="cls-3"
                  d="M39.33,51.1a4.61,4.61,0,0,0,1.06-3.94H44a6.13,6.13,0,0,1,6.15,6.15v1.07A1.62,1.62,0,0,1,48.51,56h-33a1.62,1.62,0,0,1-1.62-1.62V53.31A6.13,6.13,0,0,1,20,47.16h3.59a4.61,4.61,0,0,0,1.06,3.94s1,1.45,7.36,1.45S39.33,51.1,39.33,51.1Z"
                  id="path37815-7-81-6" />

                <path className="cls-4"
                  d="M19.45,37.47H15.51A2.56,2.56,0,0,1,13.07,35l-.62-4.9a3.07,3.07,0,0,1,3.19-3.2H48.36a3.07,3.07,0,0,1,3.19,3.2L50.93,35a2.56,2.56,0,0,1-2.44,2.44h-29Z"
                  id="rect49272-0-9-1" />

                <path className="cls-5" d="M27.35,44.5l.7,3.13c.33,2.16,1.76,3.95,3.95,3.95s3.62-1.79,4-3.95l.7-3.13-5.41-6Z"
                  id="path22987-26-8-7" />

                <path className="cls-6" d="M18.29,28.88l-.11,1.35a13.87,13.87,0,1,0,27.64,0l-.2-2.42-8.16-11L21.38,22.12Z"
                  id="path99362-0-5" />

                <path className="cls-5"
                  d="M40.49,20.89a13,13,0,0,1,.59,2.94l.33,4,.2,2.42A13.87,13.87,0,0,1,29.89,45.08a14.65,14.65,0,0,0,2.11.16,13.87,13.87,0,0,0,13.82-15l-.2-2.42Z"
                  id="path101009-9-3" />

                <path className="cls-3" d="M33.2,22.87s5.77,6.9,12.42,4.94l-.33-4a13.17,13.17,0,0,0-5.4-9.59l-6.48,1.24Z"
                  id="path113433-6-5" />

                <path className="cls-7"
                  d="M32,11.7a14.65,14.65,0,0,0-2.11.16,13.52,13.52,0,0,1,5.79,2.38,13.17,13.17,0,0,1,5.4,9.59l.33,4V28a8.74,8.74,0,0,0,4.2-.18l-.33-4A13.23,13.23,0,0,0,32,11.7Z"
                  id="path101011-3-6" />

                <path className="cls-2"
                  d="M32,11.7A13.23,13.23,0,0,0,18.71,23.83l-.42,5.05a26,26,0,0,0,21.6-14.64A13.41,13.41,0,0,0,32,11.7Z"
                  id="path22989-64-8-2" />

                <path className="cls-3"
                  d="M32,11.7a13.14,13.14,0,0,0-2.1.16,13.53,13.53,0,0,1,5.78,2.38,13.13,13.13,0,0,1,2.74,2.68,20.32,20.32,0,0,0,1.47-2.68A13.41,13.41,0,0,0,32,11.7Z"
                  id="path186167-9" />

                <path
                  d="M35.36,37.84a6.38,6.38,0,0,1-3.36.9,6.45,6.45,0,0,1-3.37-.91,1,1,0,0,0-1.39.25,1,1,0,0,0,.24,1.39,8.68,8.68,0,0,0,9,0,1,1,0,0,0,.24-1.39A1,1,0,0,0,35.36,37.84Z" />

                <path
                  d="M12.08,35.16a3.54,3.54,0,0,0,3.43,3.31h3.36a14.87,14.87,0,0,0,2.19,3.16c.26.28.54.54.82.8a5.93,5.93,0,0,0-2.74,3.82,7.13,7.13,0,0,0-6.27,7.06v1.07A2.62,2.62,0,0,0,15.49,57h33a2.62,2.62,0,0,0,2.62-2.62V53.31a7.13,7.13,0,0,0-6.27-7.06,5.93,5.93,0,0,0-2.74-3.82c.28-.26.56-.52.82-.8a14.87,14.87,0,0,0,2.19-3.16h3.36a3.54,3.54,0,0,0,3.43-3.31l.62-4.91a3.57,3.57,0,0,0-.91-2.85,4.34,4.34,0,0,0-1.72-1.16V24.91a17.91,17.91,0,1,0-35.82,0v1.33a4.34,4.34,0,0,0-1.72,1.16,3.57,3.57,0,0,0-.91,2.85Zm32.47-7.95c-4.44.79-8.44-2.62-9.95-4.13A28,28,0,0,0,40.23,16a12.05,12.05,0,0,1,4.06,8.12Zm-25.16.7.32-3.82A12.19,12.19,0,0,1,32,12.88a12.54,12.54,0,0,1,6.63,1.88A24.84,24.84,0,0,1,19.39,27.91Zm23.4,18.25h-2.4a1,1,0,0,0-.78.37,1,1,0,0,0-.2.84,3.65,3.65,0,0,1-.79,3,1,1,0,0,0,0,1.41,1,1,0,0,0,1.42,0,5.16,5.16,0,0,0,1.43-3.64H44a5.16,5.16,0,0,1,5.15,5.15v1.07a.62.62,0,0,1-.62.62h-33a.62.62,0,0,1-.62-.62V53.31A5.16,5.16,0,0,1,20,48.16h2.51A5.16,5.16,0,0,0,24,51.8a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.41,3.65,3.65,0,0,1-.79-3,1,1,0,0,0-.2-.84,1,1,0,0,0-.78-.37H21.22a4.78,4.78,0,0,1,2.33-2.39,14.63,14.63,0,0,0,2.92,1.56L27.06,48c.44,2.87,2.43,4.8,4.94,4.8s4.5-1.93,4.93-4.73l.6-2.7a15,15,0,0,0,2.93-1.56A4.77,4.77,0,0,1,42.79,46.16ZM28.67,46a14.41,14.41,0,0,0,6.66,0L35,47.66c-.22,1.43-1.12,3.1-3,3.1s-2.74-1.67-3-3.17Zm12.79-5.76A12.86,12.86,0,0,1,19.18,30.5l0-.55A28.21,28.21,0,0,0,25,28.69a4,4,0,1,0,6,4.39h1.86a4,4,0,1,0,0-2H31.07a3.84,3.84,0,0,0-4.38-3,26.41,26.41,0,0,0,6.38-3.73c1.47,1.52,5.35,5,10.1,5a9.3,9.3,0,0,0,1.55-.14l.1,1.29A12.7,12.7,0,0,1,41.46,40.27ZM29.21,32.08a2,2,0,1,1-4.05,0A2,2,0,0,1,29.21,32.08Zm5.58,0a2,2,0,1,1,2,2A2,2,0,0,1,34.79,32.08ZM50.56,30l-.62,4.91a1.59,1.59,0,0,1-1.45,1.56H46a14.82,14.82,0,0,0,.8-6.14l-.2-2.4h1.74a2.45,2.45,0,0,1,1.77.79A1.62,1.62,0,0,1,50.56,30ZM32,9A15.93,15.93,0,0,1,47.91,24.91v1H46.45l-.16-2a14.35,14.35,0,0,0-28.58,0l-.16,2H16.09v-1A15.93,15.93,0,0,1,32,9ZM13.87,28.72a2.45,2.45,0,0,1,1.77-.79h1.74l-.2,2.4a14.82,14.82,0,0,0,.8,6.14H15.51a1.59,1.59,0,0,1-1.45-1.56L13.44,30A1.62,1.62,0,0,1,13.87,28.72Z" />

              </g>

            </svg>
            <div className="header-info">
              <h3>Asger Veng</h3>
              <p>10.000.000kr</p>
            </div>
            {/* <div className="header-dropdown"><svg width="800px" height="800px" viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z" />
          </svg></div>  */}
          </div>
          <hr />
          <li className="nav-item">
            <a href="/#" className="nav-link-seperator"><span className="link-text-seperator">MENU</span></a>
          </li>
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => { return isActive ? "nav-link-active" : "nav-link" }}>
              <svg width="234" height="224" viewBox="0 0 234 224" fill="none">
                <rect id="Rectangle 1" width="100" height="100" rx="30" fill="currentColor" className="fa-primary" />
                <rect id="Rectangle 2" x="134" width="100" height="100" rx="30" fill="currentColor" className="fa-primary" />
                <rect id="Rectangle 3" x="134" y="124" width="100" height="100" rx="30" fill="currentColor" className="fa-primary" />
                <rect id="Rectangle 4" y="124" width="100" height="100" rx="30" fill="currentColor" className="fa-primary" />
              </svg>
              <span className="link-text">Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="MyAssets" className={({ isActive }) => { return isActive ? "nav-link-active" : "nav-link" }}>
              <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                <path className="fa-primary" d="M13 9H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round" />
                <path className="fa-primary"
                  d="M22 10.9699V13.03C22 13.58 21.56 14.0299 21 14.0499H19.0399C17.9599 14.0499 16.97 13.2599 16.88 12.1799C16.82 11.5499 17.0599 10.9599 17.4799 10.5499C17.8499 10.1699 18.36 9.94995 18.92 9.94995H21C21.56 9.96995 22 10.4199 22 10.9699Z"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path className="fa-primary"
                  d="M17.48 10.55C17.06 10.96 16.82 11.55 16.88 12.18C16.97 13.26 17.96 14.05 19.04 14.05H21V15.5C21 18.5 19 20.5 16 20.5H7C4 20.5 2 18.5 2 15.5V8.5C2 5.78 3.64 3.88 6.19 3.56C6.45 3.52 6.72 3.5 7 3.5H16C16.26 3.5 16.51 3.50999 16.75 3.54999C19.33 3.84999 21 5.76 21 8.5V9.95001H18.92C18.36 9.95001 17.85 10.17 17.48 10.55Z"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="link-text">My asset</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="Market" className={({ isActive }) => { return isActive ? "nav-link-active" : "nav-link" }}>
              <svg width="800" height="800" viewBox="0 0 800 800">
                <path className="fa-primary"
                  d="M100 80C88.9543 80 80 88.9543 80 100V699.75C80 710.796 88.9543 719.75 100 719.75H699.75C710.796 719.75 719.75 710.796 719.75 699.75V100C719.75 88.9543 710.796 80 699.75 80H100ZM673.101 106.649C684.146 106.65 693.1 115.604 693.1 126.649V215.246C693.1 219.318 691.857 223.293 689.537 226.64L529.656 457.276C523.083 466.758 509.871 468.727 500.819 461.573L413.623 392.667C404.657 385.583 391.589 387.436 384.947 396.735L274.506 551.366C268.232 560.15 256.118 562.371 247.137 556.383L198.94 524.252C190.526 518.643 179.25 520.196 172.666 527.871L106.675 604.8V126.626C106.675 115.58 115.63 106.625 126.676 106.626L673.101 106.649ZM126.65 693.1C115.604 693.1 106.65 684.146 106.65 673.1V645.775L177.515 563.171C184.099 555.496 195.376 553.943 203.79 559.553L253.812 592.906C262.794 598.895 274.907 596.675 281.182 587.891L390.373 435.032C397.014 425.735 410.081 423.881 419.047 430.965L506.543 500.099C515.596 507.252 528.807 505.283 535.38 495.801L693.075 268.3V673.1C693.075 684.146 684.121 693.1 673.075 693.1H126.65Z"
                  fill="currentColor" stroke="currentColor" strokeWidth="32" />
              </svg>
              <span className="link-text">Market</span>
            </NavLink>
            <ul className="sub-nav">
              <li ><Link to="Stock" className="nav-link"><span className="link-text">Stock</span></Link></li>
              <li ><Link to="Funds" className="nav-link"><span className="link-text">Funds</span></Link></li>
              <li ><Link to="Crypto" className="nav-link"><span className="link-text">Crypto</span></Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="/#" className="nav-link-seperator"><span className="link-text-seperator">ACCOUNT</span></a>
          </li>
          <li className="nav-item">
            <NavLink to="AcoountSettings" className={({ isActive }) => { return isActive ? "nav-link-active" : "nav-link" }}>
              <svg width="800" height="800" viewBox="0 0 800 800">
                <path className="fa-primary"
                  d="M400 400C473.638 400 533.333 340.305 533.333 266.667C533.333 193.029 473.638 133.333 400 133.333C326.362 133.333 266.667 193.029 266.667 266.667C266.667 340.305 326.362 400 400 400Z"
                  fill="currentColor" />
                <path className="fa-primary" clipRule="evenodd"
                  d="M399.999 433C277.47 433 176.961 568.139 167.07 740.106C166.188 755.454 173.746 768 182.966 768H617.033C626.255 768 633.811 755.454 632.93 740.106C623.04 568.139 522.53 433 399.999 433Z"
                  fill="currentColor" fillOpacity="0.24" />
              </svg>
              <span className="link-text">Account settings</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="Settings" className={({ isActive }) => { return isActive ? "nav-link-active" : "nav-link" }}>
              <svg width="800px" height="800px" viewBox="0 0 20 20">
                <path
                  d="M10 13a3 3 0 110-6 3 3 0 010 6zm7.476-1.246c-1.394-.754-1.394-2.754 0-3.508a1 1 0 00.376-1.404l-1.067-1.733a1 1 0 00-1.327-.355l-.447.243c-1.329.719-2.945-.244-2.945-1.755V3a1 1 0 00-1-1H8.934a1 1 0 00-1 1v.242c0 1.511-1.616 2.474-2.945 1.755l-.447-.243a1 1 0 00-1.327.355L2.148 6.842a1 1 0 00.376 1.404c1.394.754 1.394 2.754 0 3.508a1 1 0 00-.376 1.404l1.067 1.733a1 1 0 001.327.355l.447-.243c1.329-.719 2.945.244 2.945 1.755V17a1 1 0 001 1h2.132a1 1 0 001-1v-.242c0-1.511 1.616-2.474 2.945-1.755l.447.243a1 1 0 001.327-.355l1.067-1.733a1 1 0 00-.376-1.404z"
                  fill="currentColor" className="fa-primary" />
              </svg>
              <span className="link-text">Settings</span>
            </NavLink>
          </li>
          <li className="nav-item nav-item-toggle">
            <input type="checkbox" id="darkmode-toggle" className="darkmode-toggle-input" />
            <label htmlFor="darkmode-toggle" className="darkmode-toggle-label">
              <svg className="moon" width="800px" height="800px" viewBox="0 0 24 24">
                <path fill="none"
                  d="M2.02911 12.42C2.38911 17.57 6.75911 21.76 11.9891 21.99C15.6791 22.15 18.9791 20.43 20.9591 17.72C21.7791 16.61 21.3391 15.87 19.9691 16.12C19.2991 16.24 18.6091 16.29 17.8891 16.26C12.9991 16.06 8.99911 11.97 8.97911 7.13996C8.96911 5.83996 9.23911 4.60996 9.72911 3.48996C10.2691 2.24996 9.61911 1.65996 8.36911 2.18996C4.40911 3.85996 1.69911 7.84996 2.02911 12.42Z"
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <svg className="sun" stroke="currenColor" width="800px" height="800px" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3" stroke="#currenColor" strokeWidth="2" fill="none" />
                <path d="M12 5V3" stroke="currenColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M12 21V19" stroke="currenColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M16.9498 7.05026L18.364 5.63605" stroke="currenColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M5.63608 18.364L7.05029 16.9498" stroke="currenColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M19 12L21 12" stroke="currenColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M3 12L5 12" stroke="currenColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M16.9498 16.9497L18.364 18.364" stroke="currenColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M5.63608 5.63602L7.05029 7.05023" stroke="currenColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </label>
          </li>
        </ul>
      </nav>
      );
};

export default Navbar;