import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import moment from 'moment';

export const Contacts = new Mongo.Collection('contacts');

if (Meteor.isServer) {
  Meteor.publish('contacts', function() {
    console.log('sazf');
    return Contacts.find({});
    this.ready();
  });
}

Meteor.methods({
  'contacts.insert'(contactInfo) {
    console.log(222);

    new SimpleSchema({
      email: {
        type: String,
        min: 5
      },
      contactType: {
        type: String,
        min: 1,
      },
      firstName: {
        type: String,
        min: 1,
      },
      lastName: {
        type: String,
        min: 1,
      },
      comments: {
        type: String,
        optional: true
      }
    }).validate({...contactInfo});

    Contacts.insert({
      submitted: moment().format('MMMM Do YYYY, h:mma'),
      ...contactInfo,
    });
  }
});
