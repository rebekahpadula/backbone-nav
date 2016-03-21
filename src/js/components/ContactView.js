var ContactView = Backbone.View.extend({

    template: _.template('<h1>Contact!</h1>'),

    render: function () {
        this.$el.html(this.template());
    }
});