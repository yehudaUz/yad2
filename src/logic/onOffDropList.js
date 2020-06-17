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
    if (e.target.firstElementChild && e.target.firstElementChild.firstElementChild &&
        e.target.firstElementChild.firstElementChild.tagName.toLowerCase() === "span") {
        if (!(e.target.firstElementChild.firstElementChild.classList.contains("hidden")))
            e.target.firstElementChild.firstElementChild.classList.add("hidden")
    }
    else if (e.target.parentElement && e.target.parentElement.previousSibling && e.target.parentElement.previousSibling.tagName
        && e.target.parentElement.previousSibling.tagName.toLowerCase() === "span") {
        if (!(e.target.parentElement.previousSibling.classList.contains("hidden")))
            e.target.parentElement.previousSibling.classList.add("hidden")
    }
    else if (e.target.firstElementChild && e.target.firstElementChild.tagName.toLowerCase() === "span")
        if (!(e.target.firstElementChild.classList.contains("hidden")))
            e.target.firstElementChild.classList.add("hidden")
    // if (document.querySelectorAll(e).length > 0) {
    //     if (document.querySelectorAll(e + ".hidden").length > 0)
    //         document.querySelectorAll(e + ".hidden")[0].classList.remove("hidden")
    // }
}

export const on = (e) => {
    if (e.target && e.target.firstElementChild && e.target.firstElementChild &&
        e.target.firstElementChild.firstElementChild &&
        e.target.firstElementChild.firstElementChild.tagName
        && e.target.firstElementChild.firstElementChild.tagName.toLowerCase() === "span") {
        if (e.target.firstElementChild.firstElementChild.classList.contains("hidden"))
            e.target.firstElementChild.firstElementChild.classList.remove("hidden")
    }
    else if (e.target && e.target.parentElement && e.target.parentElement.previousSibling
        && e.target.parentElement.previousSibling.tagName &&
        e.target.parentElement.previousSibling.tagName.toLowerCase() === "span") {
        if (e.target.parentElement.previousSibling.classList.contains("hidden"))
            e.target.parentElement.previousSibling.classList.remove("hidden")
    }
    // if (document.querySelectorAll(e).length > 0) {
    //     if (document.querySelectorAll(e + ".hidden").length == 0)
    //         document.querySelectorAll(e)[0].classList.add("hidden")
    // }
}