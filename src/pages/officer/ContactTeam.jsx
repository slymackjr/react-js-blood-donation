import React from 'react';
import { logo1 } from '../../assets/img';
import { ContactInfo, Footer, Navigation } from '../../components';

function ContactTeam() {
  return (
    <div>
      <div className="text-center p-3 container-md">
        <img src={logo1} className="h-25 w-50 rounded" alt="..." />
      </div>
      <Navigation username={'Mike Junior'} contactTeamColor={'primary'}/>
      <div id="carouselExample" className="carousel">
        <div className="carousel-inner"></div>
      </div>
      <ContactInfo />
      <Footer />
    </div>
  );
}

export default ContactTeam;
