import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

});

PleinData.mqttConnect("mqtt://172.20.10.2", ["plein1/input/sound"], {});
