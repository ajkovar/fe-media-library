import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  totalSold: DS.attr('number'),
  year: DS.attr('number'),
  updatedAt: DS.attr('date'),
  artist: DS.belongsTo('artist'),
  comments: DS.hasMany('comment')
});
