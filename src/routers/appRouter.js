import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../components/Main'
import Cars from '../components/Cars'
import Realestate from '../components/realestate'
import PageNotFound from '../components/PageNotFound'

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path={["/","/secondHand","/business","/pets"]} component={Main} />
      <Route path='/cars' component={Cars} />
      <Route path='/realestate' component={Realestate} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
);

export default AppRouter;

//         <Route path="/edit/:id" component={EditExpensePage} />