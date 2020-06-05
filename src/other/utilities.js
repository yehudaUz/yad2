const carNormalSubMenuButtons = ["פרטי", "מסחרי", "ג'יפים", "אופנועים", "קטנועים", "משאיות", "כלי שיט", "מיוחדים", "אביזרים"]
const carSpecialSubMenuButtons = [{ name: "מחירון רכב", path: "/carPrice.png" }, { name: "מכרזים וכינוסים", path: "/michrazim.png" }, { name: "מימון רכב", path: "/creditCar.png" }]
const cars = { normal: carNormalSubMenuButtons, special: carSpecialSubMenuButtons }

const realestateNormalSubMenuButtons = ["מכירה", "השכרה", "דירות שותפים", "נדלן מסחרי"]
const realestateSpecialSubMenuButtons = [{ name: "הערכת שווי נכס", path: "" }, { name: "יד1 דירות חדשות", path: "" }, { name: 'מדד הנדל"ן', path: "" }, { name: "כונס נכסים", path: "" }]
const realestate = { normal: realestateNormalSubMenuButtons, special: realestateSpecialSubMenuButtons }

const nadlanDropDownContentArrText = ["הערכת שווי נכס", "יד1 דירות חדשות", `מדד הנדל"ן`, "כונס נכסים", "חיפוש על המפה", "מסחרי", "שותפים", "דירות להשכרה", "דירות למכירה"]
const carDropDownContentArrText = ["מימון רכב","מכרזים וכינוס","מחירון רכב","קטלוג רכבים","כלי שייט","רכבי יוקרה","משאיות","אביזרים","מיוחדים","קטנועים","אופנועים",`ג'יפים`,"מסחרי","פרטי"]

export { cars, realestate,nadlanDropDownContentArrText,carDropDownContentArrText } 