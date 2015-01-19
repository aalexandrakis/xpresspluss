Template.layout.events({
    "click #logOut" : function(event, template){
        console.log("logging out");
        Meteor.logout();
    }
});