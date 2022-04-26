import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="#page-top">Pandamonium Labs</a>
                <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item mx-0 mx-lg-1">
                          <NavLink class="nav-link py-3 px-0 px-lg-3 rounded" to="/">
                            Home
                            <span className="sr-only">(current)</span>
                          </NavLink>
                        </li>
                        <li class="nav-item mx-0 mx-lg-1"><NavLink class="nav-link py-3 px-0 px-lg-3 rounded" to="/portfolio">Portfolio</NavLink></li>
                        <li class="nav-item mx-0 mx-lg-1"><NavLink class="nav-link py-3 px-0 px-lg-3 rounded" to="/about">About</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div> 
  );
}

export default Navigation;