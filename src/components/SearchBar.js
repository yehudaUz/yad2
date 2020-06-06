import React from 'react';

const SearchBar = () => {
    return (
        <div className="search-bar-div">
            <form className="search-form">
                <h3><span>?איזה רכב תרצו לחפש</span></h3>
                <ul className="search-columns">
                    <li><button type="submit" data-test-id="searchButton" class="y2_btn primary search_button">
                        <span class="button_content"><i class="y2i_search"></i> <span class="button_text">חיפוש</span>
                        </span></button>
                    </li>
                    <li><div class="dropdown_btn"><button type="button" class="y2_btn advanced_search_button grey">
                        <span class="button_content"><i class="y2i_plus_o"></i>
                            <span class="button_text">חיפוש מתקדם</span></span></button></div>
                    </li>
                    <li>אזור
                    <input className="search-bar-input" type="text" name="" autocomplete="off" placeholder="בחרו אזור" title="" ></input>
                    </li>
                    <li>מחיר בש"ח
                    <input className="search-bar-input" type="text" name="" autocomplete="off" placeholder="ממחיר" ></input>
                        <input className="search-bar-input" type="text" name="" autocomplete="off" placeholder="עד מחיר"></input>
                    </li>
                    <li>שנה
                    <input className="search-bar-input" type="text" name="" autocomplete="off" placeholder="משנה" ></input>
                        <input className="search-bar-input" type="text" name="" autocomplete="off" placeholder="עד שנה" ></input>
                    </li>
                    <li>דגם
                    <input className="search-bar-input" type="text" name="" autocomplete="off" placeholder="בחרו דגם" title="" ></input>
                    </li>
                    <li>יצרן
                        <input className="search-bar-input" type="text" name="" autocomplete="off" placeholder="בחרו יצרן" title="" ></input>
                    </li>
                </ul>

            </form>
        </div >
    )
}

export default SearchBar;
