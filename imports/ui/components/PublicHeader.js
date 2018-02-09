import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicHeader = (props) => (
  <div className='nav-header public landing'>
    <div className="nav-header__content">
      <div>
        <Link
          className={`nav-header__link--title public ${props.currentPage === 'ClinicianLanding' && 'nav-header__link--title--doctor'}`}
          to="/">
          {props.currentPage === 'ClinicianLanding' ?
            <span>LymeLog<sup>MD</sup></span> : props.title
          }
        </Link>
      </div>

      <div>
        {props.currentPage === 'ClinicianLanding' ?
          <Link className="nav-header__link public" to="/">Patients</Link>
        :
          <Link className="nav-header__link public" to="/clinicians">Clinicians</Link>
        }
        <Link className="nav-header__link public" to="#">About Us</Link>
        <Link className="nav-header__link public" to="#">FAQs</Link>
      </div>
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
