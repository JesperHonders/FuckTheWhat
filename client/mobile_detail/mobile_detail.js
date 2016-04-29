Template.mobile_detail.helpers ({
  meldingen: function(){
    return Meldingen.findOne({_id: id});;
  }
})

Template.mobile_detail.onCreated(function bodyOnCreated() {
  Meteor.subscribe('Meldingen');
  debugger;
  console.log(id);
});

Template.mobile_detail.events ({

  'submit .add-complaint': function(event, template){
          event.preventDefault();
          var complaint = event.target.textarea.value;
          var disturbanceRadio = template.find('input:radio[name=radio]:checked');

          var disturbanceLevel = 'Niet ingevuld';

          if(disturbanceRadio != null){
              disturbanceLevel = disturbanceRadio.getAttribute('data-disturbancelevel');
          }
            if (complaint == null) {
                complaint = 'Geen commentaar';
            }


          Meteor.call('addLog', id, disturbanceLevel, complaint);
  }

});
