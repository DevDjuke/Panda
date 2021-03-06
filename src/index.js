import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {ScrollSpy} from "bootstrap"
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Portfolio,
  Home,
  About,
  Balathor,
  BalathorIndex
} from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio/balathor" element={<Balathor />} />
      <Route path="/wiki/balathor" element={<BalathorIndex />} />
    </Routes>
  </Router>
  </React.StrictMode>
);

serviceWorker.unregister();

window.addEventListener('DOMContentLoaded', event => {

  // Navbar shrink function
  var navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector('#mainNav');
      if (!navbarCollapsible) {
          return;
      }
      if (window.scrollY === 0) {
          navbarCollapsible.classList.remove('navbar-shrink')
      } else {
          navbarCollapsible.classList.add('navbar-shrink')
      }

  };

  // Shrink the navbar 
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
      new ScrollSpy(document.body, {
          target: '#mainNav',
          offset: 72,
      });
  };

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener('click', () => {
          if (window.getComputedStyle(navbarToggler).display !== 'none') {
              navbarToggler.click();
          }
      });
  });

});