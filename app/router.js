import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('artists', function() {
    this.route('list');
    this.route('show', { path: ':artist_id' });
  });
  this.route('albums', function() {
    this.route('show', { path: ':album_id' });
  });
});

export default Router;
