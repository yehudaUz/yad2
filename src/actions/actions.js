export const updateAds = (adsPath) => ({
    type: "UPDATE_ADS",
    adsPath
})

export const updateMenu = (menuText) => ({
    type: "UPDATE_MENU",
    menuText
})

export const updateCarSearchParmas = (carSearchParams) => ({
    type:"UPDATE_CAR_SEARCH_PARAMS",
    carSearchParams
})

export const updateCarSearchResult= (searchResult) => ({
    type:"UPDATE_CAR_SEARCH_RESULT",
    searchResult
})