

import React from 'react'
import NadlanDropDownContent from './NadlanDropDownContent'
import CarDropDownContent from './CarDropDownContent'

const TopMenuNormalSections = () => {

    return (
        <div className="normal-topBar-wrapper">
                 {/* <> */}
                <li>...עוד<ul className="dropdown">
                    <NadlanDropDownContent />
                </ul></li>
                <li>בעלי מקצוע<ul className="dropdown">
                    <NadlanDropDownContent />
                </ul></li>
                <li>חיות מחמד<ul className="dropdown">
                    <NadlanDropDownContent />
                </ul></li>
                <li>הכל לעסק<ul className="dropdown">
                    <NadlanDropDownContent />
                </ul></li>
                <li>דרושים<ul className="dropdown">
                    <NadlanDropDownContent />
                </ul>
                </li>
                <li>יד שנייה<ul className="dropdown">
                    <NadlanDropDownContent />
                </ul>
                </li>
                <li className="dropbtn">רכב
                <ul className="dropdown">
                        <CarDropDownContent />
                    </ul>
                </li>
                <li className="dropbtn">נדל"ן
            <ul className="dropdown">
                        <NadlanDropDownContent />
                    </ul>
                </li>
                <img src="/yad2Logo.png" alt="yad2Logo" className="yad2-logo"></img>
                {/* </> */}
            </div>
    )
}

export { TopMenuNormalSections as default}
