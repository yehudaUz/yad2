import '../style/style.css'
import React from 'react'
import ReactDOM from 'react-dom'
import TopMenu from './TopMenu'
import Ads from './Ads'
const App = () => {

    return (
        <div>
            <TopMenu />
            <Ads />
        </div>
    )
}

export { App as default }
