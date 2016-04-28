Template.mobile_detail.helpers ({
  meldingen: function(){
    return Meldingen.findOne({_id: id});;
  }
})

Template.mobile_detail.onCreated(function bodyOnCreated() {
  Meteor.subscribe('Meldingen');
});

Template.mobile_detail.events ({
     
  'submit .add-complaint': function(event, template){
          event.preventDefault();
          var complaint = event.target.textarea.value;
          var disturbanceRadio = template.find('input:radio[name=radio]:checked');
          var recognizeCheckbox = template.find('input:checkbox[name=checkbox]:checked');
          
          var disturbanceLevel = 'Leeg';
          var recognized = false;
          
          if(recognizeCheckbox != null){
              recognized = true;
          }
          if(disturbanceRadio != null){
              disturbanceLevel = disturbanceRadio.getAttribute('data-disturbancelevel');
          }
            if (complaint == null) {
                complaint = 'Geen commentaar';
            }
          
          
          //Meteor.call('Something', disturbanceLevel, recognized, complaint);
                    console.log(disturbanceLevel, recognized, complaint);

  } 
    
});
