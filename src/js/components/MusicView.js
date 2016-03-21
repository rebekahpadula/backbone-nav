var MusicView = Backbone.View.extend({

    className: 'music',

    template: _.template('<p>Music is awesome</p>'),

    render: function () {
        this.$el.html(this.template());
    }
});