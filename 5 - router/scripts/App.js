import React from 'react';
import Router from 'react-router';

const { Link, RouteHandler } = Router;

import Events from './Events';

export default class App extends React.Component {

  render() {
    return (
      <RouteHandler />
    );
  }

}
