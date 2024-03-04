import React from 'react';
import { AboutTeam, Footer, Navigation } from '../../components';
import { logo1 } from '../../assets/img';

const AboutTeams = () => {
  return (
   <div>
     <div className="text-center p-3 container-md">
      <img src={logo1} className="h-25 w-50 rounded" alt="..." />
    </div>
    <Navigation username={'Mike Junior'} aboutTeamColor={'primary'}/>
    
    <div id="carouselExample" className="carousel">
      <div className="carousel-inner">
      </div>
    </div>

    {/* About Section */}
    <AboutTeam />
    
    {/* Footer */}
    <Footer />
    {/* Footer */}
   </div>
  );
}

export default AboutTeams;
