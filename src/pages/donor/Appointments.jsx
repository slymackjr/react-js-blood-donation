import React, { useState } from 'react';
import { Navbar, Footer } from '../../components';

const Appointments = ({ allDonors }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const donorsPerPage = 8;

  // Calculate the index of the last donor on the current page
  const indexOfLastDonor = currentPage * donorsPerPage;
  // Calculate the index of the first donor on the current page
  const indexOfFirstDonor = indexOfLastDonor - donorsPerPage;
  // Get the donors for the current page
  const currentDonors = allDonors.slice(indexOfFirstDonor, indexOfLastDonor);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <Navbar username="John Doe" appointmentsColor={'primary'} />
      <div id="carouselExample" className="carousel">
        <div className="carousel-inner">
          {/* Add your carousel items here */}
        </div>
      </div>
      {/* Render donor cards */}
      <div className="container">
        <div className="row">
          {currentDonors.map((donor, index) => (
            <article key={index} className="col-md-4 col-lg-4">
              <div className="card bg-light rounded-4 shadow">
                <div className="card-body">
                  <h5 className="card-title text-center text-uppercase mb-4 text-primary">HOSPITAL OFFICER REQUEST</h5>
                  <ul className="list-unstyled">
                    <li><strong>HospitalOfficer Name:</strong> {donor.full_name}</li>
                    <li><strong>Gender:</strong> {donor.gender}</li>
                    <li><strong>HospitalOfficer Phone:</strong> {donor.phone_number}</li>
                    <li><strong>Hospital Location:</strong> {donor.hospital_name}</li>
                    <li><strong>Hospital Address:</strong> {donor.hospital_address}</li>
                    <li><strong>Hospital Contact:</strong> {donor.hospital_contact}</li>
                    <li><strong>Hospital Email:</strong> {donor.hospital_email}</li>
                    <li><strong>Appointment Time:</strong> {donor.request_date}</li>
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      {/* Pagination links */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <a className="page-link" href="#" onClick={() => paginate(currentPage - 1)}>Previous</a>
                </li>
                {Array.from({ length: Math.ceil(allDonors.length / donorsPerPage) }).map((_, i) => (
                  <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                    <a className="page-link" href="#" onClick={() => paginate(i + 1)}>{i + 1}</a>
                  </li>
                ))}
                <li className={`page-item ${currentPage === Math.ceil(allDonors.length / donorsPerPage) ? 'disabled' : ''}`}>
                  <a className="page-link" href="#" onClick={() => paginate(currentPage + 1)}>Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* Include the Footer component */}
      <Footer />
    </div>
  );
};

export default Appointments;
