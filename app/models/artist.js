import DS from 'ember-data';
import computed from 'ember-computed-decorators';

export default DS.Model.extend({
  name: DS.attr(),
  albums: DS.hasMany('album'),

  @computed('albums')
  albumsSold(albums) {
    return albums.reduce((sum, album) => {
      return sum + (album.get('totalSold') || 0);
    }, 0);
  }
});
