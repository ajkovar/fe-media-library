import Ember from 'ember';
import computed from 'ember-computed-decorators';

export default Ember.Controller.extend({
  @computed('model.albums')
  albumsPerYear (albums) {
    let result = albums.reduce((rv, album) => {
      let year = album.get('year');
      (rv[year] = rv[year] || []).push(album);
      return rv;
    }, {});
    return Object.keys(result).map((key) => {
      return { name: key, albums: result[key] };
    });
  },

  artistsSorting: ['albumsSold:desc'],
  sortedArtists: Ember.computed.sort('model.artists', 'artistsSorting'),
  @computed('sortedArtists')
  topFiveArtists(sortedArtists) {
    return sortedArtists.slice(0, 5);
  }
});
