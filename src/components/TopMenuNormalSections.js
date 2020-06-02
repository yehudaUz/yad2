import React from 'react'
import NadlanDropDownContent from './NadlanDropDownContent'
import CarDropDownContent from './CarDropDownContent'
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import TopMenuSubMenuSpecialSections from './TopMenuSubMenuSpecialSections'
// import TopMenuSubMenuNormalSections from './TopMenuSubMenuNormalSections'

const TopMenuNormalSections = () => {

    return (
        // <Router>
        <div className="normal-topBar-wrapper">
            {/* <> */}
            <li><a href="/more">...עוד</a>
                <ul className="dropdown">
                    <NadlanDropDownContent />
                </ul></li>
            <li><a href="/professional">בעלי מקצוע</a>
                <ul className="dropdown">
                    <NadlanDropDownContent />
                </ul></li>
            <li><a href="/pets">חיות מחמד</a>
                <ul className="dropdown">
                    <NadlanDropDownContent />
                </ul></li>
            <li><a href="/business">הכל לעסק</a>
                <ul className="dropdown">
                    <NadlanDropDownContent />
                </ul></li>
            <li><a href="/wanted">דרושים</a>
                <ul className="dropdown">
                    <NadlanDropDownContent />
                </ul></li>
            <li><a href="/secondHand">יד שנייה</a>
                <ul className="dropdown">
                    <NadlanDropDownContent />
                </ul></li>
            <li className="dropbtn"><a href="/cars">רכב</a>
                <ul className="dropdown">
                    <CarDropDownContent />
                </ul></li>
            <li className="dropbtn"><a href="/realestate">נדל"ן</a>
                <ul className="dropdown">
                    <NadlanDropDownContent />
                </ul></li>
            <a href="/" className="yad2-logo-link"><img src="/yad2Logo.png" alt="yad2Logo" className="yad2-logo"></img></a>
            {/* </> */}

            {/* <Switch>
                    <Route path="/cars"> */}
            {/* <nav className="subMenu">
                            <ul className="top-menu-2-parts-wrapper">
                                <TopMenuSubMenuSpecialSections />
                                <TopMenuSubMenuNormalSections />
                            </ul>
                        </nav> */}
            {/* </Route> */}
            {/* <Route path="/users">
                        <Users />
                    </Route> */}
            {/* <Route path="/">
                        <Home />
                    </Route> */}
            {/* </Switch> */}

        </div>
        // </Router>

    )
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

export { TopMenuNormalSections as default }
