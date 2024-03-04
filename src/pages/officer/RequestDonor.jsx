import React, { useState } from 'react';
import { Footer, Navigation } from '../../components';
import { logo1 } from '../../assets/img';

const RequestDonor = ({ allDonors}) => {
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
      <div className="text-center p-3 container-md ">
        <img src={logo1} className="h-25 w-50 rounded" alt="..." />
      </div>
      <Navigation username={'Mike Junior'} homeColor={'primary'}/>

      <div id="carouselExample" className="carousel">
        <div className="carousel-inner">
        </div>
      </div>
      <div className="container">
        <div className="row">
          {currentDonors.map(donor => (
            <article className="col-md-4 col-lg-3" key={donor.email}>
              <div className="card bg-light rounded-4 shadow">
                <div className="card-body">
                  <h5 className="card-title text-center text-uppercase mb-4 text-primary">Donor Information</h5>
                  <ul className="list-unstyled">
                    <li><strong>Name:</strong> {donor.full_name}</li>
                    <li><strong>Gender:</strong> {donor.gender}</li>
                    <li><strong>Location:</strong> {donor.address}</li>
                    <li><strong>Blood Group:</strong> {donor.blood_type}</li>
                    <li><strong>Health:</strong> {donor.status}</li>
                  </ul>
                  <div className="d-grid gap-2 mt-4">
                    <form action="{{ route('staff.createRequest') }}" method="POST">
                      <input type="hidden" name="donor_email" value={donor.email} />
                      <p className="card-text text-center">
                        <button type="submit" className="btn link-secondary">More...</button>
                      </p>
                    </form>
                    <form action="{{ route('staff.createRequest') }}" method="POST">
                      <input type="hidden" name="donor_email" value={donor.email} />
                      <p className="card-text text-center">
                        <button type="submit" className="btn btn-primary">Request</button>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      {/* Pagination links */}
      {/* <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <a className="page-link" href="#">Previous</a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div> */}
       {/* Pagination links */}
       {/* <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item">
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
                <li className="page-item">
                  <a className="page-link" href="#" onClick={() => paginate(currentPage + 1)}>
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div> */}
      {/* Pagination links */}
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
      {/* Footer */}
      <Footer />
      {/* Footer */}
    </div>
  );
};

export default RequestDonor;
