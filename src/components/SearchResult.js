import React from 'react'
import { connect } from 'react-redux';
import { onOffDropList, on, off } from '../logic/onOffDropList'
import { updateCarSearchResult } from '../actions/actions'
import SearchResultMiddlePart from './SearchResultMiddlePart'


const SearchResult = (props) => {
    let counter = 0;

    const onOffResult = (e) => {
        try {
            console.log(e);
            console.log(e.target)
            if (e.target && e.target.parentNode) {
                let element = e.target.parentNode
                while (element && element.classList &&
                    !element.classList.contains("search-result-table") && element.parentNode)
                    element = element.parentNode
                if (element.classList.contains("search-result-table")) {
                    if (element.classList.contains("expend")) {
                        element.classList.remove("expend")
                        if (element.childNodes[1].classList.contains("search-result-middle-part"))
                            element.childNodes[1].classList.remove("hidden")
                    }
                    else {
                        element.classList.add("expend")
                        if (element.childNodes[1].classList.contains("search-result-middle-part"))
                            element.childNodes[1].classList.add("hidden")
                    }
                }
            }
        } catch (e) { console.log("onoffresult error", e) }
    }

    const UpdateInitialSearchResult = async () => {
        fetch('http://localhost:3000/carSearchInitial', {
            method: 'POST',
        }).then(response => response.json()).then(data => {
            console.log(data)
            props.dispatch(updateCarSearchResult(data.body))
            return (data.body)
        }
            // response.json().then((result) => this.setState({ results: results }))
        ).catch(error => console.log("ERROR: " + error)) // Handle the error response object)
    }

    if (props.searchResult.length === 0)
        UpdateInitialSearchResult()

    if (props.searchResult && props.searchResult.length > 0)
        return (
            <div className="search-result-wrapper">
                <div className="search-result-header-wrapper">
                    <label className="search-result-header-name" >רכבים פרטיים - מכירה</label >
                    <label className="search-result-header-counter" > מציג {props.searchResult.length} מודעות </label>
                </div>
                <div className="feed-options">
                    <div className="sortBy-wrapper">
                        <div className="sort-by-label">
                            <div className="search-bar-input-wrapper">
                                <li>
                                    <label>מיין לפי</label>
                                    <input className="search-bar-input" placeholder="לפי תאריך" onClick={() => onOffDropList(".sortBy")}></input>
                                    <ul className="searchBarDropDown sortBy hidden" onChange={(e) => {
                                        // updateSearchParams(e, "maker", props.carSearchParmas.maker)
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
                    <div className="filter-search-buttons">
                        <button>עם תמונה</button>
                        <button>עם מחיר ₪</button>
                        <label>הצג מודעות</label>
                    </div>
                </div>

                <div className="search-result-data">
                    {props.searchResult.map(searchData => {
                        return (
                            <div className="search-result-table" onClick={(e) => onOffResult(e)}>
                                <div className="search-result-left-part" onMouseEnter={(e) => on(e)}
                                    onMouseLeave={(e) => off(e)}>
                                    <div className="search-result-new-tab">
                                        <span className="hover-text hidden" >פתיחה בטאב חדש</span>
                                        <i className="new-tab"><img src="/newTabIcon.png" alt="newTabIcon"></img></i>
                                    </div>
                                    <div className="search-result-price"><label>₪{searchData.price}</label></div>
                                    <div className="search-result-date-update"><label>{searchData.lastUpadte}</label></div>
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
                                {/* <p>{JSON.stringify(searchData)}</p> */}
                            </div>
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


