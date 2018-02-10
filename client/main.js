import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDom from 'react-dom';
import { Tracker } from 'meteor/tracker';

import App from '../imports/ui/App';
// import '../imports/startup/simple-schema-configuration';

Meteor.startup(() => {
  ReactDom.render(<App/>, document.getElementById('app'));
});
