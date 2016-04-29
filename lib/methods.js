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
    Meldingen.update({_id: id}, {name: name, time: time, "status": "active"});
    console.log("Moved "+id+" to active");
  },
  'addLog' (id, disturbance, complaint){
    console.log(id, disturbance, complaint)
      Meldingen.update({_id: id}, {$set: {"disturbance": disturbance, "complaint": complaint, "status": "done"}});
  },
});

