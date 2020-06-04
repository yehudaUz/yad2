import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import TopMenu from '../components/TopMenu'
import Ads from '../components/Ads'
import TopSubMenu from '../components/TopSubMenu'
import SiteMapLink from '../components/SiteMapLink'
import { cars, realestate } from '../other/utilities'
// import Store from '../store/store'
// import appRouter from '../routers/appRouter';
// import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
// import AddExpensePage from '../components/AddExpensePage';
// import EditExpensePage from '../components/EditExpensePage';
// import HelpPage from '../components/HelpPage';
// import NotFoundPage from '../components/NotFoundPage';
// import Header from '../components/Header';
// import Login from '../components/login'

const AppRouter = () => (
  <Router>
    <TopMenu />
    <Switch>
      <Route exact path="/" />
      <Route exact path='/cars' render={(props) => <TopSubMenu {...props} buttonsCategory={cars} />} />
      <Route exact path='/realestate' render={(props) => <TopSubMenu {...props} buttonsCategory={realestate} />} />
    </Switch>
    <SiteMapLink />
    <Ads />
  </Router>
);

export default AppRouter;

{/* 
<Router>
    <TopMenu />
    <Switch>
        <Route exact path="/" />
        <Route exact path='/cars' render={(props) => <TopSubMenu {...props} buttonsCategory={cars} />} />
        <Route exact path='/realestate' render={(props) => <TopSubMenu {...props} buttonsCategory={realestate} />} />
    </Switch>
    <SiteMapLink />
    <Ads />
</Router>
 */}

//  <BrowserRouter>
//     <div>
//       <Header />
//       <Switch>
//         <Route path="/" component={Login} exact={true} />
//         <Route path="/dashboard" component={ExpenseDashboardPage} />
//         <Route path="/create" component={AddExpensePage} />
//         <Route path="/edit/:id" component={EditExpensePage} />
//         <Route path="/help" component={HelpPage} />
//         <Route component={NotFoundPage} />
//       </Switch>
//     </div>
//   </BrowserRouter>