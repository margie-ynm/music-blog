import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },
  actions: {
    savePost3(params) {
      var newPostal = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    },
    destroyRental(post) {
    post.destroyRecord();
    this.transitionTo('index');
    }
  }
});
