import React from 'react'
import { connect } from 'react-redux';
import { onOffDropList } from '../logic/onOffDropList'

const SearchResult = (props) => {
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
            </div >
        )
    return null
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(SearchResult);
