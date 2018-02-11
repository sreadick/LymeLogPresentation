import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor';
import { Session } from 'meteor/session';

import PublicHeader from '../components/PublicHeader';
import ContactForm from '../components/ContactForm';

configureAnchors({scrollDuration: 800});

export default class Landing2 extends React.Component {

  render() {
    return (
      <div>
        <PublicHeader currentPage='Landing' />
        {Session.get('showContactForm') && <ContactForm /> }
        <div className="landing__section landing__section--main">
          <div className="landing__section--main__flex-wrapper">
            <div>
              <h1 className="landing__section--main__heading">Lyme Management, Made <span>Easy</span>.</h1>
              <h1 className="landing__section--main__heading">Tracking Your Treatment</h1>
            </div>

            <div className='landing__section--main__row'>
              <div className='landing__section--main__row--left'>
                {/* <p className='landing__section--main__subheading'>Organize your treatment and track your progress with the click of a button!</p> */}
                <p className='landing__section--main__subheading'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Link className="landing__section--main__button" onClick={() => Session.set('showContactForm', true)} to="#">Keep Me Informed</Link>
              </div>
              <div className='landing__section--main__video__wrapper'>
                <video className='landing__section--main__video' src='/videos/Kazam_screencast_00000.mp4' poster='/images/LandingPageScreenshot.png' autoPlay loop></video>
              </div>
            </div>

          </div>
        </div>

        <div className='landing__section--feature-item__row'>
          <div className="landing__section--feature-item">
            <i className="landing__section--feature-item__icon material-icons">schedule</i>
            <h5 className='landing__section--feature-item__caption'>Select Symptoms and Treatments</h5>
            {/* <p className='landing__section--feature-item__description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p> */}
            {/* <a href='#landing__section--3' className='landing__section--feature-item__scroll-link'> Learn More <i className="large material-icons">keyboard_arrow_down</i> </a> */}
          </div>
          <div className="landing__section--feature-item">
            <i className="landing__section--feature-item__icon material-icons">timeline</i>
            <h5 className='landing__section--feature-item__caption'>Check in and Track Your Progress</h5>
            {/* <p className='landing__section--feature-item__description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p> */}
            {/* <a href='#landing__section--4' className='landing__section--feature-item__scroll-link'> Learn More <i className="large material-icons">keyboard_arrow_down</i> </a> */}
          </div>
          <div className="landing__section--feature-item">
            <i className="landing__section--feature-item__icon material-icons">person_add</i>
            <h5 className='landing__section--feature-item__caption'>Link Accounts with Your Doctor</h5>
            {/* <p className='landing__section--feature-item__description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p> */}
            {/* <a href='#landing__section--5' className='landing__section--feature-item__scroll-link'> Learn More <i className="large material-icons">keyboard_arrow_down</i> </a> */}
          </div>
          <div className="landing__section--feature-item">
            <i className="landing__section--feature-item__icon material-icons">people_outline</i>
            <h5 className='landing__section--feature-item__caption'>Be Part of the Community</h5>
            {/* <p className='landing__section--feature-item__description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p> */}
            {/* <a href='#landing__section--l-com' className='landing__section--feature-item__scroll-link'> Learn More <i className="large material-icons">keyboard_arrow_down</i> </a> */}
          </div>
        </div>

      </div>
    );
  }
};
