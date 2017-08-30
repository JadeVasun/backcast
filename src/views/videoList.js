var VideoListView = Backbone.View.extend({

  // initialize: function () {
  // this.collection.on('sync', this.render, this);
//},

  render: function() {
    
    this.$el.html(this.template());
    this.$el.children().empty();
    this.collection.forEach(this.renderVideo, this);

    return this.$el;
  },

  renderVideo: function(video) {
    var videoView = new VideoListEntryView({model: video});
    this.$el.find('.video-list').append(videoView.render());
  },

  template: templateURL('src/templates/videoList.html')

});


