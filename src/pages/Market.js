import { Outlet } from "react-router-dom";


export default function Market() {
    return (
      <div className="page">
        <h4>Market</h4>

        <Outlet />
      </div>
      
    );
  }