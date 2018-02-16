import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Session } from 'meteor/session';

const PublicHeader = (props) => (
  <div className='nav-header'>
    <div className="nav-header__content">
      <div className='nav-header__title'>{props.title}</div>
      {/* <div className='nav-header__notice'>(This Page is Under Construction)</div> */}
      <div className='nav-header__notice'>App is Under Construction</div>
      {/* <div></div>
      <div></div> */}

      {/* <div>
        {props.currentPage === 'ClinicianLanding' ?
          <Link className="nav-header__link public" to="/">Patients</Link>
        :
          <Link className="nav-header__link public" to="/clinicians">Clinicians</Link>
        }
        <Link className="nav-header__link public" to="#">About Us</Link>
        <Link className="nav-header__link public" onClick={() => Session.set('showContactForm', true)} to="#">Learn More</Link>
      </div> */}
    </div>
  </div>
);

PublicHeader.propTypes = {
  title: PropTypes.string.isRequired
};

PublicHeader.defaultProps = {
  title: 'LymeLog'
};

export default PublicHeader;
