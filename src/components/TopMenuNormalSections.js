

import React from 'react'
import NadlanDropDownContent from './NadlanDropDownContent'
import CarDropDownContent from './CarDropDownContent'

const TopMenuNormalSections = () => {

    return (
        <div className="normal-topBar-wrapper">
                 {/* <> */}
                <li>...עוד<ul class="dropdown">
                    <NadlanDropDownContent />
                </ul></li>
                <li>בעלי מקצוע<ul class="dropdown">
                    <NadlanDropDownContent />
                </ul></li>
                <li>חיות מחמד<ul class="dropdown">
                    <NadlanDropDownContent />
                </ul></li>
                <li>הכל לעסק<ul class="dropdown">
                    <NadlanDropDownContent />
                </ul></li>
                <li>דרושים<ul class="dropdown">
                    <NadlanDropDownContent />
                </ul>
                </li>
                <li>יד שנייה<ul class="dropdown">
                    <NadlanDropDownContent />
                </ul>
                </li>
                <li className="dropbtn">רכב
                <ul className="dropdown">
                        <CarDropDownContent />
                    </ul>
                </li>
                <li className="dropbtn">נדל"ן
            <ul class="dropdown">
                        <NadlanDropDownContent />
                    </ul>
                </li>
                <img src="/yad2Logo.png" className="yad2-logo"></img>
                {/* </> */}
            </div>
    )
}

export { TopMenuNormalSections as default}
