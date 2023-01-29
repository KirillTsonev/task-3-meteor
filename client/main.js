import { Template } from 'meteor/templating';

import './main.html';

Template.body.helpers({
  tasks: [
    { text: 'This is list item 1' },
    { text: 'This is list item 2' },
    { text: 'This is list item 3' },
  ],
});

Template.hello.events({
  'click button'() {
    console.log("Button has been clicked");
  },
});