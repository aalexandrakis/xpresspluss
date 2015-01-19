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
  this.render('homepage');
});
Router.route('/homepage');
Router.route("/onlineReservation");
Router.route("/login");
Router.route("/viewReservations");
