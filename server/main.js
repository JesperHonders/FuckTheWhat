import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

});

PleinData.before.insert(function (userId, doc) {
  doc.createdAt = Date.now();
  doc.plein = doc.topic.split("/")[0];
  delete doc.topic;
  doc.value = doc.message.value;
  delete doc.message;


  if(doc.value > 50) {
    Meldingen.insert({name: doc.plein, time: doc.createdAt})
  }
});
PleinData.mqttConnect("mqtt://iot.rovansteen.nl:1883", ["plein1/input/sound"], {insert: true});
