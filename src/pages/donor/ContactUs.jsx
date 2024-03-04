import React from 'react';
import {Navbar,Footer, ContactInfo} from '../../components'
import { logo1 } from '../../assets/img';

const ContactUs = () => {
  return (
    <div>
      {/* Company Logo */}
      <div className="text-center p-3 container-md">
        <img src={logo1} className="h-25 w-50 rounded" alt="Company Logo" />
      </div>

      {/* Navbar */}
      <Navbar username="John Doe" contactUsColor={'primary'}/>

      {/* Main Content */}
      <ContactInfo />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactUs;
