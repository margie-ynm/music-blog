import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // return this.store.findAll('post');
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      reviews: this.store.findAll('review')
    });
  },
  actions: {
    savePost3(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    },
    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      newReview.save();
      this.transitionTo('index');
    }
  }
});
