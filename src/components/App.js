import '../style/style.css'
import React from 'react'
import ReactDOM from 'react-dom'
import TopMenu from './TopMenu'
import Ads from './Ads'
import TopSubMenu from './TopSubMenu'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { cars,realestate } from '../other/utilities'

const App = () => {

    return (
        <Router>
            <TopMenu />
            {/* <TopSubMenu/> */}
            <Switch>
                <Route exact path="/" />
                <Route exact path='/cars' render={(props) => <TopSubMenu {...props} buttonsCategory={cars} />} />
                <Route exact path='/realestate' render={(props) => <TopSubMenu {...props} buttonsCategory={realestate} />} />
    
                {/* <Route exact path="/cars/private" component={TopSubMenu} /> */}
                {/* <Route exact path="/invoices/dashboard" component={Dashboard} />
                <Route path="/invoices/:id" component={Invoice} /> */}
            </Switch>
            <Ads />
        </Router>
    )
}

export { App as default }
