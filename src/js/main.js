var router = new AppRouter();

var app = _.extend({}, Backbone.Events);

// Creating new instances of bar view, app view, contactView
var barView = new BarView();
var appView = new AppView({ barView: barView });
var contactView = new ContactView({ barView: barView });

appView.render(); // have to manually call render
$('#app').append(appView.$el);

// After you create a new instance and initialize your routers, you NEED to execute Backbone.history.start();
Backbone.history.start();