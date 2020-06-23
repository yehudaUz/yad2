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
    }
}

export const off = (e) => {
    let element = e.target//.parentNode
    while (element && element.classList &&
        !element.classList.contains("search-result-left-part") && element.parentNode)
        element = element.parentNode

    if (element.firstElementChild && element.firstElementChild.lastElementChild &&
        element.firstElementChild.lastElementChild.tagName &&
        element.firstElementChild.lastElementChild.tagName.toLowerCase() === "span" &&
        !element.firstElementChild.lastElementChild.classList.contains("hidden"))
        element.firstElementChild.lastElementChild.classList.add("hidden")
}

export const on = (e) => {
    let element = e.target//.parentNode
    while (element && element.classList &&
        !element.classList.contains("search-result-left-part") && element.parentNode)
        element = element.parentNode

    if (element.firstElementChild && element.firstElementChild.lastElementChild &&
        element.firstElementChild.lastElementChild.tagName &&
        element.firstElementChild.lastElementChild.tagName.toLowerCase() === "span" &&
        element.firstElementChild.lastElementChild.classList.contains("hidden"))
        element.firstElementChild.lastElementChild.classList.remove("hidden")
}

export const onOffResult = (e) => {
    try {
        console.log(e);
        console.log(e.target)
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
