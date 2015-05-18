import React from 'react';
import StyleSheet from 'react-style';

import Header from './Header';
import EventCell from './EventCell';
import { EventStore } from './EventStore';

export default class Events extends React.Component {

  render() {
    var events = EventStore.getAll();

    return (
      <div>
        <Header />
        <section style={styles.events}>
          {events.map((event, index) => {
            return <EventCell event={event} key={index} />
          })}
        </section>
      </div>
    );
  }

}

var styles = StyleSheet.create({
  events: {
    marginTop: '90px'
  }
});
