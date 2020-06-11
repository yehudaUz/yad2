import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../components/Main'
import Cars from '../components/Cars'
import Realestate from '../components/Realestate'
import PageNotFound from '../components/PageNotFound'
import Login from '../components/Login'


const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path={["/", "/secondHand", "/business", "/pets"]} component={Main} />
      <Route path='/cars' component={Cars} />
      <Route path='/realestate' component={Realestate} />
      <Route path='/login' component={Login} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
);

export default AppRouter;

//         <Route path="/edit/:id" component={EditExpensePage} />