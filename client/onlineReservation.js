Template.onlineReservation.rendered = function() {
    $('#resdatetime').datetimepicker({
          format: "dd-mm-yyyy hh:ii",
          todayBtn: true,
          autoclose: true
    });

    $(document).on("focusin", "#resDateTimeText", function(event) {

      $(this).prop('readonly', true);

    });

    $(document).on("focusout", "#resDateTimeText", function(event) {

      $(this).prop('readonly', false);

    });
}

var alertClass = "alert alert-success";
var alertText = "test test test";

Template.onlineReservation.helpers({
            "alertClass" : function(){
                return Session.get("alertClass");
            },
            "alertText" : function(){
                return Session.get("alertText");
            }
});

Template.onlineReservation.events({
    "submit #onlineReservationForm" : function(event, template){
        template.find('#alert').className = "alert alert-info";
        template.find('#alert-message').innerHTML = "Sending message";
        var message = "At " + event.target.resDateTimeField.value +
           "<br>phone: " + event.target.phoneField.value +
           "<br>email: " + event.target.emailField.value +
           "<br>from: " + event.target.fromField.value +
           "<br>destination: " + event.target.destinationField.value
           Reservations.insert({dateTime: event.target.resDateTimeField.value,
                                phone : event.target.phoneField.value,
                                email : event.target.emailField.value,
                                from : event.target.fromField.value,
                                to : event.target.destinationField.value,
                                confirmed : false,
                                closed : false,
                                canceled : false
           });

           var counter = 0;
           var progress = setInterval(function(){
               if (counter == 3) {
                   counter = 0;
                   template.find('#alert-message').innerHTML = "Sending message.";
               } else {
                   template.find('#alert-message').innerHTML = template.find('#alert-message').innerHTML + " . ";
                   counter++;
               }
           }, 500);
           Meteor.call('sendEmail', null, "New Reservation", message, function(error, result){
                if (error){
                  template.find('#alert').className = "alert alert-danger";
                  template.find('#alert-message').innerHTML = "Your message was not sent because of an internal error. Please try later";
                  clearInterval(progress);
                } else {
                  template.find('#alert').className = "alert alert-success";
                  template.find('#alert-message').innerHTML = "Your message was sent successfully. We will call you to confirm the reservation.";
                  clearInterval(progress);
                }
           });
        return false;
    }
});
