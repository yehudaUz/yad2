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
    { text: "חיות מחמד", href: "/pets", comp: <NadlanDropDownContent />, adsPath: "/pets.jpg" },
    { text: "הכל לעסק", href: "/business", comp: <NadlanDropDownContent />, adsPath: "/business.png" },
    { text: "דרושים", href: "/wanted", comp: <NadlanDropDownContent /> },
    { text: "יד שנייה", href: "/secondHand", comp: <NadlanDropDownContent />, adsPath: "/secondHand.jpg" },
    { text: "רכב", href: "/cars", comp: <CarDropDownContent />, adsPath: "/cars.gif" },
    { text: `נדל"ן`, href: "/realestate", comp: <NadlanDropDownContent />, adsPath: "/nadlan.jpg" },
]

const TopMenuNormalSections = (props) => {
    console.log("props", props)
    const renderButtons = () => {
        return topMenuData.map((menuButtonData) => (
            <li key={menuButtonData.href} className="dropbtn"><a href={menuButtonData.href}
                onClick={(e) => {
                    // e.preventDefault();
                    // console.log("action");
                    props.dispatch({
                        type: "UPDATE_ADS", adsPath: menuButtonData.adsPath
                    })
                }}>{menuButtonData.text}</a>
                <ul key={menuButtonData.href} className="dropdown">
                    {menuButtonData.comp}
                </ul></li>
        ))
    }

    return (
        // <Router>
        <div className="normal-topBar-wrapper">
            {renderButtons()}
            <a href="/" className="yad2-logo-link">
                <img src="/yad2Logo.png" alt="yad2Logo" className="yad2-logo"
                    onClick={(e) => {
                        props.dispatch({
                            type: "UPDATE_ADS", adsPath: "/yad2Ad.PNG"
                        })
                    }}></img></a>
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
