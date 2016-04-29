import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

});

PleinData.before.insert(function (userId, doc) {
  doc.createdAt = Date.now();
  doc.plein = doc.topic.split("/")[0];
  delete doc.topic;
  doc.value = doc.message.value;
  delete doc.message;
});

Meldingen.before.insert(function (doc) {
  doc.createdAt = Date.now();
  doc.plein = doc.topic.split("/")[0];
  doc.status = "unassigned";
  doc.dynamic = "yes"
  delete doc.topic;
});
PleinData.mqttConnect("mqtt://iot.rovansteen.nl:1883", ["plein1/input/sound","plein2/input/sound"], {insert: true});
Meldingen.mqttConnect("mqtt://iot.rovansteen.nl:1883", ["plein1/report", "plein2/report"], {insert: true});
