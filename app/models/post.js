import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  body: DS.attr(),
  image: DS.attr(),
  date: DS.attr(),
  author: DS.attr(),
  reviews: DS.hasMany('review', {async: true})
});
