var VideoListView = Backbone.View.extend({

  initialize: function () {
  this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(function (video) {
      var videolistentry = new VideoListEntryView ({model:video});
      videolistentry.render();
      
    })
    
    return this;
  },

  
  template: templateURL('src/templates/videoList.html')

});


