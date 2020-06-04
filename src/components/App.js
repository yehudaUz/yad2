import '../style/style.css'
import React from 'react'
import { Provider } from 'react-redux'
// import TopMenu from './TopMenu'
// import Ads from './Ads'
// import TopSubMenu from './TopSubMenu'
// import SiteMapLink from './SiteMapLink'
// import { BrowserRouter as Router, Switch, Route/*, Link*/ } from "react-router-dom"
// import { cars, realestate } from '../other/utilities'
import Store from '../store/store'
import AppRouter from '../routers/appRouter';

const store = Store();

const App = () => {

    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}

export { App as default }


{/* <Provider store={store}>
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
</Provider> */}