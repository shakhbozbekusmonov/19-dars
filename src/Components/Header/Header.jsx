import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <nav className="sitenav">
            <ul className="sitenav__list">
              <li className="sitenav__item">
                <a className="sitenav__link" href="#link">link </a>
              </li>
              <li className="sitenav__item">
                <a className="sitenav__link" href="#link">link </a>
              </li>
              <li className="sitenav__item">
                <a className="sitenav__link" href="#link">link </a>
              </li>
              <li className="sitenav__item">
                <a className="sitenav__link" href="#link">link </a>
              </li>
              <li className="sitenav__item">
                <a className="sitenav__link" href="#link">link </a>
              </li>
              <li className="sitenav__item">
                <a className="sitenav__link" href="#link"></a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
