import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor';
import PropTypes from 'prop-types';
import { Session } from 'meteor/session';

import PublicHeader from '../components/PublicHeader';
import ContactForm from '../components/ContactForm';

configureAnchors({scrollDuration: 800});

export default class ClinicianLanding extends React.Component {
  componentDidMount() {
    const navHeader = document.querySelector('div.nav-header.public.landing');
    const navAnchorOne = document.querySelector('.landing__section--feature-summary--doctor');
    const navAnchorTopPosition = navAnchorOne.getBoundingClientRect().top;
    document.addEventListener('scroll', () => {
      if (window.scrollY >= Math.floor(navAnchorTopPosition)) {
        navHeader.classList.add('scrolled');
      } else if (navHeader.classList.contains('scrolled')) {
        navHeader.classList.remove('scrolled');
      }
    })
  }

  render() {
    return (
      <div>
        <PublicHeader currentPage='ClinicianLanding' />
        {Session.get('showContactForm') && <ContactForm /> }
        <div className="landing__section landing__section--main--doctor">
          <div className="landing__section--main__flex-wrapper">
            {/* <h1 className="landing__section--main__heading"><span>Welcome to </span>LymeLog<span><sup>MD</sup> for Clinicians</span></h1> */}
            <h1 className="landing__section--main__heading landing__section--main__heading--doctor">LymeLog<sup>MD</sup> for Practitioners</h1>
            <p className='landing__section--main__subheading'>Track Your Patients' Progression and Optamize Treatment Protocols</p>
            {/* <div className='landing__section--main__video__wrapper'>
              <video className='landing__section--main__video' src='/videos/Kazam_screencast_00000.mp4' poster='/images/LandingPageScreenshot.png' autoPlay loop></video>
            </div> */}
          </div>
          {/* <div className='landing__section__scroll-button__wrapper landing__section__scroll-button__wrapper--main'>
            <a href='#feature-summary' className="down_icon landing__section__scroll-button"><i className="large material-icons">keyboard_arrow_down</i></a>
          </div> */}
          {/* <div className='landing__wave-divider'></div> */}
        </div>

        <ScrollableAnchor id={'feature-summary'}>
          <div className="landing__section landing__section--feature-summary landing__section--feature-summary--doctor">
            {/* <div className="landing__section--feature-summary__flex-wrapper landing__section--feature-summary__flex-wrapper--doctor"> */}
              {/* <div> */}
                <div className="landing__section--feature-summary__heading landing__section--feature-summary__heading--doctor">
                  What We Offer Doctors:
                </div>
                <p className="landing__section--feature-summary__sub-heading--doctor">
                  To see how see how your patients will use the app, click <Link className='black-text' to='/#landing__section--feature-summary__flex-wrapper'>here</Link>.
                </p>
              {/* </div> */}
              <div className="landing__section--feature-summary__feature-summary__flex-container landing__section--feature-summary__feature-summary__flex-container--doctor">
                <div className="landing__section--feature-summary__feature-summary__item">
                  <i className="grey-text medium material-icons">schedule</i>
                  <div>
                    <a href='#'>Daily Check-ins</a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                  </div>
                </div>
                <div className="landing__section--feature-summary__feature-summary__item">
                  <i className="grey-text medium material-icons">show_chart</i>
                  <div>
                    <a href='#'>Checkin</a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                  </div>
                </div>
                <div className="landing__section--feature-summary__feature-summary__item">
                  <i className="grey-text medium material-icons">people_outline</i>
                  <div>
                    <a href='#'>Checkin</a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                  </div>
                </div>
                <div className="landing__section--feature-summary__feature-summary__item">
                  <i className="grey-text medium material-icons">timeline</i>
                  <div>
                    <a href='#'>Checkin</a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                  </div>
                </div>
                <div className="landing__section--feature-summary__feature-summary__item">
                  <i className="grey-text medium material-icons">schedule</i>
                  <div>
                    <a href='#'>Checkin</a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                  </div>
                </div>
                <div className="landing__section--feature-summary__feature-summary__item">
                  <i className="grey-text medium material-icons">schedule</i>
                  <div>
                    <a href='#'>Checkin</a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                  </div>
                </div>
              {/* </div> */}
            </div>
            {/* <div className='landing__section__scroll-button__wrapper landing__section__scroll-button__wrapper--feature-summary'>
              <a href='#2' className="down_icon landing__section__scroll-button"><i className="large material-icons">keyboard_arrow_down</i></a>
            </div> */}
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'2'}>
          <div className="landing__section landing__section--2">
            <div className='landing__section__subsection--content'>
              <div className='landing__section__title'>30 second check ins</div>
              <div className='landing__section__description'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
              </div>
            </div>
            <div className='landing__section__subsection--preview'>
              <div className='landing__section__preview-image__wrapper'>
                <Slider dots={true} arrows={false} autoplay={true}>
                  <div><img className='landing__section__preview-image' src='/images/preview/checkin-symptoms.png' /></div>
                  <div><img className='landing__section__preview-image' src='/images/preview/checkin-treatments.png' /></div>
                  <div><img className='landing__section__preview-image' src='/images/preview/checkin-events.png' /></div>
                  {/* <div><img src='/images/preview/treatment-schedule.png' /></div> */}
                </Slider>
              </div>
              {/* // <img className='landing__section__preview-image' src='/images/preview/treatment-name.png'/> */}
            </div>
            <div className='landing__section__scroll-button__wrapper landing__section__scroll-button__wrapper--2'>
              <a href='#3' className="down_icon landing__section__scroll-button"><i className="large material-icons">keyboard_arrow_down</i></a>
            </div>
          </div>
        </ScrollableAnchor>

        <ScrollableAnchor id={'3'}>
          <div className="landing__section landing__section--3">
            <div className='landing__section__subsection--preview'>
              <div className='landing__section__preview-image__wrapper'>
                <Slider dots={true} arrows={false} autoplay={true}>
                  <div><img className='landing__section__preview-image' src='/images/preview/treatment-name.png' /></div>
                  <div><img className='landing__section__preview-image' src='/images/preview/treatment-schedule.png' /></div>
                  <div><img className='landing__section__preview-image' src='/images/preview/treatment-dosing.png' /></div>
                  <div><img className='landing__section__preview-image' src='/images/preview/treatment-instructions.png' /></div>
                  <div><img className='landing__section__preview-image' src='/images/preview/treatment-info.png' /></div>
                  {/* <div><img src='/images/preview/treatment-schedule.png' /></div> */}
                </Slider>
              </div>
            </div>
            <div className='landing__section__subsection--content'>
              <div className='landing__section__title'>Enter your treatments with ease</div>
              <div className='landing__section__description'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
              </div>
            </div>
          </div>
        </ScrollableAnchor>


        <div className="landing__section landing__section--4">
          <div className='landing__section__subsection--content'>
            <div className='landing__section__title'>30 second check ins</div>
            <div className='landing__section__description'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
            </div>
          </div>
          <div className='landing__section__subsection--preview'>
            <div className='landing__section__preview-image__wrapper'>
              <img className='landing__section__preview-image' src='/images/preview/symptom-graph.png' />
            </div>
            {/* // <img className='landing__section__preview-image' src='/images/preview/treatment-name.png'/> */}
          </div>
          <div className='landing__section__scroll-button__wrapper landing__section__scroll-button__wrapper--2'>
            <a href='#3' className="down_icon landing__section__scroll-button"><i className="large material-icons">keyboard_arrow_down</i></a>
          </div>
        </div>
        <footer className="black lighten-4 page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Have a Question?</h5>
                <p className="grey-text text-lighten-4">See our <a href='#'>FAQ Page</a></p>
              </div>
              <div className="col l4 offset-l2 s12">
                {/* <h5 className="white-text">Links</h5> */}
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Learn More</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">L-Com</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Terms of Service</a></li>
                  {/* <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="black lighten-2 footer-copyright">
            <div className="container center-align">
            ©2018 LymeLog
            {/* <a className="grey-text text-lighten-4 right" href="#!">More Links</a> */}
            </div>
          </div>
        </footer>
      </div>
    );
  }
};
