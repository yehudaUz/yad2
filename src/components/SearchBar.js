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
                    <div className="search-bar-input-wrapper">
                            <input className="search-bar-input-double" type="text" name="" autocomplete="off" placeholder="עד מחיר"></input>
                            <input className="search-bar-input-double" type="text" name="" autocomplete="off" placeholder="ממחיר" ></input>
                        </div>
                    </li>
                    <li>שנה
                        <div className="search-bar-input-wrapper">
                            <input className="search-bar-input-double" type="text" name="" autocomplete="off" placeholder="עד שנה" ></input>
                            <input className="search-bar-input-double" type="text" name="" autocomplete="off" placeholder="משנה" ></input>
                        </div>
                    </li>
                    <li>דגם
                    <input className="search-bar-input" type="text" name="" autocomplete="off" placeholder="בחרו דגם" title="" ></input>
                    </li>
                    <li>יצרן
                        {/* <input className="search-bar-input" type="text" name="" autocomplete="off" placeholder="בחרו יצרן" title="" ></input> */}
                        <ul class="suka">
                            <li><input type="checkbox" />Apple </li>
                            <li><input type="checkbox" />Orange</li>
                            <li><input type="checkbox" />Grapes </li>
                            <li><input type="checkbox" />Berry </li>
                            <li><input type="checkbox" />Mango </li>
                            <li><input type="checkbox" />Banana </li>
                            <li><input type="checkbox" />Tomato</li>
                        </ul>
                    </li>
                </ul>

            </form>
        </div >
    )
}

export default SearchBar;
