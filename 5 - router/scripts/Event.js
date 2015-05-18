import React from 'react';
import StyleSheet from 'react-style';

import Header from './Header';

export default class Event extends React.Component {

  render() {

    var event = {
      Event: {
        name: 'Titre',
        description: 'Lorem Ipsum'
      }
    }

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
