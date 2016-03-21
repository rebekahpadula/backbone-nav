var AboutView = Backbone.View.extend({

    initialize: function () {
        var musicView = new MusicView();
    },

    template: _.template('<h1>About!</h1>'),

    render: function () {
        this.$el.html(this.template());
        // this.musicView.setElement(this.$('.music')).render();

        return this.$el;
    }
});