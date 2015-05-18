import React from 'react';
import StyleSheet from 'react-style';

import Header from './Header';
import EventCell from './EventCell';
import { EventStore } from './EventStore';

export default class Events extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: null
    };
  }

  render() {
    var events = EventStore.getAll(this.state.query);

    return (
      <div>
        <Header searchable={true} onSearch={this._handleSearch.bind(this)} />
        <section style={styles.events}>
          {events.map((event, index) => {
            return <EventCell event={event} key={index} />
          })}
        </section>
      </div>
    );
  }

  _handleSearch(query) {
    this.setState({
      query: query
    })
  }

}

var styles = StyleSheet.create({
  events: {
    marginTop: '90px'
  }
});
