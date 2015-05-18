import React from 'react';
import StyleSheet from 'react-style';
import Router from 'react-router';

const { State, Link } = Router;

export default class EventCell extends React.Component {

  render() {
    var event = this.props.event;

    return (
      <article style={styles.event}>
        <div style={styles.avatar}>
          <img src={event.Organization[0].avatar} alt="" width="40" />
        </div>
        <div style={styles.text}>
          <Link to="event" params={{eventId: event.Event.id}} style={styles.link}>
            <h1 style={styles.title}>
              {event.Event.name}
            </h1>
          </Link>
          <span>{event.Venue.name}</span>
          <div style={styles.separator} />
        </div>
      </article>
    );
  }

}

var styles = StyleSheet.create({
  event: {
    display: 'flex'
  },
  avatar: {
    minWidth: '50px'
  },
  text: {
    flex: 1
  },
  link: {
    color: 'black',
    textDecoration: 'none'
  },
  title: {
    margin: 0
  },
  separator: {
    height: '1px',
    backgroundColor: '#CCC',
    margin: '15px 0'
  }
})
