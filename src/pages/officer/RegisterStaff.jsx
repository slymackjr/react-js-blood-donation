import React from 'react';
import { Link } from 'react-router-dom';
import { lable, logo1 } from '../../assets/img';

const RegisterStaff = () => {
  return (
    <div>
        <div className="text-center p-3 container-md">
      <Link to="/">
        <img src={logo1} className="h-25 w-50 rounded" alt="..." />
      </Link>
    </div>
    <div id="intro-example" className="p-5 text-center bg-image align-items-center">
      <section>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Staff Register here</p>
                      {/* Conditionally rendering error message */}
                      {sessionStorage.getItem('error') && (
                        <p className="text-center text-danger mb-5 mx-1 mx-md-4 mt-4">{sessionStorage.getItem('error')}!</p>
                      )}
                      <form className="mx-1 mx-md-4" method="post" action="/register.staff.method">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" name="name" id="form3Example1c" className="form-control" placeholder="Your Name" />
                            {/* Error message */}
                            {sessionStorage.getItem('nameError') && (
                              <span className="text-center text-danger">{sessionStorage.getItem('nameError')}</span>
                            )}
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" name="username" id="form3Example1c" className="form-control" placeholder="Your Username" />
                            {/* Error message */}
                            {sessionStorage.getItem('usernameError') && (
                              <span className="text-center text-danger">{sessionStorage.getItem('usernameError')}</span>
                            )}
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" name="address" id="form3Example1c" className="form-control" placeholder="Your Address" />
                            {/* Error message */}
                            {sessionStorage.getItem('addressError') && (
                              <span className="text-center text-danger">{sessionStorage.getItem('addressError')}</span>
                            )}
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="number" name="phone" id="form3Example1c" className="form-control" placeholder="Your Phone Number" />
                            {/* Error message */}
                            {sessionStorage.getItem('phoneError') && (
                              <span className="text-center text-danger">{sessionStorage.getItem('phoneError')}</span>
                            )}
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-house fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" name="department" id="form3Example1c" className="form-control" placeholder="Your Department Name" />
                            {/* Error message */}
                            {sessionStorage.getItem('departmentError') && (
                              <span className="text-center text-danger">{sessionStorage.getItem('departmentError')}</span>
                            )}
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-hospital fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" name="jobTitle" id="form3Example1c" className="form-control" placeholder="Your Hospital title" />
                            {/* Error message */}
                            {sessionStorage.getItem('jobTitleError') && (
                              <span className="text-center text-danger">{sessionStorage.getItem('jobTitleError')}</span>
                            )}
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-hospital fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="number" name="hospital" id="form3Example1c" className="form-control" placeholder="Your Hospital ID" />
                            {/* Error message */}
                            {sessionStorage.getItem('hospitalError') && (
                              <span className="text-center text-danger">{sessionStorage.getItem('hospitalError')}</span>
                            )}
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-person fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <select name="gender" id="form3Example1c" className="form-control">
                              <option defaultValue>Your Gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" name="email" id="form3Example3c" className="form-control" placeholder="Your email" />
                            {/* Error message */}
                            {sessionStorage.getItem('emailError') && (
                              <span className="text-center text-danger">{sessionStorage.getItem('emailError')}</span>
                            )}
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" name="password" id="form3Example4c" className="form-control" placeholder="Password" />
                            {/* Error message */}
                            {sessionStorage.getItem('passwordError') && (
                              <span className="text-center text-danger">{sessionStorage.getItem('passwordError')}</span>
                            )}
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" name="password_confirmation" id="form3Example4cd" className="form-control" placeholder="Confirm Password" />
                            {/* Error message */}
                            {sessionStorage.getItem('passwordConfirmationError') && (
                              <span className="text-center text-danger">{sessionStorage.getItem('passwordConfirmationError')}</span>
                            )}
                          </div>
                        </div>
                        <div className="form-check d-flex justify-content-center mb-5">
                          <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                          <label className="form-check-label" htmlFor="form2Example3">
                            I agree all statements in <a href="#!">Terms of service</a>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" name="register" className="btn btn-primary btn-lg">Register</button>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <p className="small mb-0">Already have an account? <Link to="/login-staff">login at your account</Link></p>
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
};

export default RegisterStaff;
