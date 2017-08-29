var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.render();
    this.videos = new Videos(window.exampleVideoData);
    this.videoplayerview = new VideoPlayerView({collection: this.videos});
    this.videoplayerview.render();
    this.videolistview = new VideoListView();
    this.videolistview.render();
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },


  template: templateURL('src/templates/app.html')

});
