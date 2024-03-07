import React from 'react';
import { AboutTeam, Footer, Navigation } from '../../components';

const AboutTeams = () => {
  return (
   <div>
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
