import React, { useState } from 'react';
import { Footer, Navigation } from '../../components';

const SentRequests = ({ allDonors }) => {
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
      {/* Navbar */}
      <Navigation username={'Mike Junior'} sentRequestsColor={'primary'}/>
      {/* End Navbar */}
      {/* Carousel */}
      <div id="carouselExample" className="carousel">
        <div className="carousel-inner">
        </div>
      </div>
      {/* End Carousel */}
      {/* Cards viewers */}
      <div className="container">
        <div className="row">
          {currentDonors.map(donor => (
            <article className="col-md-4 col-lg-3" key={donor.email}>
              <div className="card bg-light rounded-4 shadow">
                <div className="card-body">
                  <h5 className="card-title text-center text-uppercase mb-4 text-primary">Donor Request</h5>
                  <ul className="list-unstyled">
                    <li><strong>Name:</strong> {donor.full_name}</li>
                    <li><strong>Gender:</strong> {donor.gender}</li>
                    <li><strong>Location:</strong> {donor.address}</li>
                    <li><strong>Blood Group:</strong> {donor.blood_type}</li>
                    <li><strong>Phone Number:</strong> {donor.phone_number}</li>
                    <li><strong>Appointment Date:</strong> {donor.request_date}</li>
                    <li><strong>Email:</strong> {donor.email}</li>
                  </ul>
                  <form>
                    <input type="hidden" name="request_id" value={donor.request_id} />
                    <div className="d-grid mt-4">
                      <button className="btn btn-danger btn-lg">Cancel Requests</button>
                    </div>
                  </form>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      {/* End Cards viewers */}

      {/* Pagination */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <a className="page-link" href="#" onClick={() => paginate(currentPage - 1)}>
                    Previous
                  </a>
                </li>
                {Array.from({ length: Math.ceil(allDonors.length / donorsPerPage) }).map((_, index) => (
                  <li key={index} className={`page-item ${currentPage === index + 1 && 'active'}`}>
                    <a className="page-link" href="#" onClick={() => paginate(index + 1)}>
                      {index + 1}
                    </a>
                  </li>
                ))}
                <li className={`page-item ${currentPage === Math.ceil(allDonors.length / donorsPerPage) ? 'disabled' : ''}`}>
                  <a className="page-link" href="#" onClick={() => paginate(currentPage + 1)}>
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* End Pagination */}

      {/* Footer */}
      <Footer />
      {/* Footer */}
    </div>
  );
}

export default SentRequests;
