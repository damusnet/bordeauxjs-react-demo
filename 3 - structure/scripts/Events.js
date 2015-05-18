import React from 'react';

import Header from './Header';
import EventCell from './EventCell';

const URL = 'https://digisquare.net/events.json?end_at=2015-05-19&edition_id=9&sort=start_at&direction=asc';

export default class Events extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      events: null
    };
  }

  componentDidMount() {
    fetch(URL).then(response => {
      return response.json()
    }).then(json => {
      this.setState({
        events: json.events
      })
    });
  }

  render() {
    if (!this.state.events) {
      // TODO: loader
      return null;
    }

    return (
      <div>
        <Header />
        <section>
          {this.state.events.map((event, index) => {
            return <EventCell event={event} key={index} />
          })}
        </section>
      </div>
    );
  }

}
