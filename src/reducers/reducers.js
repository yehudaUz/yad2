// const mongoose = require('mongoose')
// require('../database/mongooseActions')

import { resolve } from "path"


// console.log(mongooseAction)

// const initialSearchResult = [{
//     maker: "מרצדס", model: "amg", price: "50000", year: "1965", hand: "3", engineCc: "2000", area: "ירושלים", freeText: "ידשה ושמורה", km: "80000",
//     engineType: "בנזין", transmitionType: "אוטומט", dateOnTheRoad: "15032015", testUntil: "180321", ownership: "פרטי", isReplaceOk: "false",
//     isFitToDisability: "false", lastUpadte: "21052020", imgs: ["https://img.yad2.co.il/Pic/202006/07/1_1/o/o1_1_1_01240_20200607150613.jpg?l=7&c=6&w=1024&h=768"]
// },
// {
//     maker: "פורד", model: "פוקוס", price: "40000", year: "1995", hand: "3", engineCc: "1980", area: "תל אביב", freeText: "ידשה ושמורה", km: "80000",
//     engineType: "בנזין", transmitionType: "אוטומט", dateOnTheRoad: "15032015", testUntil: "180321", ownership: "פרטי", isReplaceOk: "false",
//     isFitToDisability: "false", lastUpadte: "21052020", imgs: ["https://img.yad2.co.il/Pic/202006/10/1_1/o/y2_1_06574_20200610180642.jpeg?l=7&c=6&w=1024&h=768",
//         "https://img.yad2.co.il/Pic/202006/10/1_1/o/y2_5_01614_20200610180626.jpeg?l=7&c=6&w=1024&h=768"]
// },
// {
//     maker: "ניסאן", model: "amg", price: "50000", year: "1965", hand: "3", engineCc: "2000", area: "ירושלים", freeText: "ידשה ושמורה", km: "80000",
//     engineType: "בנזין", transmitionType: "אוטומט", dateOnTheRoad: "15032015", testUntil: "180321", ownership: "פרטי", isReplaceOk: "false",
//     isFitToDisability: "false", lastUpadte: "21052020", imgs: ["https://img.yad2.co.il/Pic/202006/13/1_1/o/y2_1_03107_20200613150606.jpeg?l=7&c=6&w=1024&h=768"]
// },
// {
//     maker: "gm", model: "amg", price: "50000", year: "1965", hand: "3", engineCc: "2000", area: "ירושלים", freeText: "ידשה ושמורה", km: "80000",
//     engineType: "בנזין", transmitionType: "אוטומט", dateOnTheRoad: "15032015", testUntil: "180321", ownership: "פרטי", isReplaceOk: "false",
//     isFitToDisability: "false", lastUpadte: "21052020", imgs: ["https://img.yad2.co.il/Pic/202006/13/1_1/o/y2_1_03107_20200613150606.jpeg?l=7&c=6&w=1024&h=768"]
// }]
// console.log("initialSearchResult", initialSearchResult)
const UpdateInitialSearchResult = require('../components/UpdateInitialSearchResult')
const initialCarSearchParams = {
    maker: [], model: [], fromYear: "", toYear: "", fromPrice: "", toPrice: "", area: [],
    fromKm: "", toKm: "", fromHand: "", toHand: "", color: "", ownership: "", engineCcFrom: "",
    engineCcTo: "", engineType: "", transmitionType: "", freeText: ""
}


const getLocalStorageOrSetDefault = () => {
    // localStorage.clear()
    if (localStorage.getItem('state')) {
        // console.log("parse", localStorage.getItem('state'))
        let tempState = JSON.parse(localStorage.getItem('state'))
        tempState.carSearchParmas = initialCarSearchParams
        return tempState //JSON.parse(localStorage.getItem('state'))
    }
    // UpdateInitialSearchResult.default()
    // UpdateInitialSearchResult.default.WrappedComponent()
    const state = {
        adsPath: "/yad2Ad.png",
        menuText: ["ראשי"],
        carSearchParmas: initialCarSearchParams,
        searchResult: [],
        user: { name: "לא ידוע" }
    }
    localStorage.setItem('state', JSON.stringify(state));
    return state
}
const initialState = getLocalStorageOrSetDefault()

export default (state = initialState, action) => {
    // console.log("action: " + JSON.stringify(action) + "   state: " + JSON.stringify(state))
    let newState
    switch (action.type) {
        case 'UPDATE_ADS':
            newState = { ...state, adsPath: action.adsPath }
            localStorage.setItem('state', JSON.stringify(newState));
            return newState
        case 'UPDATE_MENU':
            newState = { ...state, menuText: action.menuText }
            localStorage.setItem('state', JSON.stringify(newState));
            return newState
        case 'UPDATE_CAR_SEARCH_PARAMS':
            newState = { ...state, carSearchParmas: { ...state.carSearchParmas, ...action.carSearchParams } }
            localStorage.setItem('state', JSON.stringify(newState));
            return newState
        case 'UPDATE_CAR_SEARCH_RESULT':
            newState = { ...state, searchResult:  action.searchResult  }
            localStorage.setItem('state', JSON.stringify(newState));
            return newState
        default:
            return state
    }
}
