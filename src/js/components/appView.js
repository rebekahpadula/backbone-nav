var AppView = Backbone.View.extend({

    className: 'App',

    // Grabbing template from html with id app-template
    template: _.template($('#app-template').html()),

    initialize: function (options) {
        this.barView = options.barView;
        this.listenTo(app, 'show', this.show);
    },

    show: function (view) {
    // Handeling the optional subview
    // if there is a view passed, empty the contents of what was there
    // previously, render the passed view, and appending it to the element with the
    // class page-slot
        if (view) {
            this.$('.page-slot').empty();
            view.render();
            this.$('.page-slot').append(view.$el);
        }
    },

    render: function (view) {
        // giving it the template
        this.$el.html(this.template());
        // Empty the element
        this.$('.bar-slot').empty();
        // Re render it
        this.barView.render();
        // Append it again
        this.$('.bar-slot').append(this.barView.$el);
    }
});