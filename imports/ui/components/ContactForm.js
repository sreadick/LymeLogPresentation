import React from 'react';
import PropTypes from 'prop-types';
import { Session } from 'meteor/session';
import { createContainer } from 'meteor/react-meteor-data';

class ContactForm extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      contactType: 'patient',
      email: '',
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    firstName = this.state.firstName.trim();
    lastName = this.state.lastName.trim();
    contactType = this.state.contactType.trim();
    email = this.state.email.trim();

    Meteor.call('contacts.insert', {firstName, lastName, contactType, email},
      (err, res) => {
        if (err) {
          console.log(err);
        } else {
          Session.set('submitInfoSuccess', true);
        }
      }
    )
  }

  exitForm() {
    // console.log('453');
    Session.set('showContactForm', false);
  }

  render() {
    console.log(Session.get('showContactForm'));
    return (
      <div className='boxed-view__login-box__overlay'>
        <form className='boxed-view__login-box' onSubmit={(e) => this.handleSubmit(e) }>
          {/* <div className='row'> */}
            {/* <i className="small right material-icons" onClick={() => Session.set({showContactForm: false, submitInfoSuccess: false})}>close</i> */}
            <i className="small right material-icons" onClick={() => this.exitForm()}>close</i>
          {/* </div> */}
          { this.props.submitInfoSuccess ?
            <p>Thank you, we will get back to you shortly.</p>
            :
            <div>
              <div className='row'>
                <div className="col s6 input-field">
                  <input id='firstName' name="firstName" placeholder='optional' onChange={(e) => this.setState({[e.target.name]: e.target.value})} />
                  <label className='active' htmlFor='firstName'>First Name</label>
                </div>
                <div className="col s6 input-field">
                  <input id='lastName' name="lastName" placeholder='optional' onChange={(e) => this.setState({[e.target.name]: e.target.value})} />
                  <label className='active' htmlFor='lastName'>Lirst Name</label>
                </div>
              </div>
              <div className='row'>
                <div className="input-field">
                  <input type="email" id='email' name="email" onChange={(e) => this.setState({[e.target.name]: e.target.value})} />
                  <label htmlFor='email'>Email</label>
                </div>
              </div>

              <div className='row'>
                <label htmlFor='firstName'>Are you a patient or practitioner?</label>
                <select className='browser-default' name="contactType" value={this.state.contactType} onChange={(e) => this.setState({[e.target.name]: e.target.value})} >
                  <option value='patient'>Patient</option>
                  <option value='practitioner'>Practitioner</option>
                </select>
              </div>

              <div className='row'>
                <button>Submit</button>
              </div>
            </div>
          }
        </form>
      </div>
    );
  }
};

export default createContainer(() => {
  return {
    submitInfoSuccess: Session.get('submitInfoSuccess')
  };
}, ContactForm);
