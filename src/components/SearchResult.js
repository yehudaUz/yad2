import React from 'react'
import { connect } from 'react-redux';
import { onOffDropList, on, off } from '../logic/onOffDropList'
// import { updateCarSearchResult } from '../actions/actions'
import { sendSearchRequest } from './SearchBar'
import SearchResultMiddlePart from './SearchResultMiddlePart'
import { updateCarSearchParams } from '../actions/actions';

function formatDate(date, isResultWithDay) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    if (isResultWithDay)
        return [day, month, year].join('/');
    return [year, month].join('/');
}

const SearchResult = (props) => {
    // let counter = 0;

    // const filterPressed = (filterType, e) => {
    //     console.log(filterType)
    //     if (e.target.classList.contains("filter-button-clicked")) {
    //         e.target.classList.remove("filter-button-clicked")
    //         filterType === "price" ?
    //             props.dispatch(updateCarSearchParams({ withPrice: false })).then((sendSearchRequest(props, true))) :
    //             props.dispatch(updateCarSearchParams({ withPhoto: false })).then(sendSearchRequest(props, true))
    //     } else {
    //         e.target.classList.add("filter-button-clicked")
    //         filterType === "price" ?
    //             props.dispatch(updateCarSearchParams({ withPrice: true })).then(sendSearchRequest(props, true)) :
    //             props.dispatch(updateCarSearchParams({ withPhoto: true })).then(sendSearchRequest(props, true))
    //     }
    // }

    const filterPressed = async (filterType, e) => {
        console.log(filterType)
        if (e.target.classList.contains("filter-button-clicked")) {
            e.target.classList.remove("filter-button-clicked")
            if (filterType === "price") {
                await props.dispatch(updateCarSearchParams({ withPrice: false }))
                await sendSearchRequest(props, true)
            } else {
                await props.dispatch(updateCarSearchParams({ withPhoto: false }))
                await sendSearchRequest(props, true)
            }
        } else {
            e.target.classList.add("filter-button-clicked")
            if (filterType === "price") {
                await props.dispatch(updateCarSearchParams({ withPrice: true }))
                await sendSearchRequest(props, true)
            } else {
                await props.dispatch(updateCarSearchParams({ withPhoto: true }))
                await sendSearchRequest(props, true)
            }
        }
    }

    const onOffResult = (e) => {
        try {
            console.log(e);
            console.log(e.target)
            if (e.target && e.target.parentNode) {
                let element = e.target//.parentNode
                while (element && element.classList &&
                    !element.classList.contains("search-result-table") && element.parentNode)
                    element = element.parentNode
                if (element.classList.contains("search-result-table")) {
                    if (element.classList.contains("search-result-button-text"))
                        return;
                    if (element.classList.contains("expend")) {
                        element.classList.remove("expend") //table
                        if (element.childNodes[1].classList.contains("search-result-middle-part"))
                            element.childNodes[1].classList.remove("hidden")
                        if (element.nextElementSibling.classList.contains("expendable-table"))
                            element.nextElementSibling.classList.add("hidden")
                        if (element.childNodes[0].childNodes[3])
                            element.childNodes[0].childNodes[3].classList.add("hidden")
                        if (element.childNodes[2]) //right part
                            element.childNodes[2].classList.remove("expend")
                        if (element.childNodes[0]) //left part
                            element.childNodes[0].classList.remove("expend")
                    }
                    else {
                        element.classList.add("expend")//table
                        if (element.childNodes[1].classList.contains("search-result-middle-part"))
                            element.childNodes[1].classList.add("hidden")
                        if (element.nextElementSibling.classList.contains("expendable-table"))
                            element.nextElementSibling.classList.remove("hidden")
                        if (element.childNodes[0].childNodes[3])
                            element.childNodes[0].childNodes[3].classList.remove("hidden")
                        if (element.childNodes[2]) //right part
                            element.childNodes[2].classList.add("expend")
                        if (element.childNodes[0]) //left part
                            element.childNodes[0].classList.add("expend")
                    }
                }
            }
        } catch (e) { console.log("onoffresult error", e) }
    }

    // if (props.searchResult.length === 0)
    // sendSearchRequest(props)

    if (props.searchResult && props.searchResult.length > 0)
        return (
            <div className="search-result-wrapper">
                <div className="search-result-header-wrapper">
                    <h1 className="search-result-header-name" >רכבים פרטיים - מכירה</h1 >
                    <label className="search-result-header-counter" > מציג {props.searchResult.length} מודעות </label>
                </div>
                <div className="feed-options">
                    <div className="filter-search-buttons">
                        <button className="search-result-with-picture" onClick={(e) => filterPressed("picture", e)}>עם תמונה</button>
                        <button className="search-result-with-price" onClick={(e) => filterPressed("price", e)}>עם מחיר ₪</button>
                        <label className="search-result-display-ads-label">הצג מודעות</label>
                    </div>
                    <div className="sortBy-wrapper">
                        <div className="sort-by-label">
                            <div className="search-bar-input-wrapper">
                                <li className="sortByLi">
                                    <input className="search-bar-input" placeholder="לפי תאריך" onClick={() => onOffDropList(".sortBy")}></input>
                                    <label className="search-result-sortby-label">מיין לפי</label>
                                    <ul className="searchBarDropDown sortBy hidden" onChange={(e) => {
                                        // updateSearchParams(e, "maker", props.carSearchparams.maker)
                                    }}>
                                        <li><input type="radio" />לפי תאריך</li>
                                        <li><input type="radio" />מחיר - מהזול ליקר</li>
                                        <li><input type="radio" />מחיר - מהיקר לזול</li>
                                        <li><input type="radio" />ק"מ - מהנמוך לגבוה</li>
                                        <li><input type="radio" />שנתון - מהגבוה לנמוך</li>
                                    </ul>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="search-result-data">
                    {
                        props.searchResult.map(searchData => {
                            return (
                                <>
                                    <div className="search-result-table" onClick={(e) => onOffResult(e)}>
                                        <div className="search-result-left-part" onMouseEnter={(e) => on(e)}
                                            onMouseLeave={(e) => off(e)}>
                                            <div className="search-result-new-tab">
                                                <i className="new-tab"><img className="new-tab-icon" src="/newTabIcon.png" alt="newTabIcon"></img></i>
                                                <span className="hover-text hidden" >פתיחה בטאב חדש</span>
                                            </div>
                                            <div className="search-result-price"><label>₪{searchData.price}</label></div>
                                            <div className="search-result-date-update"><label>{formatDate(searchData.updatedAt, true)}</label></div>
                                            <button type="button" className="search-result-contact-seller-button hidden">
                                                <span className="search-result-button-text">הצגת מספר טלפון</span>
                                                <i className="fi fi-phone"></i>
                                            </button>
                                        </div>

                                        <SearchResultMiddlePart searchData={searchData} />

                                        <div className="search-result-right-part">
                                            <div className="search-result-image-wrapper">
                                                {searchData.imgsLinks && searchData.imgsLinks.length > 0 &&
                                                    < img className="search-result-image" src={searchData.imgsLinks[0]} alt="search-result"></img>
                                                }
                                            </div>
                                            <div className="search-result-car-name-and-title">
                                                <label className="search-result-makerModel">{searchData.model + "  " + searchData.maker}</label>
                                                <label className="search-result-engingTransmition">{
                                                    (searchData.engineType ? searchData.engineType : "") + "  " +
                                                    (searchData.transmitionType ? searchData.transmitionType : "") + "  " +
                                                    (searchData.engineCc ? searchData.engineCc : "")}</label>
                                            </div>
                                            <SearchResultMiddlePart className={"search-result-special-middle-part"} searchData={searchData} />
                                        </div>
                                    </div>

                                    <div className="search-result-table expendable-table hidden">
                                        <div data-v-67abe2bf="" class="search-result-table-expendable-table-size_2_3">
                                            <div className="search-result-sellArea">
                                                <label>אזור המכירה: {searchData.area}</label>
                                            </div>
                                            <div className="search-result-free-text">
                                                <label className="search-result-free-text-header">על הרכב</label>
                                                <label>{searchData.freeText}</label>
                                            </div>
                                            <div className="search-result-other-detils">
                                                <tr>
                                                    <td>
                                                        <div className="search-result-other-detils-right-colunm">
                                                            <div className="search-result-pair-fields">
                                                                <label className="search-result-field-descrp">טסט עד</label>
                                                                <label className="search-result-field">{formatDate(searchData.testUntil)}</label>
                                                            </div>
                                                            <div className="search-result-pair-fields">
                                                                <label className="search-result-field-descrp">בעלות נוכחית</label>
                                                                {searchData.ownership && <label className="search-result-field">{searchData.ownership}</label>}
                                                            </div><div className="search-result-pair-fields">
                                                                <label className="search-result-field-descrp">בעלות קודמת</label>
                                                                {searchData.lastOwnership && <label className="search-result-field">{searchData.lastOwnership}</label>}
                                                            </div><div className="search-result-pair-fields">
                                                                <label className="search-result-field-descrp">מוכן להחלפה</label>
                                                                {typeof searchData.isReplaceOk !== 'undefined' && <label className="search-result-field">{searchData.isReplaceOk ? "כן" : "לא"}</label>}
                                                            </div><div className="search-result-pair-fields">
                                                                <label className="search-result-field-descrp">מותאם לנכים</label>
                                                                {typeof searchData.isFitToDisability !== 'undefined' && <label className="search-result-field">{searchData.isFitToDisability ? "כן" : "לא"}</label>}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="search-result-other-detils-left-colunm">

                                                            <div className="search-result-pair-fields">
                                                                <label className="search-result-field-descrp">קילומטראז'</label>
                                                                {searchData.km && <label className="search-result-field">{searchData.km}</label>}
                                                            </div>
                                                            <div className="search-result-pair-fields">
                                                                <label className="search-result-field-descrp">סוג מנוע</label>
                                                                {searchData.engineType && <label className="search-result-field">{searchData.engineType}</label>}
                                                            </div><div className="search-result-pair-fields">
                                                                <label className="search-result-field-descrp">תיבת הילוכים</label>
                                                                {searchData.transmitionType && <label className="search-result-field">{searchData.transmitionType}</label>}
                                                            </div><div className="search-result-pair-fields">
                                                                <label className="search-result-field-descrp">צבע</label>
                                                                {searchData.color && <label className="search-result-field">{searchData.color}</label>}
                                                            </div><div className="search-result-pair-fields">
                                                                <label className="search-result-field-descrp">תאריך עלייה לכביש</label>
                                                                {searchData.dateOnTheRoad && <label className="search-result-field">{formatDate(searchData.dateOnTheRoad)}</label>}
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </div>
                                            {/* {Object.entries(searchData).map(keyValue => (
                                                <div className="search-result-key-value">
                                                    <p><label>{keyValue[0]}  -   </label>
                                                        <label>{keyValue[1]}</label></p>
                                                </div>
                                            ))} */}
                                        </div>
                                        <div data-v-67abe2bf="" class="search-result-table-expendable-table-size_1_3"></div>
                                    </div>
                                </>
                            )
                        })}
                </div>
            </div >
        )
    return null
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(SearchResult);


