import React from "react";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div>
      <section>
        <footer className="text-center text-white" style={{ backgroundColor: "#0a4275" }}>
          <div className="container p-4 pb-0">
            <section>
              <p className="d-flex justify-content-center align-items-center">
                <span className="me-3">Register for free</span>

                <Link to="/signup" className="text-decoration-none text-white">
                  <button type="button" className="btn btn-outline-light btn-rounded me-2">
                    Sign Up
                  </button>
                </Link>

                <Link to="/login" className="text-decoration-none text-white">
                  <button type="button" className="btn btn-outline-light btn-rounded">
                    Sign in
                  </button>
                </Link>


              </p>
            </section>
          </div>

          <div className="text-center p-3 bg-dark">
            © 2024 Copyright <span>
              <a className="text-white" href="#"> <strong>AzadDev! 💕</strong></a>
            </span>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default Footer;
