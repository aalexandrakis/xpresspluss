Reservations = new Mongo.Collection("reservations");
Tracker.autorun(function(){
    Meteor.subscribe("reservations", Session.get("reservationsFilter") != null ? Session.get("reservationsFilter") : "unconfirmed");
});

Template.ViewReservations.helpers({
    "Reservations" : function(){
         return Reservations.find();
    },
    "actionValue" : function(){
        if (Session.get("reservationsFilter") == null || Session.get("reservationsFilter") == "unconfirmed"){
            return "Confirm";
        } else if (Session.get("reservationsFilter") == "confirmed"){
            return "Close";
        } else if (Session.get("reservationsFilter") == "closed"){
            return "Re-Open";
        }  else {
            return "";
        }
    }
});

Template.ViewReservations.events({
    "click [name=reservationStatus]" : function(event, template){
        Session.set("reservationsFilter", template.find("[name=reservationStatus]:checked").value);
    },
    "click #buttonAction" : function(event, template){
        if (Session.get("reservationsFilter") == null || Session.get("reservationsFilter") == "unconfirmed"){
            Reservations.update({_id :this._id}, {$set : {confirmed : true, }});
        } else if (Session.get("reservationsFilter") == "confirmed"){
            Reservations.update({_id :this._id}, {$set : {closed : true, }});
        } else if (Session.get("reservationsFilter") == "closed"){
            Reservations.update({_id :this._id}, {$set : {closed : false, }});
        }
    },
    "click #cancel" : function(event, template){
            Reservations.update({_id :this._id}, {$set : {canceled : true }});
    }

});



