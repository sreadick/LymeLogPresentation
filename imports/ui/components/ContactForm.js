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
      comments: '',
      formHeight: 0
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const form = document.getElementById('contact-form--questionaire');
    // console.log(this.form);
    if (form) {
      this.setState({formHeight: form.offsetHeight});
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    firstName = this.state.firstName.trim();
    lastName = this.state.lastName.trim();
    contactType = this.state.contactType.trim();
    email = this.state.email.trim();
    comments = this.state.comments.trim();

    Meteor.call('contacts.insert', {firstName, lastName, contactType, email, comments},
      (err, res) => {
        if (err) {
          console.log(err);
        } else {
          Session.set('submitInfoSuccess', true);
        }
      }
    )
  }

  handleChange(e) {

  }

  exitForm(e) {
    // Session.set('showContactForm', false);
    // console.log(e.target.id);
    // console.log(e.target.classList);
    if (e.target.id === 'contact-form__box__overlay' || e.target.id === 'contact-form__icon--close' || e.target.id == 'contact-form__button--close-form') {
      Session.set('submitInfoSuccess', false);
      Session.set('showContactForm', false);
    } else {
      // console.log(789);
    }
  }

  render() {
    return (
      <div id='contact-form__box__overlay' className='contact-form__box__overlay' onClick={(e) => this.exitForm(e)}>
        <div className='contact-form__box'>
          {/* <div className='row'> */}
            <i id='contact-form__icon--close' className="small right material-icons contact-form__icon--close" onClick={(e) => this.exitForm(e)}>close</i>
          {/* </div> */}
          <form className='contact-form' onSubmit={(e) => this.handleSubmit(e) }>
            { this.props.submitInfoSuccess ?
              <div className='center-align' style={{height: this.state.formHeight, paddingTop: '2rem'}}>
                {/* <div className='row'> */}
                  <h5 className='contact-form__success-response'>Thank you, we will get back to you shortly.</h5>
                {/* </div> */}
                {/* <div className='row'> */}
                  <div id='contact-form__button--close-form' className='contact-form__button--close-form' onClick={(e) => this.exitForm(e)}>close</div>
                {/* </div> */}
              </div>
              :
              <div id='contact-form--questionaire'>
                <div className='row'>
                  <h3 className='contact-form__heading'>Submit Your Contact Info</h3>
                </div>
                <div className='row'>
                  <div className="col s6 input-field">
                    <input type='text' id='firstName' name="firstName" value={this.state.firstName} required className='validate' onChange={(e) => this.setState({[e.target.name]: e.target.value.trim()})} />
                    <label htmlFor='firstName' data-error='required'>First Name</label>
                  </div>
                  <div className="col s6 input-field">
                    <input type='text' id='lastName' name="lastName" value={this.state.lastName} required className='validate' onChange={(e) => this.setState({[e.target.name]: e.target.value.trim()})} />
                    <label htmlFor='lastName' data-error='required'>Lirst Name</label>
                  </div>
                </div>
                <div className='row'>
                  <div className="col s12 input-field">
                    <input type="email" id='email' name="email" required className='validate' onChange={(e) => this.setState({[e.target.name]: e.target.value})} />
                    <label htmlFor='email' data-error='Invalid Email'>Email</label>
                  </div>
                </div>

                {/* <div className='row'>
                  <label htmlFor='firstName'>Are you a patient or practitioner?</label>
                  <select className='browser-default' name="contactType" value={this.state.contactType} onChange={(e) => this.setState({[e.target.name]: e.target.value})} >
                    <option value='patient'>Patient</option>
                    <option value='practitioner'>Practitioner</option>
                  </select>
                </div> */}
                <div>
                  <p className='contact-form__label--radio-group'>Are you a:</p>
                  <p>
                    <input name="contactType" type="radio" id="investor" value='investor' defaultChecked onChange={(e) => this.setState({[e.target.name]: e.target.value})} />
                    <label htmlFor="investor">Investor</label>
                  </p>
                  <p>
                    <input name="contactType" type="radio" id="health_care_provider" value='health_care_provider' onChange={(e) => this.setState({[e.target.name]: e.target.value})} />
                    <label htmlFor="health_care_provider">Health Care Provider</label>
                  </p>
                  <p>
                    <input name="contactType" type="radio" id="patient" value='patient' onChange={(e) => this.setState({[e.target.name]: e.target.value})} />
                    <label htmlFor="patient">Patient</label>
                  </p>
                  <p>
                    <input name="contactType" type="radio" id="other" value='other' onChange={(e) => {
                      if (this.state.contactType !== 'other') {
                        this.setState({[e.target.name]: e.target.value})
                      }
                    }} />
                    <label htmlFor="other">Other</label>
                  </p>
                  {(this.state.contactType !== 'investor' && this.state.contactType !== 'health_care_provider' && this.state.contactType !== 'patient') &&
                    <input type='abc' className='ggg' name="contactType" placeholder='specify' onChange={(e) => this.setState({[e.target.name]: e.target.value})} />
                  }
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <textarea id="comments" name className="materialize-textarea" onChange={(e) => this.setState({[e.target.name]: e.target.value})}></textarea>
                    <label htmlFor="comments">Any Comments? (optional)</label>
                  </div>
                </div>

                <div className='row center-align'>
                  <button className='contact-form__button--submit'>Send</button>
                </div>
              </div>
            }
          </form>
        </div>
      </div>
    );
  }
};

export default createContainer(() => {
  const form = document.getElementById('contact-form--questionaire');
  if (form) {
    console.log(form.offsetHeight);
  }
  return {
    submitInfoSuccess: Session.get('submitInfoSuccess')
  };
}, ContactForm);


// render() {
//   return (
//     <div id='contact-form__box__overlay' className='contact-form__box__overlay' onClick={(e) => this.exitForm(e)}>
//       <div className='contact-form__box'>
//         { this.props.submitInfoSuccess ?
//           <form className='contact-form' onSubmit={(e) => this.handleSubmit(e) }>
//             <p>Thank you, we will get back to you shortly.</p>
//           </form>
//           :
//           <form className='contact-form' onSubmit={(e) => this.handleSubmit(e) }>
//             <div className='row'>
//               <i id='contact-form__icon--close' className="small right material-icons contact-form__icon--close" onClick={(e) => this.exitForm(e)}>close</i>
//             </div>
//             <div className='row'>
//               <h3 className='contact-form__heading'>Submit Your Contact Info</h3>
//             </div>
//             <div className='row'>
//               <div className="col s6 input-field">
//                 <input id='firstName' name="firstName" onChange={(e) => this.setState({[e.target.name]: e.target.value})} />
//                 <label htmlFor='firstName'>First Name</label>
//               </div>
//               <div className="col s6 input-field">
//                 <input id='lastName' name="lastName" onChange={(e) => this.setState({[e.target.name]: e.target.value})} />
//                 <label htmlFor='lastName'>Lirst Name</label>
//               </div>
//             </div>
//             <div className='row'>
//               <div className="input-field">
//                 <input type="email" id='email' name="email" onChange={(e) => this.setState({[e.target.name]: e.target.value})} />
//                 <label htmlFor='email'>Email</label>
//               </div>
//               <div>
//                 <p className='contact-form__label--radio-group'>Are you a:</p>
//                 <p>
//                   <input name="group1" type="radio" id="test1" />
//                   <label htmlFor="test1">Red</label>
//                 </p>
//                 <p>
//                   <input name="group1" type="radio" id="test2" />
//                   <label htmlFor="test2">Yellow</label>
//                 </p>
//                 <p>
//                   <input name="group1" type="radio" id="test3"  />
//                   <label htmlFor="test3">Green</label>
//                 </p>
//                 <p>
//                   <input name="group1" type="radio" id="test4" disabled="disabled" />
//                   <label htmlFor="test4">Brown</label>
//                 </p>
//
//                 <div className='row center-align'>
//                   <button className='contact-form__button--submit'>Send</button>
//                 </div>
//               </div>
//             </div>
//           </form>
//         }
//       </div>
//     </div>
//   );
// }
// };
