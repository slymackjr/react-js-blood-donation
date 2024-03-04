import React from 'react';

const ContactInfo = () => {
  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card border-primary rounded-3 shadow">
            <div className="card-header bg-primary text-white">
              Contact Us
            </div>
            <div className="card-body">
              <h5 className="card-title">Feel free to reach out to us. Our team is ready to assist you.</h5>
              <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                <div className="row mb-4">
                  <div className="col-md-6">
                    <div className="md-form">
                      <label htmlFor="name">Your Name</label>
                      <input type="text" id="name" name="name" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="md-form">
                      <label htmlFor="email">Your Email</label>
                      <input type="email" id="email" name="email" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-md-12">
                    <div className="md-form">
                      <label htmlFor="subject">Subject</label>
                      <input type="text" id="subject" name="subject" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-md-12">
                    <div className="md-form">
                      <label htmlFor="message">Your Message</label>
                      <textarea id="message" name="message" rows="4" className="form-control md-textarea"></textarea>
                    </div>
                  </div>
                </div>
                <div className="text-center text-md-left">
                  <button className="btn btn-primary">Send Message</button>
                </div>
              </form>
              <div className="status"></div>
            </div>
            <div className="card-footer text-center">
              <ul className="list-inline mb-0">
                <li className="list-inline-item me-4"><i className="fas fa-map-marker-alt fa-2x"></i>
                  <p>San Francisco, CA 94126, USA</p>
                </li>
                <li className="list-inline-item me-4"><i className="fas fa-phone mt-4 fa-2x"></i>
                  <p>+01 234 567 89</p>
                </li>
                <li className="list-inline-item"><i className="fas fa-envelope mt-4 fa-2x"></i>
                  <p>contact@yourwebsite.com</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
