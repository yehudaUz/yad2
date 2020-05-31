

import React from 'react'
import NadlanDropDownContent from './NadlanDropDownContent'
import CarDropDownContent from './CarDropDownContent'

const TopMenuNormalSections = () => {

    return (
        // <div className="normal-topBar-wrapper">
        <>
            <li>...עוד</li>
            <li>בעלי מקצוע</li>
            <li>חיות מחמד</li>
            <li>הכל לעסק</li>
            <li>דרושים</li>
            <li>יד שנייה</li>
            <li>
                <ul class="dropdown">
                    <CarDropDownContent />
                </ul>
                רכב
            </li>
            {/* <div class="dropdown"> */}
            {/* <span class="dropdown"> */}
            <li className="dropbtn">נדל"ן
            <ul class="dropdown">
                    <NadlanDropDownContent />
                </ul>
            </li>
            {/* </span> */}
            {/* </div> */}
            <img src="//assets.yad2.co.il/yad2site/y2assets/images/header/yad2Logo.png"
                alt="לוגו יד2 yad2 logo" className="yad2-logo"></img>
        </>
        // </div>
    )
}

export { TopMenuNormalSections as default }
