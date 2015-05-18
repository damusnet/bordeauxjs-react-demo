import React from 'react';
import Router from 'react-router';

const { DefaultRoute, Route } = Router;

import App from './App';
import Events from './Events';
import Event from './Event';

var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute name="events" handler={Events} />
    <Route name="event" path="event/:eventId" handler={Event} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(
    <Handler />,
    document.getElementById('root')
  );
});
