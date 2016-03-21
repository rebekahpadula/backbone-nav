var AppRouter = Backbone.Router.extend({
// Do not prefix urls with leading slashes. Just an empty string
// whenever you extend backbone.router give it a property called routes
// that is an object of key/propName value pairs. value is the name of a function
// as a string.  PropName is the hash name
    routes: {
        '': 'home', // name of function as a string. The prop is an empty string here because home would not have a hash.
        'about': 'about',
        'contact': 'contact'
    },

    home: function () {
        app.trigger('show', new HomeView());
    },

    about: function () {
        app.trigger('show', new AboutView());
        // app.trigger('show', new MusicView());
    },

    contact: function () {
        app.trigger('show', new ContactView());
    }
});