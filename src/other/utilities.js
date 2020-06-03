const carNormalSubMenuButtons = ["פרטי", "מסחרי", "ג'יפים", "אופנועים", "קטנועים", "משאיות", "כלי שיט", "מיוחדים", "אביזרים"]
const carSpecialSubMenuButtons = [{ name: "מחירון רכב", path: "" }, { name: "מכרזים וכינוסים", path: "" }, { name: "מימון רכב", path: "" }]
const cars = { normal: carNormalSubMenuButtons, special: carSpecialSubMenuButtons }

const realestateNormalSubMenuButtons = ["מכירה", "השכרה", "דירות שותפים", "נדלן מסחרי"]
const realestateSpecialSubMenuButtons = [{ name: "הערכת שווי נכס", path: "" }, { name: "יד1 דירות חדשות", path: "" }, { name: 'מדד הנדל"ן', path: "" }, { name: "כונס נכסים", path: "" }]
const realestate = { normal: realestateNormalSubMenuButtons, special: realestateSpecialSubMenuButtons }

export { cars, realestate } 