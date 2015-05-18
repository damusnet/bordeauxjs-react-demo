import React from 'react';
import StyleSheet from 'react-style';
import Router from 'react-router';

const { Link, RouteHandler } = Router;

import Events from './Events';
import { EventStore, EventActions } from './EventStore';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    this.unsubscribe = EventStore.listen(events => {
      this.setState({
        loaded: true
      })
    });
    EventActions.fetchAll();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    var loaded = this.state.loaded;

    if (!loaded) {
      // TODO: loader
      return null;
    }

    return <RouteHandler />
  }

}
