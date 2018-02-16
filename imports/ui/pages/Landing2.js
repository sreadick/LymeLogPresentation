import React from 'react';
import { Link } from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';
import Slider from 'react-slick'
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor';
import { Session } from 'meteor/session';

import PublicHeader from '../components/PublicHeader';
import ContactForm from '../components/ContactForm';

configureAnchors({scrollDuration: 800});

class Landing2 extends React.Component {

  render() {
    return (
      <div className="landing__section">
        {this.props.showContactForm && <ContactForm /> }
        <PublicHeader currentPage='Landing' />
        <div className="landing__section__flex-wrapper">
          <div>
            <h1 className="landing__section__heading">Lyme Management, Made <span>Easy</span>.</h1>
            {/* <h1 className="landing__section__heading">Tracking Your Treatment</h1> */}
          </div>

          <div className='landing__section__row'>
            <div className='landing__section__row--left'>
              {/* <p className='landing__section__subheading'>Organize your treatment and track your progress with the click of a button!</p> */}
              {/* <p className='landing__section__subheading'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
              <div className='landing__section__subheading__container'>
                <p className='landing__section__subheading'>Lymelog is an app designed to help late Lyme Disease patients and healthcare professionals track and monitor symptoms and treatments.</p>
                <p className='landing__section__subheading'>For patients, you simply check the boxes for which symptoms you have, and which medications you take. It's that easy!</p>
                <p className='landing__section__subheading'>For healthcare professionals, you will be able to track your patients' symptoms and medications over time, and quickly discover which medications work best for each individual patient.</p>
                {/* <p className='landing__section__subheading'>If you suffer from late Lyme Disease, please give our app a try.  You will optimize your treatment, and feel so much better.</p> */}
              </div>
              <Link className="landing__section__button" onClick={() => Session.set('showContactForm', true)} to="#">Keep Me Informed!</Link>
            </div>

            <div className='landing__section__video__wrapper'>
              <video className='responsive-video landing__section__video' poster='/images/LandingPageScreenshot.png' autoPlay loop controls>
                <source
                  src='/videos/test_v1-2018-02-14_20.46.54.mp4'
                  type="video/mp4" />
                <source
                  src='/videos/test_v1-2018-02-14_20.59.41.ogg'
                  type="video/ogg" />
                <source
                  src='/videos/test_v1-2018-02-14_21.30.35.webm'
                  type="video/webm" />
              </video>
            </div>
          </div>

          <div className='landing__section--feature-item__row'>
            <div className="landing__section--feature-item">
              <i className="landing__section--feature-item__icon material-icons">laptop_windows</i>
              <h5 className='landing__section--feature-item__caption'>Select Symptoms and Treatments</h5>
            </div>
            <div className="landing__section--feature-item">
              <i className="landing__section--feature-item__icon material-icons">timeline</i>
              <h5 className='landing__section--feature-item__caption'>Check in and Track Your Progress</h5>
            </div>
            <div className="landing__section--feature-item">
              <i className="landing__section--feature-item__icon material-icons">person_add</i>
              <h5 className='landing__section--feature-item__caption'>Link Accounts with Your Doctor</h5>
            </div>
            <div className="landing__section--feature-item">
              <i className="landing__section--feature-item__icon material-icons">people_outline</i>
              <h5 className='landing__section--feature-item__caption'>Join the Community</h5>
            </div>
          </div>
        </div>


        <div className="landing__section__flex-wrapper--mobile">
          <h1 className="landing__section__heading">Lyme Management, Made <span>Easy</span>.</h1>

          <div className='landing__section__subheading__container'>
            <p>Lymelog is an app designed to help late Lyme Disease patients and healthcare professionals track and monitor symptoms and treatments.</p>
            <p>For patients, you simply check the boxes for which symptoms you have, and which medications you take. It's that easy!</p>
            <p>For healthcare professionals, you will be able to track your patients' symptoms and medications over time, and quickly discover which medications work best for each individual patient.</p>
            {/* <p>If you suffer from late Lyme Disease, please give our app a try.  You will optimize your treatment, and feel so much better.</p> */}
          </div>

          <video className='responsive-video landing__section__video z-depth-4' poster='/images/LandingPageScreenshot.png' loop controls>
            <source
              src='/videos/test_v1-2018-02-14_20.46.54.mp4'
              type="video/mp4" />
            <source
              src='/videos/test_v1-2018-02-14_20.59.41.ogg'
              type="video/ogg" />
            <source
              src='/videos/test_v1-2018-02-14_21.30.35.webm'
              type="video/webm" />
          </video>
          {/* <div className="btn" onClick={() => Session.set('showContactForm', true)}>KEEP ME INFORMED!</div> */}
          <Link className="landing__section__button z-depth-4" onClick={() => Session.set('showContactForm', true)} to="#">KEEP ME INFORMED!</Link>
        </div>
      </div>
    );
  }
};

export default createContainer(() => {
  return {
    // submitInfoSuccess: Session.get('submitInfoSuccess')
    showContactForm: Session.get('showContactForm')
  };
}, Landing2);
