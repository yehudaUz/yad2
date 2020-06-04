const getLocalStorageOrSetDefault = () => {
    if (localStorage.getItem('state')) {
        console.log("parse", localStorage.getItem('state'))
        return JSON.parse(localStorage.getItem('state'))
    }
    const state = { adsPath: "/yad2Ad.png", menuText: ["ראשי"] }
    localStorage.setItem('state', JSON.stringify(state));
    return state
}
const initialState = getLocalStorageOrSetDefault()

export default (state = initialState, action) => {
    console.log("action: " + JSON.stringify(action) + "   state: " + JSON.stringify(state))
    let newState
    switch (action.type) {
        case 'UPDATE_ADS':
            newState = { ...state, adsPath: action.adsPath }
            localStorage.setItem('state', JSON.stringify(newState));
            return newState
        case 'UPDATE_MENU':
            newState = { ...state, menu: action.menu }
            localStorage.setItem('state', JSON.stringify(newState));
            return newState
        default:
            return state
    }
}
