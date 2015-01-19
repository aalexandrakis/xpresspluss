Reservations = new Mongo.Collection("reservations");
Tracker.autorun(function(){
    Meteor.subscribe("reservations", Session.get("reservationsFilter"));
});

Template.viewReservations.helpers({
    "Reservations" : function(){
         return Reservations.find();
    }
});

Template.viewReservations.events({
    "click [name=reservationStatus]" : function(event, template){
        Session.set("reservationsFilter", template.find("[name=reservationStatus]:checked").value);
    }
});

