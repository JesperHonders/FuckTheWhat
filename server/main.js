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

Meldingen.before.insert(function (userId, doc) {
  doc.name = doc.topic.split('/')[0]
  doc.time = Date.now();
  doc.status = "unassigned";
  delete doc.topic;
  delete doc.message;
});
PleinData.mqttConnect("mqtt://iot.rovansteen.nl:1883", ["plein1/input/sound","plein2/input/sound"], {insert: true});
Meldingen.mqttConnect("mqtt://iot.rovansteen.nl:1883", ["plein1/report","plein2/report"], {insert: true});
