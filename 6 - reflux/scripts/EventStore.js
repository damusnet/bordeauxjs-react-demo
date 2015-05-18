import Reflux from 'reflux';

export const EventActions = Reflux.createActions([
  'fetchAll'
]);

const URL = 'https://digisquare.net/events.json?end_at=2015-05-19&edition_id=9&sort=start_at&direction=asc';

var _events;

export const EventStore = Reflux.createStore({

  listenables: [EventActions],

  fetchAll: function() {
    fetch(URL).then(response => {
      return response.json()
    }).then(json => {
      _events = json.events;
      this.trigger(_events);
    });
  },

  getAll: function(query) {
    return _events;
  },

  getOne: function(id) {
    var _event;

    _events.forEach(event => {
      if (parseFloat(event.Event.id) === parseFloat(id)) {
        _event = event;
      }
    });

    return _event;
  }

})
