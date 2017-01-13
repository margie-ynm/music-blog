import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        image: this.get('image'),
        date: this.get('date'),
        author: this.get('author'),
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
