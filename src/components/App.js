import '../style/style.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import TopMenu from './TopMenu'
import Ads from './Ads'
import TopSubMenu from './TopSubMenu'
import SiteMapLink from './SiteMapLink'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { cars, realestate } from '../other/utilities'
import Store from '../store/store'
const store = Store()

const App = () => {

    return (
        <Provider store={store}>
            <Router>
                <TopMenu />
                {/* <TopSubMenu/> */}
                <Switch>
                    <Route exact path="/" />
                    <Route exact path='/cars' render={ (props) => <TopSubMenu {...props} buttonsCategory={cars} />} />
                    <Route exact path='/realestate' render={(props) => <TopSubMenu {...props} buttonsCategory={realestate} />} />

                    {/* <Route exact path="/cars/private" component={TopSubMenu} /> */}
                    {/* <Route exact path="/invoices/dashboard" component={Dashboard} />
                <Route path="/invoices/:id" component={Invoice} /> */}
                </Switch>
                <SiteMapLink/>
                <Ads />

            </Router>
        </Provider>
    )
}

export { App as default }
