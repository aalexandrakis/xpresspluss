var phone = "+15516893490";

var modalTexts = {
    locations : "Secaucus, Rutherford, Newark, Manhattan, Bronx",
    services : "<p>Xpress taxi and limo services offers luxury transportation service to all Airports , Atlantic City Casinos, Jersey Gardens , Woodbury Commons  and more destinations.</p><p>Travel from your home or office to the airport and arrive rested and without the worry and expense of airport parking or car rentals.</p>",
}

Template.homepage.helpers({
    "phone" : function(){
        return phone;
    }
});

Template.homepage.events({
    "click #locationsBtn" : function(e, t){
        t.find("#modalTitle").innerHTML="Locations";
        t.find("#modalText").innerHTML=modalTexts.locations;
        $("#modalDialog").modal('show');
    },
    "click #servicesBtn" : function(e, t){
        t.find("#modalTitle").innerHTML="Services";
        t.find("#modalText").innerHTML=modalTexts.services;
        $("#modalDialog").modal('show');
    }
});

