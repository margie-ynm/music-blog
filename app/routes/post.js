import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    destroyPost(post) {
      var review_deletions = post.get('reviews').map(function(review) {
        return review.destroyRecord();
      });
      Ember.RSVP.all(review_deletions).then(function() {
        return post.destroyRecord();
      });
      this.transitionTo('index');
    },
    update(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('post');
    },
    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      var post = params.post;
      post.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return post.save();
      });
      this.transitionTo('post', post);
    },
    destroyReview(review) {
      review.destroyRecord();
      this.transitionTo('index');
    }
  }
});
