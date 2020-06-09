import React from 'react';
import { connect } from 'react-redux';
import { updateCarSearchParmas } from '../actions/actions'

const SearchBar = (props) => {
    console.log("Z", props)
    const submitForm = (e) => {
        e.preventDefault()
        const formValues = {
            maker: e.target[24].value,
            model: e.target[23].value,
            fromYear: e.target[14].value,
            toYear: e.target[5].value,
            fromPrice: e.target[4].value,
            toPrice: e.target[3].value,
            area: e.target[2].value
        }
        console.log(JSON.stringify(formValues))
        throw new Error()
    }
    const onOffDropList = (className) => {
        if (document.querySelectorAll(className).length > 0) {
            switch (className) {
                case ".fromYear":
                    if (document.querySelectorAll(className + ".hidden").length > 0) {
                        document.querySelectorAll(className + ".hidden")[0].classList.remove("hidden")
                        document.querySelectorAll(".toYear")[0].classList.add("hidden")
                    } else
                        document.querySelectorAll(className)[0].classList.add("hidden")
                    break;
                case ".toYear":
                    if (document.querySelectorAll(className + ".hidden").length > 0) {
                        document.querySelectorAll(className + ".hidden")[0].classList.remove("hidden")
                        document.querySelectorAll(".fromYear")[0].classList.add("hidden")
                    } else
                        document.querySelectorAll(className)[0].classList.add("hidden")
                    break;
                default:
                    console.log("unknown class for dropList onOff!")
                    break;
            }
        }
    }
    return (
        <div className="search-bar-div">
            <form className="search-form" onSubmit={submitForm}>
                <h3><span>?איזה רכב תרצו לחפש</span></h3>
                <ul className="search-columns">
                    <li className="search-button-li"><button type="submit" className="search-button">
                        <span className="button_content"><i className="y2i_search"></i> <span className="button_text">חיפוש</span>
                        </span></button>
                    </li>
                    <li><div className="dropdown_btn"><button type="button" className="advance-search">
                        <span className="button_content"><i className="y2i_plus_o"></i>
                            <span className="button_text">חיפוש מתקדם</span></span></button></div>
                    </li>
                    <li>אזור
                    <input className="search-bar-input" type="text" name="" autoComplete="off" placeholder="בחרו אזור" title="" ></input>
                    </li>
                    <li>מחיר בש"ח
                    <div className="search-bar-input-wrapper">
                            <input className="search-bar-input-double" type="text" name="" autoComplete="off" placeholder="עד מחיר"></input>
                            <input className="search-bar-input-double" type="text" name="" autoComplete="off" placeholder="ממחיר"
                                onChange={(e) => props.dispatch(updateCarSearchParmas({ fromPrice: e.target.value }))}></input>
                        </div>
                    </li>
                    <li>שנה
                    <div className="search-bar-input-wrapper">
                            <li>
                                <input className="search-bar-input-double" type="text" name="" autoComplete="off" placeholder="עד שנה"
                                    onClick={() => onOffDropList(".toYear")}></input>
                                <ul className="searchBarDropDown toYear hidden">
                                    <li><input type="checkbox" />עד שנה</li>
                                    <li><input type="checkbox" />עד שנה</li>
                                </ul>
                                <input className="search-bar-input-double" type="text" name="" autoComplete="off" placeholder="משנה"
                                    onClick={() => onOffDropList(".fromYear")} ></input>
                                <ul className="searchBarDropDown fromYear hidden">
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
                        <input className="search-bar-input" placeholder="בחרו יצרן" onClick={() => onOffDropList(".maker")}></input>
                        {/* <input className="search-bar-input" type="text" name="" autocomplete="off" placeholder="בחרו יצרן" title="" ></input> */}
                        <ul className="searchBarDropDown maker">
                            <li><input type="checkbox" />‏אאודי</li>
                            <li><input type="checkbox" />‏מרצדס</li>
                        </ul>
                    </li>
                </ul>

            </form>
        </div >
    )
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(SearchBar);



// <li>שנה
// <div className="search-bar-input-wrapper">
//     <li><input className="search-bar-input" type="text" name="" autocomplete="off" placeholder="עד שנה" ></input>
//         <ul class="searchBarDropDown">
//             <li><input type="checkbox" />Apple </li>
//             <li><input type="checkbox" />Orange</li>
//             <li><input type="checkbox" />Grapes </li>
//             <li><input type="checkbox" />Berry </li>
//             <li><input type="checkbox" />Mango </li>
//             <li><input type="checkbox" />Banana </li>
//             <li><input type="checkbox" />Tomato</li>
//         </ul></li>
//     <li> <input className="search-bar-input" type="text" name="" autocomplete="off" placeholder="משנה" ></input>
//         <ul class="searchBarDropDown">
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