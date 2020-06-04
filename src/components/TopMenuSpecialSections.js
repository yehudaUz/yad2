import React from 'react'

const TopMenuSpecial = (props) => {

    return (
        <div className="special-topBar-wrapper">
            {/* <p className="special-topBar-actions"> */}
            <button className="new-item-button">פרסום מודעה חדשה +</button>
            <li className="top-menu-special-text">אזור אישי</li>
            <img src="person.png" alt="person" className="top-menu-small-icon person-png"></img>
            <li className="top-menu-special-text">מודעות שמורות</li>
            <img src="heart.png" alt="heart" className="top-menu-small-icon heart-png"></img>
            <li className="top-menu-special-text">חיפושים אחרונים</li>
            <img src="search.png" alt="search" className="top-menu-small-icon search-png"></img>
            <li className="top-menu-special-text">השוואת רכבים</li>
            <img src="arrows.png" alt="arrows" className="top-menu-small-icon arrows-png">
            </img>
            {/* </p> */}
        </div>
    )
}

export { TopMenuSpecial as default }
