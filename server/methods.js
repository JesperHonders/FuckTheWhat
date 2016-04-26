Meteor.methods ({
  'addEvent' (pleinId, name, date) {
    Events.insert({
      pleinId: pleinId,
      name: name,
      date: date,
      addedAt: new Date(),
    })
  }
});
