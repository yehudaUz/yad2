import React from 'react';
import TopMenu from '../components/TopMenu'
import Ads from '../components/Ads'
import TopSubMenu from '../components/TopSubMenu'
import SiteMapLink from '../components/SiteMapLink'
import { cars } from '../other/utilities'
import SearchBar from '../components/SearchBar.js'
// import Testing from './Testing.js'


const Cars = () => {
    return (
        <>
            <TopMenu />
            <TopSubMenu buttonsCategory={cars} />
            <SiteMapLink />
            <Ads />
            <SearchBar/>
            {/* <Testing/> */}
        </>
    )
}

export default Cars;
