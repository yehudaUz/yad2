import React from 'react'
import { connect } from 'react-redux';
import NadlanDropDownContent from './NadlanDropDownContent'
import CarDropDownContent from './CarDropDownContent'
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import TopMenuSubMenuSpecialSections from './TopMenuSubMenuSpecialSections'
// import TopMenuSubMenuNormalSections from './TopMenuSubMenuNormalSections'

const topMenuData = [
    { text: "...עוד", href: "/more", comp: <NadlanDropDownContent /> },
    { text: "בעלי מקצוע", href: "/professional", comp: <NadlanDropDownContent /> },
    { text: "חיות מחמד", href: "/pets", comp: <NadlanDropDownContent /> },
    { text: "הכל לעסק", href: "/business", comp: <NadlanDropDownContent /> },
    { text: "דרושים", href: "/wanted", comp: <NadlanDropDownContent /> },
    { text: "יד שנייה", href: "/secondHand", comp: <NadlanDropDownContent /> },
    { text: "רכב", href: "/cars", comp: <CarDropDownContent /> },
]

const TopMenuNormalSections = (props) => {
    console.log("props",props)
    const renderButtons = () => {
        return topMenuData.map((menuButtonData) => (
            <li className="dropbtn"><a href={menuButtonData.href}
                onClick={() => props.dispatch({ type: "UPDATE_ADS", ads: "" })}>{menuButtonData.text}</a>
                <ul className="dropdown">
                    {menuButtonData.comp}
                </ul></li>
        ))
    }

    return (
        // <Router>
        <div className="normal-topBar-wrapper">
            {renderButtons()}
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

        </div >
        // </Router>

    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(TopMenuNormalSections);
