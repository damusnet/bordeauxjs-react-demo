import React from 'react';
import StyleSheet from 'react-style';

import Header from './Header';
import { EventStore } from './EventStore';

export default class Event extends React.Component {

  render() {
    var event = EventStore.getOne(this.props.params.eventId);

    return (
      <div className="Event">
        <Header />
        <section style={styles.event}>
          <h1>{event.Event.name}</h1>
          {event.Event.description}
        </section>
      </div>
    );
  }

}

var styles = StyleSheet.create({
  event: {
    marginTop: '90px'
  }
});
