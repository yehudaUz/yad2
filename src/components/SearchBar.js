import React from 'react';
import { connect } from 'react-redux';
import { updateCarSearchParmas } from '../actions/actions'

const SearchBar = (props) => {
    console.log("Z", props)
    const submitForm = (e) => {
        // e.preventDefault()
        // const formValues = {
        //     maker: e.target[24].value,
        //     model: e.target[23].value,
        //     fromYear: e.target[14].value,
        //     toYear: e.target[5].value,
        //     fromPrice: e.target[4].value,
        //     toPrice: e.target[3].value,
        //     area: e.target[2].value
        // }
        // console.log(JSON.stringify(formValues))
        // throw new Error()
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
                    document.querySelectorAll(className + ".hidden").length > 0 ?
                        document.querySelectorAll(className + ".hidden")[0].classList.remove("hidden")
                        : document.querySelectorAll(className)[0].classList.add("hidden")
                    console.log("unknown " + className + "  for dropList onOff!")
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
                    <input className="search-bar-input" type="text" name="" autoComplete="off" placeholder="בחרו אזור" title=""
                            onClick={() => onOffDropList(".area")} ></input>
                        <ul className="searchBarDropDown area hidden" onChange={(e) => {
                            console.log("TTTTT", e.target.parentNode.textContent, e.target.checked)
                        }}>
                            <li><input type="checkbox" />ירושלים</li>
                            <li><input type="checkbox" />תל אביב</li>
                        </ul>
                    </li>
                    <li>מחיר בש"ח
                    <div className="search-bar-input-wrapper">
                            <input className="search-bar-input-double" type="text" name="" autoComplete="off" placeholder="עד מחיר"
                                onChange={(e) => props.dispatch(updateCarSearchParmas({ toPrice: e.target.value }))}></input>
                            <input className="search-bar-input-double" type="text" name="" autoComplete="off" placeholder="ממחיר"
                                onChange={(e) => props.dispatch(updateCarSearchParmas({ fromPrice: e.target.value }))}></input>
                        </div>
                    </li>
                    <li>שנה
                    <div className="search-bar-input-wrapper">
                            <li>
                                <input className="search-bar-input-double" type="text" name="" autoComplete="off" placeholder="עד שנה"
                                    onClick={() => onOffDropList(".toYear")}></input>
                                <ul className="searchBarDropDown toYear hidden" onChange={(e) => {
                                    console.log("TTTTT", e.target.parentNode.textContent, e.target.checked)
                                }}>
                                    <li><input type="checkbox" />עד שנה</li>
                                    <li><input type="checkbox" />עד שנה</li>
                                </ul>
                                <input className="search-bar-input-double" type="text" name="" autoComplete="off" placeholder="משנה"
                                    onClick={() => onOffDropList(".fromYear")} ></input>
                                <ul className="searchBarDropDown fromYear hidden" onChange={(e) => {
                                    console.log("TTTTT", e.target.parentNode.textContent, e.target.checked)
                                }}>
                                    <li><input type="checkbox" />משנה</li>
                                    <li><input type="checkbox" />משנה</li>
                                </ul>
                            </li>
                        </div>
                    </li>
                    <li>דגם
                    <input className="search-bar-input" type="text" name="" autoComplete="off" placeholder="בחרו דגם" title=""
                            onClick={() => onOffDropList(".model")} ></input>
                        <ul className="searchBarDropDown model hidden" onChange={(e) => {
                            console.log("TTTTT", e.target.parentNode.textContent, e.target.checked)
                        }} >
                            <li><input type="checkbox" />A6</li>
                            <li><input type="checkbox" />MG</li>
                        </ul>
                    </li>
                    <li>יצרן
                        <input className="search-bar-input" placeholder="בחרו יצרן" onClick={() => onOffDropList(".maker")}></input>
                        {/* <input className="search-bar-input" type="text" name="" autocomplete="off" placeholder="בחרו יצרן" title="" ></input> */}
                        <ul className="searchBarDropDown maker hidden" onChange={(e) => {
                            console.log("TTTTT", e.target.parentNode.textContent, e.target.checked)
                            if (!e.target.checked) {
                                const makerArrWithoutUncheckedItem = props.carSearchParmas.maker.filter(maker => maker !== e.target.parentNode.textContent)
                                props.dispatch(updateCarSearchParmas({ maker: [...makerArrWithoutUncheckedItem] }))
                            } else
                                props.dispatch(updateCarSearchParmas({ maker: [...props.carSearchParmas.maker, e.target.parentNode.textContent] }))
                        }}>
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