var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);

    this.listenTo(this.videos, 'select', this.selectFirst);
    //this.videos.search('javascript tutorial');
    this.render();
  },
  //collection just a bunch of models



  selectFirst: function() {
    if (this.videos.length > 0) {
      this.videos.at(0);
    }
  },
  
  render: function() {
    this.$el.html(this.template());

    var search = new SearchView({
      collection: this.videos,
      el: this.$('.search')
    }).render();

    var videoList = new VideoListView({
      collection: this.videos
    }).render();
    $('.list').children().detach();
    $('.list').append(videoList);

    new VideoPlayerView({
      model: this.videos.at(0),
      collection: this.videos,
      el: this.$('.player')
    }).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});