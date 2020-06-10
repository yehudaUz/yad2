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