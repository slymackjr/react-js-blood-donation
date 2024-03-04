import React from 'react';
import {logo1} from '../../assets/img'
import {Navbar,Footer,AboutTeam} from '../../components'

const AboutUs = () => {
    return (
        <div>
            <div className="text-center p-3 container-md">
                <img src={logo1} className="h-25 w-50 rounded" alt="Company Logo" />
            </div>
            <Navbar username="John Doe" aboutUsColor={'primary'}/> {/* Pass the username as a prop */}
            <div id="carouselExample" className="carousel">
                <div className="carousel-inner">
                    {/* Carousel Content */}
                </div>
            </div>
            {/* About Team Section */}
            <AboutTeam />
            {/* Include the Footer component */}
            <Footer />
        </div>
    );
}

export default AboutUs;