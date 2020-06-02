

import React from 'react'

const TopMenuSubMenuNormalSections = (props) => {
    // const carNormalSubMenuButtons = ["פרטי", "מסחרי", "ג'יפים", "אופנועים", "אופנועים", "קטנועים", "משאיות", "כלי שיט", "מיוחדים", "אביזרים"]

    const renderButtons = () => {
        // switch (props.buttonsCategory) {
            // case "cars":
                return props.buttonsCategory.normal.reverse().map((button) => (
                    <li>{button}</li>
                ))
        // }

    }

    return (
        <div className="normal-topBar-wrapper sub-menu">
            {renderButtons()}
        </div>
    )
}

export { TopMenuSubMenuNormalSections as default }
