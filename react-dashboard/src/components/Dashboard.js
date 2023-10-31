import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2  bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2">
            <h6 className="text-white"> Code With Carrington </h6>
            <ul>
                
                <li className="text-white">Dashboard</li>
                <li className="text-white">Employees</li>
                
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
