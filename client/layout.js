Template.layout.events({
    "click #logOut" : function(event, template){
        Meteor.logout();
    }
});
