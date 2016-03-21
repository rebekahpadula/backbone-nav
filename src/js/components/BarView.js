// Extending the BackBone View with our own constructor called BarView.
var BarView = Backbone.View.extend({

    events: {
        'click button': 'onRouteClick' // whenever you click something with
        // the tag button, execute the onRouteClick function that is below!
    },

    className: 'Bar',
    // buttons prop vals are the route and the name of the button
    buttons: {
        '': 'Home',
        'about': 'About',
        'contact': 'Contact'
    },

    initialize: function () {
        this.listenTo(Backbone.history, 'route', this.render); // listening to Backbone.history for the route event
    },

    render: function () {
        // clearing any preexisting html
        this.$el.empty();

        var children = [];
        var $el;
        console.log(router);

        for (var prop in this.buttons) { // for in loop for iterating over buttons object
            $el = $('<button>'); // creating a button
            if (prop === window.location.hash.substring(1)) { // if the prop name of buttons equals the hash it will add a class
                $el.addClass('is-active');
            }
            // Getting value of button aka text content
            $el.text(this.buttons[prop]);
            $el.data('route', prop); // If you pass a first param to data and NOT a second
            // it will get, it you pass the second param it will set
            children.push($el); // pushing elements to children array
            this.$el.append(children); // appending to element
        }
    },

    onRouteClick: function (e) {
        window.location.hash = $(e.target).data('route');
    }
});