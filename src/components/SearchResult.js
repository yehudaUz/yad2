import React from 'react'
import { connect } from 'react-redux';
import { onOffDropList, on, off } from '../logic/onOffDropList'

const SearchResult = (props) => {
    let counter = 0;
    console.log("fasdfasdf", props)
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
                            <div className="search-result-table">
                                <div className="search-result-left-part" onMouseEnter={(e) => on(e)}
                                    onMouseLeave={(e) => off(e)}>
                                    <div className="search-result-new-tab">
                                        <span className="hover-text hidden" >פתיחה בטאב חדש</span>
                                        <i className="new-tab"><img src="/newTabIcon.png" alt="newTabIcon"></img></i>
                                    </div>
                                    <div className="search-result-price"><label>₪{searchData.price}</label></div>
                                    <div className="search-result-date-update"><label>{searchData.lastUpadte}</label></div>
                                </div>
                                <div className="search-result-middle-part">
                                    <div className="search-result-year-wrapper" key={++counter}>
                                        <span className="search-result-year">{searchData.year}</span>
                                        <span className="search-result-year-desc">שנה</span>
                                    </div>
                                    <div className="search-result-hand-wrapper" key={++counter}>
                                        <span className="search-result-hand">{searchData.hand}</span>
                                        <span className="search-result-hand-desc">יד</span>
                                    </div>
                                    <div className="search-result-cc-wrapper" key={++counter}>
                                        <span className="search-result-cc">{searchData.engineCc}</span>
                                        <span className="search-result-cc-desc">סמ"ק</span>
                                    </div>
                                </div>
                                <div className="search-result-right-part">
                                    <div className="search-result-image-wrapper">
                                        <img className="search-result-image" src={searchData.imgs[0]} alt="search-result"></img>
                                    </div>
                                    <div className="search-result-car-name-and-title">
                                        <label className="search-result-makerModel">{searchData.model + "  " + searchData.maker}</label>
                                        <label className="search-result-engingTransmition">{searchData.engineType + "  " + searchData.transmitionType + "  " + searchData.engineCc}</label>
                                    </div>
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
