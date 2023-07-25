import React from "react";
import {Link , useLocation, useNavigate} from "react-router-dom";
 

function Navbar() {
  let history= useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    history("/login", { push: true });


  }
  let location = useLocation();
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
            <div className="navbar-brand">
                <h2>iNoteBook</h2>
            </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link  to="/" className={`nav-link ${location.pathname==="/"? "active" : ""}`} aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className={`nav-link ${location.pathname==="/about"? "active" : ""}`} aria-current="page">
                  About
                </Link>
              </li>
            </ul>
            {!localStorage.getItem('token')?<form className="d-flex" role="search">
              <Link to="/login" className="btn btn-primary mx-1"  role="button">       Login       </Link>
              <Link to="signup" className="btn btn-primary ms-1"  role="button">      Sign Up      </Link>

            </form>: <button onClick={handleLogout} className="btn btn-primary">log out</button>}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
