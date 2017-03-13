import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      // In real world probably shouldn't hard code 10000
      albums: this.store.query('album', {per_page: 10000}),
      artists: this.store.query('artist', {per_page: 10000})
    });
  }
});
