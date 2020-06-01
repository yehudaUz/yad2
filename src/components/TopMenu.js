import React from 'react'
import TopMenuSpecialSections from './TopMenuSpecialSections'
import TopMenuNormalSections from './TopMenuNormalSections'
import TopMenuSubMenuSpecialSections from './TopMenuSubMenuSpecialSections'
import TopMenuSubMenuNormalSections from './TopMenuSubMenuNormalSections'

const TopMenu = () => {

    return (
        <>
            <div className="top-menu">
                <nav className="navbar">
                    <ul className="top-menu-2-parts-wrapper">
                        <TopMenuSpecialSections />
                        <TopMenuNormalSections />
                    </ul>
                </nav>
            </div>
            <nav className="subMenu">
                <ul className="top-menu-2-parts-wrapper">
                    <TopMenuSubMenuSpecialSections />
                    <TopMenuSubMenuNormalSections />
                </ul>
            </nav>
        </>
    )
}

export { TopMenu as default }
