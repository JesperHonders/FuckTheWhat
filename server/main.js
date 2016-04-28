import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

});

PleinData.mqttConnect("mqtt://iot.rovansteen.nl:1883", ["plein1/input/sound"], {insert: true});
