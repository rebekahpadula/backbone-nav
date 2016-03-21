var AboutView = Backbone.View.extend({

    initialize: function () {
        this.musicView = new MusicView();
    },

    template: _.template('<h1>About!</h1>'),

    render: function () {
        this.$el.html(this.template());
        this.$el.append(this.musicView.$el);
        this.musicView.render();

        return this.$el;
    }
});