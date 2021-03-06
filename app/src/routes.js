import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Chat from './pages/Chat';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Chat} />
    </Switch>
  );
}