import React from 'react';
import { Footer, Navigation } from '../../components';
import { splash1 } from '../../assets/img';

const RequestDonorCreate = ({ donorDetails, staffemail }) => {
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        // Optionally, you can add any other logic here, such as showing a message to the user
    };
  return (
    <div>
      <Navigation username={'Mike Junior'} homeColor={'primary'}/>

      <div id="carouselExample" className="carousel">
        <div className="carousel-inner">
        </div>
      </div>

      <section style={{ backgroundColor: '#eee' }} className="container mb-4">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img src={splash1} alt="avatar" className="rounded-circle img-fluid" style={{ width: '150px' }} />
                  <h5 className="my-3"></h5>
                  <p className="text-muted mb-1 h3 fw-bolder">Donor Information</p>
                  <p className="text-muted mb-4 fw-bolder h5">{donorDetails['full_name']}</p>
                  <div className="d-flex justify-content-center mb-2">
                    <button type="button" className="btn btn-primary">Active</button>
                    <button type="button" className="btn btn-outline-primary ms-1">Deactivate</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{donorDetails['full_name']}</p>
                    </div>
                  </div>
                  <hr />
                  {/* Continue with other donor information */}
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card mb-4 mb-md-0">
                    <div className="card-body">
                      <form onSubmit={handleSubmit}>
                        <input type="hidden" name="staff_email" value="{{ $staffemail }}" />
                        <input type="hidden" name="donor_email" value="{{ $donorDetails['email'] }}" />
                        <div className="mb-3">
                          <label htmlFor="appointment_date" className="form-label">Appointment Date</label>
                          <div className="input-group date" id="appointment_date_picker" data-target-input="nearest">
                            <input type="datetime-local" name="appointment_date" id="appointment_date" className="form-control" />
                          </div>
                        </div>
                        <div className="d-grid gap-2">
                          <button type="submit" className="btn btn-primary">Submit Request</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RequestDonorCreate;
