const carNormalSubMenuButtons = ["פרטי", "מסחרי", "ג'יפים", "אופנועים", "קטנועים", "משאיות", "כלי שיט", "מיוחדים", "אביזרים"]
const carSpecialSubMenuButtons = [{ name: "מחירון רכב", path: "/carPrice.png" }, { name: "מכרזים וכינוסים", path: "/michrazim.png" }, { name: "מימון רכב", path: "/creditCar.png" }]
const cars = { normal: carNormalSubMenuButtons, special: carSpecialSubMenuButtons }

const realestateNormalSubMenuButtons = ["מכירה", "השכרה", "דירות שותפים", "נדלן מסחרי"]
const realestateSpecialSubMenuButtons = [{ name: "הערכת שווי נכס", path: "" }, { name: "יד1 דירות חדשות", path: "" }, { name: 'מדד הנדל"ן', path: "" }, { name: "כונס נכסים", path: "" }]
const realestate = { normal: realestateNormalSubMenuButtons, special: realestateSpecialSubMenuButtons }

const nadlanDropDownContentArrText = ["הערכת שווי נכס", "יד1 דירות חדשות", `מדד הנדל"ן`, "כונס נכסים", "חיפוש על המפה", "מסחרי", "שותפים", "דירות להשכרה", "דירות למכירה"]
const carDropDownContentArrText = ["מימון רכב", "מכרזים וכינוס", "מחירון רכב", "קטלוג רכבים", "כלי שייט", "רכבי יוקרה", "משאיות", "אביזרים", "מיוחדים", "קטנועים", "אופנועים", `ג'יפים`, "מסחרי", "פרטי"]

const makersAndModels = [
    {
        maker: "אאודי",
        models: ['100', '80', 'A1', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'RS3', 'RS5', 'RS6', 'RS7', 'S3', 'S4', 'S5', 'S6']
    },
    {
        maker: "מאזדה",
        models: ['121', '2', '2 דמיו', '3', '323', '323 לאנטיס', '5', '6', '626', 'mpv', 'MX-3', 'MX-5', 'MX-6', 'RX-8', 'דמיו']
    },
    {
        maker: "סובארו",
        models: ['121', '2', '2 דמיו', '3', '323', '323 לאנטיס', '5', '6', '626', 'mpv', 'MX-3', 'MX-5', 'MX-6', 'RX-8', 'דמיו']
    },
    {
        maker: "מרצדס",
        models: ['121', '2', '2 דמיו', '3', '323', '323 לאנטיס', '5', '6', '626', 'mpv', 'MX-3', 'MX-5', 'MX-6', 'RX-8', 'דמיו']
    },
    {
        maker: "מאזדה",
        models: ['121', '2', '2 דמיו', '3', '323', '323 לאנטיס', '5', '6', '626', 'mpv', 'MX-3', 'MX-5', 'MX-6', 'RX-8', 'דמיו']
    },
    {
        maker: "שקר כלשהוא",
        models: ['121', '2', '2 דמיו', '3', '323', '323 לאנטיס', '5', '6', '626', 'mpv', 'MX-3', 'MX-5', 'MX-6', 'RX-8', 'דמיו']
    }
]
export { cars, realestate, nadlanDropDownContentArrText, carDropDownContentArrText, makersAndModels } 