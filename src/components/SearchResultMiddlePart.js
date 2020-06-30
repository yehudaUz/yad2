import React from 'react'

const SearchResultMiddlePart = (props) => {
    let counter = 0;

    return (
        <div className={"search-result-middle-part" +  (props.className ? (" " + props.className) : "")}>
            <div className="search-result-year-wrapper" key={++counter}>
                <span className="search-result-year">{props.searchData.year}</span>
                <span className="search-result-year-desc">שנה</span>
            </div>
            <div className="search-result-hand-wrapper" key={++counter}>
                <span className="search-result-hand">{props.searchData.hand}</span>
                <span className="search-result-hand-desc">יד</span>
            </div>
            <div className="search-result-cc-wrapper" key={++counter}>
                <span className="search-result-cc">{props.searchData.engineCc}</span>
                <span className="search-result-cc-desc">סמ"ק</span>
            </div>
        </div>
    )
}

export default SearchResultMiddlePart
