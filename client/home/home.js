Template.home.helpers ({
  meldingen: function(){
    return Meldingen.find({status: "done"});
  }
})



