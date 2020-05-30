import React from 'react'

const TopMenuSpecial = () => {

    return (
        <div className="special-topBar-wrapper">
            {/* <p className="special-topBar-actions"> */}
            <button className="new-item-button">פרסום מודעה חדשה +</button>
            <li>אזור אישי</li>
            <img src="person.png" className="top-menu-small-icon person-png"></img>
            <li>מודעות שמורות</li>
            <img src="heart.png" className="top-menu-small-icon heart-png"></img>
            <li>חיפושים אחרונים</li>
            <img src="search.png" className="top-menu-small-icon search-png"></img>
            <li>השוואת רכבים</li>
            <img src="arrows.png" className="top-menu-small-icon arrows-png"></img>
            {/* </p> */}
        </div>
    )
}

export { TopMenuSpecial as default }
