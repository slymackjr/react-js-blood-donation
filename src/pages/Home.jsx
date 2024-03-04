import React from 'react';
import { logo1 } from '../assets/img';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center p-3 container-md">
      <Link to="/">
        <img src={logo1} className="h-25 w-50 rounded" alt="..." />
      </Link>
      <div id="intro-example" className="p-5 text-center bg-image align-items-center">
        <section>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black background-image" style={{ borderRadius: '25px' }}>
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Welcome to the Blood donation platform.</p>
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <div className="text-black">
                          <h5 className="mb-4">
                            Join us to help others save lives and bring joy to families through your contribution of blood.
                          </h5>
                          {/* Add Link components for navigation */}
                        <Link to="/login-donor" className="btn btn-outline-dark btn-lg m-2" role="button" rel="nofollow">Login Donor</Link>
                        <Link to="/login-staff" className="btn btn-outline-dark btn-lg m-2" role="button">Login Staff</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
