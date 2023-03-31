import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Market from "./pages/Market";
import MyAssets from "./pages/myAssets";
import Navbar from "./pages/Navbar";
import Settings from "./pages/Settings";
import Stock from "./pages/Stock";
import Crypto from "./pages/Crypto";
import Funds from "./pages/Funds";
import Signup from "./pages/Signup";
import Login from "./pages/Login"
import ForgotPassword from "./pages/ForgotPassword"

import { AuthProvider } from "./Contexts/AuthContext"
import PrivateRoutes from "./Components/PrivateRoutes"

function App() {

  function LayoutsWithNavbar() {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  }


  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route path="/" element={<LayoutsWithNavbar />}>
              <Route path="Dashboard" element={<Dashboard />} />
              <Route path="MyAssets" element={<MyAssets />} />
              <Route path="Settings" element={<Settings />} />
              <Route path="Market" element={<Market />}>
                <Route path="Stock" element={<Stock />} />
                <Route path="Funds" element={<Funds />} />
                <Route path="Crypto" element={<Crypto />} />
              </Route>
            </Route>
          </Route>
          <Route path="Signup" element={<Signup />} />
          <Route path="Login" element={<Login />} />
          <Route path="ForgotPassword" element={<ForgotPassword />} />
        </Routes>
      </AuthProvider>
    </Router >
  );
};

export default App;