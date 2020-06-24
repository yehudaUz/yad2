export const onOffDropList = (className) => {
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
        const menus = document.getElementsByClassName("searchBarDropDown")
        for (let i = 0; i < menus.length; i++) {
            let oneMenu = menus[i]
            if (!oneMenu.classList.contains("hidden") && !oneMenu.classList.contains(className.substring(1)))
                oneMenu.classList.add("hidden")
        }
    }
}

export const offNewTab = (e) => {
    let element = e.target//.parentNode
    while ((element && element.classList && !element.classList.contains("master")) ||
        (element && !element.classList && element.parentNode))
        element = element.parentNode

    if (element && element.firstElementChild && element.firstElementChild.firstElementChild &&
        element.firstElementChild.firstElementChild.firstElementChild &&
        element.firstElementChild.firstElementChild.firstElementChild.tagName &&
        element.firstElementChild.firstElementChild.firstElementChild.tagName === "I") {
        let iconImage = element.firstElementChild.firstElementChild.firstElementChild
        if (iconImage && iconImage.classList && !iconImage.classList.contains("hidden"))
            iconImage.classList.add("hidden")
    }

    if (element && element.firstElementChild && element.firstElementChild.firstElementChild &&
        element.firstElementChild.firstElementChild.children.length > 1 &&
        element.firstElementChild.firstElementChild.children[1].tagName &&
        element.firstElementChild.firstElementChild.children[1].tagName === "SPAN") {
        let newTabText = element.firstElementChild.firstElementChild.children[1]
        if (newTabText && newTabText.classList && !newTabText.classList.contains("hidden"))
            newTabText.classList.add("hidden")
    }
}

export const onNewTab = (e) => {
    let element = e.target//.parentNode
    while ((element && element.classList && !element.classList.contains("master")) ||
        (element && !element.classList && element.parentNode))
        element = element.parentNode

    if (element.classList.contains("expend"))
        return;

    if (element && element.firstElementChild && element.firstElementChild.firstElementChild &&
        element.firstElementChild.firstElementChild.firstElementChild &&
        element.firstElementChild.firstElementChild.firstElementChild.tagName &&
        element.firstElementChild.firstElementChild.firstElementChild.tagName === "I") {
        let iconImage = element.firstElementChild.firstElementChild.firstElementChild
        if (iconImage && iconImage.classList && iconImage.classList.contains("hidden"))
            iconImage.classList.remove("hidden")
    }

    if (element && element.firstElementChild && element.firstElementChild.firstElementChild &&
        element.firstElementChild.firstElementChild.children.length > 1 &&
        element.firstElementChild.firstElementChild.children[1].tagName &&
        element.firstElementChild.firstElementChild.children[1].tagName === "SPAN") {
        let newTabText = element.firstElementChild.firstElementChild.children[1]
        if (newTabText && newTabText.classList && newTabText.classList.contains("hidden"))
            newTabText.classList.remove("hidden")
    }
}

export const onOffResult = (e) => {
    try {
        console.log(e);
        console.log(e.target)
        if (e.target && e.target.classList && (
            e.target.classList.contains("search-result-contact-seller-button") ||
            e.target.classList.contains("search-result-button-text") ||
            e.target.classList.contains("search-result-icon")
        )) {
            if (e.target.classList.contains("search-result-contact-seller-button")) {
                if (e.target.nextElementSibling && e.target.nextElementSibling.classList &&
                    e.target.nextElementSibling.classList.contains("show-phone-number-wrapper"))
                    if (e.target.nextElementSibling.classList.contains("hidden"))
                        e.target.nextElementSibling.classList.remove("hidden")
                    else
                        e.target.nextElementSibling.classList.add("hidden")
            }
            else if (e.target.classList.contains("search-result-button-text") ||
                e.target.classList.contains("search-result-icon")) {
                if (e.target.parentElement && e.target.parentElement.nextElementSibling &&
                    e.target.parentElement.nextElementSibling.classList &&
                    e.target.parentElement.nextElementSibling.classList.contains("show-phone-number-wrapper"))
                    if (e.target.parentElement.nextElementSibling.classList.contains("hidden"))
                        e.target.parentElement.nextElementSibling.classList.remove("hidden")
                    else
                        e.target.parentElement.nextElementSibling.classList.add("hidden")
            }
            // else if (e.target.classList.contains("search-result-icon")) {
            //     if (e.target.nextElementSibling && e.target.nextElementSibling.classList &&
            //         e.target.nextElementSibling.classList.contains("show-phone-number-wrapper"))
            //         if (e.target.nextElementSibling.classList.contains("hidden"))
            //             e.target.nextElementSibling.classList.remove("hidden")
            //         else
            //             e.target.nextElementSibling.classList.addF("hidden")
            // }

            console.log("button cliced")
            e.target.click()
            return
        }

        if (e.target && e.target.parentNode) {
            let element = e.target//.parentNode
            while (element && element.classList &&
                !element.classList.contains("search-result-table") && element.parentNode)
                element = element.parentNode
            if (element.classList.contains("search-result-table")) {
                if (element.classList.contains("search-result-button-text"))
                    return;
                if (element.classList.contains("expend")) {
                    element.classList.remove("expend") //table
                    if (element.childNodes[1].classList.contains("search-result-middle-part"))
                        element.childNodes[1].classList.remove("hidden")
                    if (element.nextElementSibling.classList.contains("expendable-table"))
                        element.nextElementSibling.classList.add("hidden")
                    if (element.childNodes[0].childNodes[3])
                        element.childNodes[0].childNodes[3].classList.add("hidden")
                    if (element.childNodes[2]) //right part
                        element.childNodes[2].classList.remove("expend")
                    if (element.childNodes[0]) //left part
                        element.childNodes[0].classList.remove("expend")
                    if (element.nextElementSibling && element.nextElementSibling.nextElementSibling &&
                        element.nextElementSibling.nextElementSibling.classList.contains("footer"))
                        element.nextElementSibling.nextElementSibling.classList.add("hidden")

                }
                else {
                    element.classList.add("expend")//table
                    if (element.childNodes[1].classList.contains("search-result-middle-part"))
                        element.childNodes[1].classList.add("hidden")
                    if (element.nextElementSibling.classList.contains("expendable-table"))
                        element.nextElementSibling.classList.remove("hidden")
                    if (element.childNodes[0].childNodes[3])
                        element.childNodes[0].childNodes[3].classList.remove("hidden")
                    if (element.childNodes[2]) //right part
                        element.childNodes[2].classList.add("expend")
                    if (element.childNodes[0]) //left part
                        element.childNodes[0].classList.add("expend")
                    if (element.nextElementSibling && element.nextElementSibling.nextElementSibling &&
                        element.nextElementSibling.nextElementSibling.classList.contains("footer"))
                        element.nextElementSibling.nextElementSibling.classList.remove("hidden")
                }
            }
        }
    } catch (e) { console.log("onoffresult error", e) }
}
