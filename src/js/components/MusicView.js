var MusicView = Backbone.View.extend({

    className: 'music',

    template: _.template('<h1>Music!</h1>'),

    render: function () {
        this.$el.html(this.template());
    }
});