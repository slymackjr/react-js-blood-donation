import React from 'react';
import { logo1, lable } from '../../assets/img'; 
import { Link } from 'react-router-dom';

const RegisterDonor = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Optionally, you can add any other logic here, such as showing a message to the user
};
  return (
    <div>
      <div className="text-center p-3 container-md">
        <Link to="/">
          <img src={logo1} className="h-25 w-75 rounded" alt="..." />
        </Link>
      </div>
      <div id="intro-example" className="text-center bg-image align-items-center">
        <section>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{ borderRadius: "25px" }}>
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Blood Donor Register here</p>
                        {/* Assuming session('error') displays errors */}
                        {sessionStorage.getItem('error') && 
                          <p className="text-center text-danger mb-5 mx-1 mx-md-4 mt-4">{sessionStorage.getItem('error')}!</p>
                        }
                        <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="text" name="username" id="username" className="form-control" placeholder="Your Username" />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="text" name="address" id="address" className="form-control" placeholder="Your Address" />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="number" name="phone" id="phone" className="form-control" placeholder="Your Phone Number" />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-house fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="text" name="blood_type" id="blood_tye" className="form-control" placeholder="Your Blood Type Name" />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-house fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="datetime" name="birthdate" id="birthdate" className="form-control" placeholder="Your BirthDate" />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-person fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <select name="gender" id="form3Example1c" className="form-control" defaultValue="">
                                <option value="" disabled hidden>Your Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="email" name="email" id="email" className="form-control" placeholder="Your email" />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="password" name="password" id="password" className="form-control" placeholder="Password" />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="password" name="password_confirmation" id="password_confirmation" className="form-control" placeholder="Confirm Password" />
                            </div>
                          </div>
                          <div className="form-check d-flex justify-content-center mb-5">
                            <input className="form-check-input me-2" type="checkbox" value="" id="checkbox" />
                            <label className="form-check-label" htmlFor="checkbox">
                              I agree all statements in <a href="#!">Terms of service</a>
                            </label>
                          </div>
                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button name="register" className="btn btn-primary btn-lg">Register</button>
                          </div>
                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <p className="small mb-0">Already have an account? <Link to="/login-donor">Login at your account</Link></p>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img src={lable} className="img-fluid rounded-4" alt="Sample image" />
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

export default RegisterDonor;
