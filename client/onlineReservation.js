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
        sendReservationMail(event.target.resDateTimeField.value,
                            event.target.phoneField.value,
                            event.target.emailField.value,
                            event.target.fromField.value,
                            event.target.destinationField.value);
        return false;
    }

});

function sendReservationMail(dateTime, phone, mail, from, destination){
   var message = "At " + dateTime +
   "<br>phone: " + phone +
   "<br>from: " + from +
   "<br>destination: " + destination
   if (Meteor.call('sendEmail', null, "New Reservation", message)){
      $('#alert').className = "alert alert-danger";
      $('#alert-message').innerHTML = "Your message was not sent because of an internal error. Please try later";
   } else {
      console.log("ok");
      $('#alert').className = "alert alert-success";
      $('#alert-message').innerHTML = "Your message was sent successfully. We will call you to confirm the reservation.";
   };
}
