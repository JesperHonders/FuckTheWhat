Meteor.methods ({
  'addEvent' (pleinId, name, date) {
    Events.insert({
      pleinId: pleinId,
      name: name,
      date: date,
      addedAt: new Date(),
    })
  },
  'moveToActive' (id, name, time) {
    Meldingen.update({_id: id}, {name: name, time: time, isActive: true});
    console.log("Moved "+id+" to active");
  },
  'addLog' (id, disturbance, complaint){
      Meldingen.update({_id: id}, {$set: {"disturbance": disturbance, "complaint": complaint}});
  },
});
