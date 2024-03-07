import React from 'react';
import {Navbar,Footer,AboutTeam} from '../../components'

const AboutUs = () => {
    return (
        <div>
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