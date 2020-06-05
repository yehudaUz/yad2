import React from 'react'

const DropDownContent = ({ dropDownContentArrText }) => {
    const renderList = () => {
        return dropDownContentArrText.map((dropDownbuttonText) =>
            (
                <li key={dropDownbuttonText}><a href="/">{dropDownbuttonText}</a></li>
            ))
    }

    return (
        <>
            {renderList()}
        </>
    )
}

export { DropDownContent as default }