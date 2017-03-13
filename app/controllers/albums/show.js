import Ember from 'ember';

export default Ember.Controller.extend({
  commentsSorting: ['updatedAt:desc'],
  sortedComments: Ember.computed.sort('model.comments', 'commentsSorting')
});
