import { createStore, combineReducers } from 'redux';
// import expensesReducer from '../reducers/expenses'
// import filtersReducer from '../reducers/filters'

const initialState = { adsPath: "/yad2Ad.png", menuText: ["ראשי"] }

function reducer(state = initialState, action) {
    console.log("action: " + JSON.stringify(action) + "   state: " + JSON.stringify(state))
    switch (action.type) {
        case 'UPDATE_ADS':
            return { ...state, adsPath: action.ads }
        case 'UPDATE_MENU':
            return { ...state, menuText: action.menu }
        default:
            return state
    }
}


export default () => {
    const store = createStore(
        reducer
        //     combineReducers({
        //     expenses: expensesReducer,
        //     filters: filtersReducer
        // })
    );
    return store
}

