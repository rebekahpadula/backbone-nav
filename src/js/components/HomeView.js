var HomeView = Backbone.View.extend({

    template: _.template('<h1>Home!</h1>'),

    render: function () {
        this.$el.html(this.template());
    }
});