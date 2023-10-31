import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2  bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <h6 className="text-white  pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none">
              <span className="fs-5m fw-bolder d-sm-inline">
                {" "}
                Code With Carrington{" "}
              </span>
            </h6>
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0  align-items-start">
              <li className=" ">
                <i className="fs-4 bi-speedometer2 px-0 ms-2 px-2  "></i>
                Dashboard
              </li>
              <li className="text-white">
                <i className="fs-4 bi-people ms-2 px-2"></i>
                Manage Employees
              </li>
              <li className="text-white">
                <i className="fs-4 bi-columns ms-2 px-2"></i>
                Category
              </li>
              <li className="text-white">
                <i className="fs-4 bi-person  ms-2 px-2"></i>
                Profile
              </li>
              <li className="text-white">
                <i className="fs-4 bi-power ms-2 px-2"></i>
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
