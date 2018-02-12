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
      email: '',
      contactTypes: [],
      contactTypeOtherText: '',
      betaVolunteer: false,
      comments: '',
      formHeight: 0
    }

    this.handleToggleCheckbox = this.handleToggleCheckbox.bind(this);
  }

  componentDidMount() {
    const form = document.getElementById('contact-form--questionaire');
    if (form) {
      this.setState({formHeight: form.offsetHeight});
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    let firstName = this.state.firstName.trim();
    let lastName = this.state.lastName.trim();
    let contactTypes = this.state.contactTypes.slice();
    let contactTypeOtherText = this.state.contactTypeOtherText.trim();
    let email = this.state.email.trim();
    let betaVolunteer = this.state.betaVolunteer;
    let comments = this.state.comments.trim();

    if (contactTypes.includes('other') && contactTypeOtherText.length > 0) {
      const contactTypeOtherIndex = contactTypes.indexOf('other');
      contactTypes.splice(contactTypeOtherIndex, 1, 'other: '.concat(contactTypeOtherText));
    }

    if (contactTypes.length === 0) {
      contactTypes.push('unspecified');
    }

    Meteor.call('contacts.insert', {firstName, lastName, contactTypes, email, betaVolunteer, comments},
      (err, res) => {
        if (err) {
          console.log(err);
        } else {
          Session.set('submitInfoSuccess', true);
        }
      }
    )
  }
  exitForm(e) {
    if (e.target.id === 'contact-form__box__overlay' || e.target.id === 'contact-form__icon--close' || e.target.id == 'contact-form__button--close-form') {
      Session.set('submitInfoSuccess', false);
      Session.set('showContactForm', false);
    }
  }
  handleToggleCheckbox(e) {
    let contactTypes = this.state.contactTypes.slice();
    if (contactTypes.includes(e.target.value)) {
      const contactTypeIndex = contactTypes.indexOf(e.target.value);
      contactTypes.splice(contactTypeIndex, 1);
    } else {
      contactTypes.push(e.target.value);
    }
    // let contactType = this.state.contactType.slice();
    // if (contactType.includes(e.target.value)) {
    //   const contactTypeIndex = contactType.indexOf(e.target.value);
    //   contactType.splice(contactTypeIndex, 1);
    // } else if (e.target.id === 'content-type-other-text') {
    //   const contactTypeOtherIndex = contactType.indexOf('other');
    //   contactType.splice(contactTypeOtherIndex, 1, e.target.value.trim().length === 0 ? 'other' : 'other: '.concat(e.target.value));
    // } else {
    //   contactType.push(e.target.value);
    // }
    this.setState({contactTypes})
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

                <div className='row'>
                  <div className='col s6'>
                    <p className='contact-form__label--radio-group'>Are You a...</p>
                    <p>
                      <input type="checkbox" name='contactTypes' id="investor" value='investor' checked={this.state.contactTypes.includes('investor')} onChange={this.handleToggleCheckbox}/>
                      <label htmlFor="investor">Investor</label>
                    </p>
                    <p>
                      <input type="checkbox" name='contactTypes' id="health_care_provider" value='health_care_provider' checked={this.state.contactTypes.includes('health_care_provider')} onChange={this.handleToggleCheckbox}/>
                      <label htmlFor="health_care_provider">Health Care Provider</label>
                    </p>
                    <p>
                      <input type="checkbox" name='contactTypes' id="patient" value='patient' checked={this.state.contactTypes.includes('patient')} onChange={this.handleToggleCheckbox}/>
                      <label htmlFor="patient">Patient</label>
                    </p>
                    <p>
                      <input type="checkbox" name='contactTypes' id="other" value='other' checked={this.state.contactTypes.includes('other')} onChange={this.handleToggleCheckbox}/>
                      <label htmlFor="other">Other</label>
                    </p>
                    {/* {this.state.contactType.find(string => string.substring(0, 5) === 'other') &&
                      <input type='abc' id='content-type-other-text' className='ggg' name="contactType" placeholder='specify' onChange={this.handleToggleCheckbox} />
                    } */}
                    {this.state.contactTypes.includes('other') &&
                      <input type='abc' id='contactTypeOtherText' className='ggg' name="contactTypeOtherText" value={this.state.contactTypeOtherText} placeholder='specify' onChange={(e) => this.setState({[e.target.name]: e.target.value})} />
                    }
                  </div>
                {/* <div>
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
                </div> */}

                  <div className='col s6'>
                    <p>Would You be Interested in Joining Our Beta Program?</p>
                    <p>
                      <input type="checkbox" name='betaVolunteer' id='betaVolunteer' value={true} checked={this.state.betaVolunteer} onChange={(e) => this.setState({betaVolunteer: !this.state.betaVolunteer})} />
                      <label htmlFor="betaVolunteer">Yes</label>
                    </p>
                  </div>
                </div>


                <div className="row">
                  <div className="input-field col s12">
                    <textarea id="comments" name='comments' className="materialize-textarea" onChange={(e) => this.setState({[e.target.name]: e.target.value})}></textarea>
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
  // const form = document.getElementById('contact-form--questionaire');
  // if (form) {
  //   console.log(form.offsetHeight);
  // }
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
