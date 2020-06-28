import React from 'react';
import { connect } from 'react-redux';
import { updateCarSearchParams } from '../actions/actions'
import { onOffDropList, clearCheckedItemsFromList } from '../logic/elementsmManipulation '
import { makersAndModels, areas } from '../other/textData'
import { updateCarSearchResult } from '../actions/actions'
import DropDownButton from './DropDownButton'

const sendSearchRequest = async (props, isSearchWithParams) => {
    let urlPath = "http://localhost:3000/carSearchInitial"
    if (isSearchWithParams)
        urlPath = "http://localhost:3000/carSearch"
    fetch(urlPath, {
        method: 'POST',
        headers: {
            // 'Accept': 'application/json',
            'Content-Type': 'application/json'
            //  'Content-Type': 'application/x-www-form-urlencoded',
            // redirect: 'follow'
        },
        body: JSON.stringify({ carSearchParams: props.carSearchParams, sortBy: props.sortBy })
    }).then(response => response.json()).then(data => {
        console.log(data)
        // throw new Error()
        props.dispatch(updateCarSearchResult(data.body))
        return (data.body)
    }).catch((error) => {
        console.log("ERROR: " + error)
    })
}

const setText = (textEmpty, textMoreThenOne, arr) => {
    if (Array.isArray(arr) && arr.length === 0)
        return textEmpty
    else if ((Array.isArray(arr) && arr.length === 1) || typeof (arr) === "string") {
        if (Array.isArray(arr))
            return arr[0]
        else if (arr !== "")
            return arr
        else return textEmpty
    }
    return arr.length + " " + textMoreThenOne
}

const SearchBar = (props) => {
    let counter = 0;

    const renderYears = () => {
        let years = []
        for (let i = 1971; i <= 2020; i++)
            years.push(i)
        return years.reverse().map(year => (
            <li key={++counter}>{year}</li>
        ))
    }

    const updateSearchParams = (e, propName, theProp, isClearList) => {
        if (isClearList) {
            if (propName === "maker") {
                props.dispatch(updateCarSearchParams({ maker: [] }))
                props.dispatch(updateCarSearchParams({ model: [] }))
            }
            else {
                props.dispatch(updateCarSearchParams({ [propName]: [] }))
            }
        }
        else if (!(e.target.checked)) {
            const arrWithoutUncheckedItem = theProp.filter(onePropItem => onePropItem !== e.target.parentNode.textContent)
            if (propName === "maker") {
                const validModelsArrs = makersAndModels.filter(oneMakerModel => arrWithoutUncheckedItem.includes(oneMakerModel.maker)).map(modelMaker => modelMaker.models)
                // console.log("valid", validModelsArrs) //.models
                let validModelsArr = []
                validModelsArrs.forEach(modelsArr => modelsArr.forEach(model => validModelsArr.push(model)))
                const newModelsProps = props.carSearchParams.model.filter(oneModel => validModelsArr.includes(oneModel))
                props.dispatch(updateCarSearchParams({ [propName]: [...arrWithoutUncheckedItem], model: newModelsProps }))
            } else
                props.dispatch(updateCarSearchParams({ [propName]: [...arrWithoutUncheckedItem] }))
        } else {
            const newPropArr = [...theProp, e.target.parentNode.textContent]
            props.dispatch(updateCarSearchParams({ [propName]: newPropArr }))
        }
    }

    const updateMenuInputs = () => {
        let maker = document.getElementsByClassName("choose-maker")[0],
            model = document.getElementsByClassName("choose-model")[0],
            fromYear = document.getElementsByClassName("choose-fromYear")[0],
            toYear = document.getElementsByClassName("choose-toYear")[0],
            fromPrice = document.getElementsByClassName("choose-fromPrice")[0],
            toPrice = document.getElementsByClassName("choose-toPrice")[0],
            area = document.getElementsByClassName("choose-area")[0];

        if (maker && model && fromYear && toYear && area)
            Object.entries(props.carSearchParams).forEach(keyValue => {
                switch (keyValue[0]) {
                    case "maker": maker.placeholder = setText("בחרו יצרן", "יצרנים נבחרו", keyValue[1])
                        break;
                    case "model": model.placeholder = setText("בחרו דגם", "פריטים נבחרו", keyValue[1])
                        break;
                    case "fromYear": fromYear.placeholder = setText("משנה", "error", keyValue[1])
                        break;
                    case "toYear": toYear.placeholder = setText("עד שנה", "error", keyValue[1])
                        break;
                    // case "fromPrice": maker.placeholder = setText("ממחיר", "error", newPropArr)
                    //     break;
                    // case "toPrice": maker.placeholder = setText("עד מחיר", "error", newPropArr)
                    //     break;
                    case "area": area.placeholder = setText("בחרו איזור", "פריטים נבחרו", keyValue[1])
                        break;
                    default:
                }
            })
    }

    // יצרן בחר יצרן
    // inputWithDropDownList("יצרן", "בחרו יצרן", "maker", makersAndModels)
    const inputWithDropDownList = (title, placeHolder, className, dropDownListArr) => (
        <>
            {title}
            <input className={"search-bar-input choose-" + className} placeholder={placeHolder} readOnly onClick={() => onOffDropList("." + className)}></input >
            <div className="search-bar-dropDown-wrapper">
                <ul className={"searchBarDropDown " + className + " hidden"} onChange={(e) => {
                    updateSearchParams(e, className, props.carSearchParams[className])
                }}>
                    {dropDownListArr.map((oneElement) => (
                        (className === "maker" &&
                            <li key={oneElement.maker}><input key={oneElement.maker} type="checkbox" />{oneElement.maker}</li>)
                        ||
                        (className === "model" &&
                            <li key={oneElement.model}><input key={oneElement.model} type="checkbox" />{oneElement.model}</li>)
                        ||
                        (<li key={oneElement}><input key={oneElement} type="checkbox" />{oneElement}</li>)
                    ))}
                </ul>
                <div className="search-bar-buttons-strip-wrapper hidden">
                    <div className="search-bar-buttons-strip">
                        <button type="button" className="search-bar-clear-button" onClick={
                            (e) => clearCheckedItemsFromList(e, "." + className).then(() => {
                                updateSearchParams(e, className, props.carSearchParams[className], true)
                            })
                        }>נקה</button>
                        <button type="button" className="search-bar-select-button" onClick={(e) => onOffDropList("." + className)}>בחר</button>
                    </div>
                </div>
            </div>
        </>
    )

    updateMenuInputs()

    window.onclick = (e) => { //close dropDown menu when click on window frame
        console.log("clciked", e.target.tagName)
        if (e.target && e.target.tagName && e.target.tagName !== "INPUT") {
            let allDropDownsMenus = [...document.getElementsByClassName("searchBarDropDown")]
            allDropDownsMenus.forEach(dropDown => {
                if (dropDown.classList && !dropDown.classList.contains("hidden")) {
                    if ((e.target.classList && e.target.classList.contains("search-bar-input")) ||
                        (e.target.parentNode && e.target.parentNode.classList && e.target.parentNode.classList.contains("search-bar-input")))
                        return;
                    dropDown.classList.add("hidden")
                    dropDown.nextElementSibling.classList.add("hidden")
                }
            })
        }
    }

    return (
        <div className="search-bar-div">
            <form className="search-form">
                {/* onSubmit={submitForm}> */}
                <h3><span className="search-bar-header">?איזה רכב תרצו לחפש</span></h3>
                <ul className="search-columns">
                    <li className="search-button-li" onClick={(e) => { e.preventDefault(); sendSearchRequest(props, true) }}><button type="submit" className="search-button">
                        <span className="button_content"><i className="y2i_search"></i> <span className="search-button">חיפוש</span>
                        </span></button>
                    </li>
                    <li><div className="dropdown_btn"><button type="button" className="advance-search">
                        <span className="button_content"><i className="y2i_plus_o"></i>
                            <span className="button_text">חיפוש מתקדם</span></span></button></div>
                    </li>
                    <li>אזור
                    <input className="search-bar-input choose-area" type="text" name="" autoComplete="off" placeholder="בחרו אזור" title="" readOnly
                            onClick={() => onOffDropList(".area")} ></input>
                        <ul key={counter++} className="searchBarDropDown area hidden" onChange={(e) => {
                            updateSearchParams(e, "area", props.carSearchParams.area)
                        }}>
                            {areas.map((oneArea) => {
                                const zonesLi = oneArea.zones.map((oneZone) => (
                                    <li key={oneZone}><input key={oneZone} type="checkbox" />{oneZone}</li>
                                ))
                                zonesLi.unshift(<li><b><input key={oneArea.region} type="checkbox" />{oneArea.region}</b></li>)
                                return zonesLi
                            })}
                        </ul>
                    </li>
                    <li>מחיר בש"ח
                    <div className="search-bar-input-wrapper">
                            <input className="search-bar-input-double choose-toPrice" type="text" name="" autoComplete="off" placeholder="עד מחיר"
                                onChange={(e) => props.dispatch(updateCarSearchParams({ toPrice: e.target.value }))}></input>
                            <input className="search-bar-input-double choose-fromPrice" type="text" name="" autoComplete="off" placeholder="ממחיר"
                                onChange={(e) => props.dispatch(updateCarSearchParams({ fromPrice: e.target.value }))}></input>
                        </div>
                    </li>
                    <li>שנה
                    <div className="search-bar-input-wrapper">
                            <li className="from-year-to-year-li">
                                <input className="search-bar-input-double choose-toYear" type="text" name="" autoComplete="off" placeholder="עד שנה" readOnly
                                    onClick={() => onOffDropList(".toYear")}></input>
                                <ul className="searchBarDropDown toYear hidden" onClick={(e) => {
                                    props.dispatch(updateCarSearchParams({
                                        toYear: e.target.innerText
                                    }))
                                }}>
                                    {renderYears()}
                                </ul>
                                <input className="search-bar-input-double choose-fromYear" type="text" name="" autoComplete="off" placeholder="משנה" readOnly
                                    onClick={() => onOffDropList(".fromYear")} ></input>
                                <ul className="searchBarDropDown fromYear hidden" onClick={(e) => {
                                    props.dispatch(updateCarSearchParams({
                                        fromYear: e.target.innerText
                                    }))
                                }}>
                                    {renderYears()}
                                </ul>
                            </li>
                        </div>
                    </li>
                    <li>דגם
                    <input className="search-bar-input choose-model" type="text" name="" autoComplete="off" placeholder="בחרו דגם" title="" readOnly
                            onClick={() => onOffDropList(".model")} ></input>
                        <ul className="searchBarDropDown model hidden" onChange={(e) => {
                            updateSearchParams(e, "model", props.carSearchParams.model)
                        }} >
                            {props.carSearchParams.maker !== "" && props.carSearchParams.maker !== undefined &&
                                makersAndModels.map((oneMakerModel) => {
                                    if (props.carSearchParams.maker.includes(oneMakerModel.maker)) {
                                        return oneMakerModel.models.map((oneModel) => (
                                            <li key={++counter}><input key={++counter} type="checkbox" />{oneModel}</li>
                                        ))
                                    }
                                })}
                        </ul>
                    </li>
                    <li>
                        יצרן
                        {/* {DropDownButton(true, "יצרן", ".maker")} */}
                        <input className="search-bar-input choose-maker" placeholder="בחרו יצרן" readOnly onClick={() => onOffDropList(".maker")}></input>
                        <div className="search-bar-dropDown-wrapper">
                            <ul className="searchBarDropDown maker hidden" onChange={(e) => {
                                updateSearchParams(e, "maker", props.carSearchParams.maker)
                            }}>
                                {makersAndModels.map((oneMakerModel) => (
                                    <li key={oneMakerModel.maker}><input key={oneMakerModel.maker} type="checkbox" />{oneMakerModel.maker}</li>
                                ))}
                            </ul>
                            <div className="search-bar-buttons-strip-wrapper hidden">
                                <div className="search-bar-buttons-strip">
                                    <button type="button" className="search-bar-clear-button" onClick={
                                        (e) => clearCheckedItemsFromList(e, ".maker").then(() => {
                                            updateSearchParams(e, "maker", props.carSearchParams.maker, true)
                                        })
                                    }>נקה</button>
                                    <button type="button" className="search-bar-select-button" onClick={(e) => onOffDropList(".maker")}>בחר</button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>

            </form>
        </div >
    )
}

const mapStateToProps = (state) => {
    return state
};

const SearchBarConnected = (connect(mapStateToProps)(SearchBar))
export { SearchBarConnected as default, sendSearchRequest }	