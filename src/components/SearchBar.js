import React from 'react';

const SearchBar = () => {
    const onOffDropList = (className) => {
        if (document.getElementsByClassName(className))
            document.getElementsByClassName(className)[0].style.display === "none" ?
                document.getElementsByClassName(className)[0].style.display = "block" :
                document.getElementsByClassName(className)[0].style.display = "none"
    }
    return (
        <div className="search-bar-div">
            <form className="search-form">
                <h3><span>?איזה רכב תרצו לחפש</span></h3>
                <ul className="search-columns">
                    <li><button type="submit" data-test-id="searchButton" className="y2_btn primary search_button">
                        <span className="button_content"><i className="y2i_search"></i> <span className="button_text">חיפוש</span>
                        </span></button>
                    </li>
                    <li><div className="dropdown_btn"><button type="button" className="y2_btn advanced_search_button grey">
                        <span className="button_content"><i className="y2i_plus_o"></i>
                            <span className="button_text">חיפוש מתקדם</span></span></button></div>
                    </li>
                    <li>אזור
                    <input className="search-bar-input" type="text" name="" autoComplete="off" placeholder="בחרו אזור" title="" ></input>
                    </li>
                    <li>מחיר בש"ח
                    <div className="search-bar-input-wrapper">
                            <input className="search-bar-input-double" type="text" name="" autoComplete="off" placeholder="עד מחיר"></input>
                            <input className="search-bar-input-double" type="text" name="" autoComplete="off" placeholder="ממחיר" ></input>
                        </div>
                    </li>
                    <li>שנה
                    <div className="search-bar-input-wrapper">
                            <li>
                                <input className="search-bar-input-double" type="text" name="" autoComplete="off" placeholder="עד שנה"
                                    onClick={() => onOffDropList("toYear")}></input>
                                <ul className="suka toYear">
                                    <li><input type="checkbox" />עד שנה</li>
                                    <li><input type="checkbox" />עד שנה</li>
                                    <li><input type="checkbox" />עד שנה</li>
                                    <li><input type="checkbox" />עד שנה</li>
                                    <li><input type="checkbox" />עד שנה</li>
                                    <li><input type="checkbox" />עד שנה</li>
                                    <li><input type="checkbox" />עד שנה</li>
                                    <li><input type="checkbox" />עד שנה</li>
                                </ul>
                                <input className="search-bar-input-double" type="text" name="" autoComplete="off" placeholder="משנה"
                                    onClick={() => onOffDropList("fromYear")} ></input>
                                <ul className="suka fromYear">
                                    <li><input type="checkbox" />משנה</li>
                                    <li><input type="checkbox" />משנה</li>
                                    <li><input type="checkbox" />משנה</li>
                                    <li><input type="checkbox" />משנה</li>
                                    <li><input type="checkbox" />משנה</li>
                                    <li><input type="checkbox" />משנה</li>
                                    <li><input type="checkbox" />משנה</li>
                                    <li><input type="checkbox" />משנה</li>
                                </ul>
                            </li>
                        </div>
                    </li>
                    <li>דגם
                    <input className="search-bar-input" type="text" name="" autoComplete="off" placeholder="בחרו דגם" title="" ></input>
                    </li>
                    <li>יצרן
                        <input className="search-bar-input" placeholder="בחרו יצרן" onClick={() => onOffDropList("maker")}></input>
                        {/* <input className="search-bar-input" type="text" name="" autocomplete="off" placeholder="בחרו יצרן" title="" ></input> */}
                        <ul className="suka maker">
                            <li><input type="checkbox" />‏אאודי</li>
                            <li><input type="checkbox" />‏מרצדס</li>
                            <li><input type="checkbox" />‏מרצדס </li>
                            <li><input type="checkbox" />‏מרצדס </li>
                            <li><input type="checkbox" />‏מרצדס </li>
                            <li><input type="checkbox" />‏מרצדס </li>
                            <li><input type="checkbox" />‏מרצדס</li>
                            <li><input type="checkbox" />‏מרצדס</li>
                            <li><input type="checkbox" />‏מרצדס</li>
                            <li><input type="checkbox" />‏מרצדס</li>
                            <li><input type="checkbox" />‏מרצדס</li>
                        </ul>
                    </li>
                </ul>

            </form>
        </div >
    )
}

export default SearchBar;


// <li>שנה
// <div className="search-bar-input-wrapper">
//     <li><input className="search-bar-input" type="text" name="" autocomplete="off" placeholder="עד שנה" ></input>
//         <ul class="suka">
//             <li><input type="checkbox" />Apple </li>
//             <li><input type="checkbox" />Orange</li>
//             <li><input type="checkbox" />Grapes </li>
//             <li><input type="checkbox" />Berry </li>
//             <li><input type="checkbox" />Mango </li>
//             <li><input type="checkbox" />Banana </li>
//             <li><input type="checkbox" />Tomato</li>
//         </ul></li>
//     <li> <input className="search-bar-input" type="text" name="" autocomplete="off" placeholder="משנה" ></input>
//         <ul class="suka">
//             <li><input type="checkbox" />Apaaaaaaple </li>
//             <li><input type="checkbox" />Orange</li>
//             <li><input type="checkbox" />Grapes </li>
//             <li><input type="checkbox" />Berry </li>
//             <li><input type="checkbox" />Mango </li>
//             <li><input type="checkbox" />Banana </li>
//             <li><input type="checkbox" />Tomato</li>
//         </ul></li>
// </div>
// </li>