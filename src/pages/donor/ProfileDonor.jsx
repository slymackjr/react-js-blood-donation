import React from 'react';
import {Navbar,Footer} from '../../components'
import { splash1 } from '../../assets/img';


const ProfileDonor = ({ donor }) => {
    return (
        <div>
            {/* Navbar */}
            <Navbar username="John Doe" profileColor={'primary'}/>

            {/* Success alert */}
            { sessionStorage.getItem('success') && 
                <p className="text-center alert alert-success" id="myAlert"><strong>{sessionStorage.getItem('success')}</strong></p>
            }
            {/* Carousel */}
            <div id="carouselExample" className="carousel">
                <div className="carousel-inner">
                </div>
            </div>
            {/* Profile section */}
            <section style={{ backgroundColor: "#eee" }} className="container mb-4">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body text-center">
                                    <img src={splash1} alt="avatar" className="rounded-circle img-fluid" style={{ width: "150px" }} />
                                    <h5 className="my-3">{ donor.fullName }</h5>
                                    <p className="text-muted mb-1">{ donor.birthdate }</p>
                                    <p className="text-muted mb-4">{ donor.address }</p>
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
                                            <p className="text-muted mb-0">{ donor.full_name }</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Email</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{ donor.email }</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Phone</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{ donor.phone_number }</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Gender</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{ donor.gender }</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Blood Type</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{ donor.blood_type }</p>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default ProfileDonor;
