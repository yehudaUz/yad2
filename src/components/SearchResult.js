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
                <div className="sortBy-wrapper">
                    <label className="sort-by-label">מיין לפי
                    <div className="search-bar-input-wrapper">
                            <li>
                            <input className="search-bar-input" placeholder="לפי תאריך" onClick={() => onOffDropList(".sortBy")}></input>
                            <ul className="searchBarDropDown sortBy hidden" onChange={(e) => {
                                // updateSearchParams(e, "maker", props.carSearchParmas.maker)
                            }}>
                                <li><input type="radio" />‏אאודי</li>
                                <li><input type="radio" />‏מרצדס</li>
                            </ul>
                            </li>
                        </div>

                    </label>
                </div>
            </div >
        )
    return null
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(SearchResult);
