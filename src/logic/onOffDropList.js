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