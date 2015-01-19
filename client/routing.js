Router.configure({
  layoutTemplate:'layout'
});
//
//Router.map(function(){
//  this.route('homepage', {path : '/'});
//  this.route('onlineReservation');
//  this.route('login');
//  this.route('viewReservations');
//});

Router.route('/', function () {
  this.render('homepage', {name : 'homepage'});
});
Router.route('/homepage' , {name : 'homepage'});
Router.route("/onlineReservation", {name : 'onlineReservation'});
Router.route("/login", {name : 'login'});
Router.route("/viewReservations", {name : 'viewReservations'});
