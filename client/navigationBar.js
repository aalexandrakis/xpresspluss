Template.navigationBar.events({
    "click #logOut" : function(event, template){
        Meteor.logout();
    }
});