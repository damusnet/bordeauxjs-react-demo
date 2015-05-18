import React from 'react';

export default class EventCell extends React.Component {

  render() {
    var event = this.props.event;

    return (
      <article>
        <div>
          <img src={event.Organization[0].avatar} alt="" width="40" />
        </div>
        <div>
          <h1>{event.Event.name}</h1>
          <span>{event.Venue.name}</span>
        </div>
      </article>
    );
  }

}
