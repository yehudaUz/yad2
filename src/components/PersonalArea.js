import React from 'react'
import { connect } from 'react-redux';

const PersonalArea = (props) => {
    console.log("fasdfasdf", props)
    return (
        <div className="login-wrapper">
            <div className="login-header">
                <div className="login-logo">
                    <a href="/"> <img src="//images.yad2.co.il/Pic/yad2new/page/yad2_madad.jpg"
                        alt="לוח יד2- לוח המודעות הגדול באינטרנט"></img></a>
                </div>
                <div className="login-title">
                    האזור האישי שלי
                    </div>
                <div className="personal-information">
                    שלום, יהודה עוזיאל! יש לך (1) מודעות פעילות |
                    <img src="//my.yad2.co.il/images/myYad2Secure/logout_small.jpg"
                        border="0" alt="logout">
                    </img>
                    <a href="/logout" className="logout">התנתק</a>
                </div>
            </div>



            <div className="nav">
                <ul className="nav-list">
                    <li className="menu_element  active "><a href="//my.yad2.co.il/newOrder/index.php?action=personalAreaIndex">עדכון ועריכת מודעות</a></li><li className="menu_element  ">
                        <a href="//my.yad2.co.il/newOrder/index.php">פרסום מודעה חדשה</a>
                    </li><li className="menu_element1  ">
                        <a href="//my.yad2.co.il/newOrder/index.php?action=personalAreaCustomerInfo">עדכון פרטים</a></li>
                </ul>
                <div className="searchFormNav">
                    <form name="searchSiteform">
                        <span>
                            <select name="page" className="categorySelect">
                                <option value="-1">בחר קטגוריה</option>
                                <optgroup label="רכב"><option value="HomePageSearch.php?Cat=1_1">-- פרטי</option>
                                    <option value="HomePageSearch.php?Cat=1_2">-- מסחרי</option>
                                    <option value="HomePageSearch.php?Cat=1_3">-- ג'יפים</option>
                                    <option value="HomePageSearch.php?Cat=1_4">-- אופנועים</option>
                                    <option value="HomePageSearch.php?Cat=1_5">-- קטנועים</option>
                                    <option value="HomePageSearch.php?Cat=1_6">-- מיוחדים</option>
                                    <option value="HomePageSearch.php?Cat=1_7">-- אביזרים</option>
                                    <option value="HomePageSearch.php?Cat=1_9">-- משאיות</option>
                                    <option value="HomePageSearch.php?Cat=1_13">-- כלי שייט</option>
                                </optgroup><optgroup label="נדל''ן"><option value="HomePageSearch.php?Cat=2_1">-- מכירה</option>
                                    <option value="HomePageSearch.php?Cat=2_2">-- השכרה</option><option value="HomePageSearch.php?Cat=2_3">-- שותפים</option>
                                    <option value="HomePageSearch.php?Cat=2_4">-- מסחרי</option><option value="HomePageSearch.php?Cat=2_5">-- תיווך מכירה</option>
                                    <option value="HomePageSearch.php?Cat=2_6">-- תיווך השכרה</option><option value="HomePageSearch.php?Cat=2_7">-- תיווך מסחרי</option>
                                </optgroup><optgroup label="מכירות/יד שנייה"><option value="HomePageSearch.php?Cat=3_0">-- יד שניה</option>
                                    <option value="HomePageSearch.php?Cat=3_2">-- מוצרים חדשים</option>
                                </optgroup><option value="HomePageSearch.php?Cat=5_0">חיות מחמד</option>
                                <option value="HomePageSearch.php?Cat=6_0">לימודים</option>
                                <option value="HomePageSearch.php?Cat=10_0">תיירות</option>
                                <option value="HomePageSearch.php?Cat=11_0">אלטרנטיבי</option>
                            </select>
                        </span>
                        <span>
                            <input name="q" id="q" type="text" autoComplete="on"></input>
                        </span>
                        <span className="searchSitebtn" onClick={() => { }}>חפש</span>

                    </form>
                </div>
            </div>

            <form className="personal-all-input-wrapper" action="/postNewAd" method="post">
                <input placeholder="maker" name="maker" className="personal-area-maker" type="text"></input>
                <input placeholder="model" name="model" className="personal-area-model" type="text"></input>
                <input placeholder="price" name="price" className="personal-area-price" type="text"></input>
                <input placeholder="year" name="year" className="personal-area-year" type="text"></input>
                <input placeholder="hand" name="hand" className="personal-area-hand" type="text"></input>
                <input placeholder="engineCc" name="engineCc" className="personal-area-engineCc" type="text"></input>
                <input placeholder="area" name="area" className="personal-area-area" type="text"></input>
                <input placeholder="freeText" name="freeText" className="personal-area-freeText" type="text"></input>
                <input placeholder="km" name="km" className="personal-area-km" type="text"></input>
                <input placeholder="engineType" name="engineType" className="personal-area-engineType" type="text"></input>
                <input placeholder="transmitionType" name="transmitionType" className="personal-area-transmitionType" type="text"></input>
                <input placeholder="dateOnTheRoad" name="dateOnTheRoad" className="personal-area-dateOnTheRoad" type="text"></input>
                <input placeholder="testUntil" name="testUntil" className="personal-area-testUntil" type="text"></input>
                <input placeholder="ownership" name="ownership" className="personal-area-ownership" type="text"></input>
                <input placeholder="isFitToDisability" name="isFitToDisability" className="personal-area-isFitToDisability" type="text"></input>
                <div>
                    <label for="img">Select image:</label>
                    <input type="file" id="img" name="img" accept="image/*" />
                </div>
                <button>שלח מודעה</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(PersonalArea);

// [{
//     maker: "מרצדס", model: "amg", price: "50000", year: "1965", hand: "3", engineCc: "2000", area: "ירושלים", freeText: "ידשה ושמורה", km: "80000",
//     engineType: "בנזין", transmitionType: "אוטומט", dateOnTheRoad: "15032015", testUntil: "180321", ownership: "פרטי", isReplaceOk: "false",
//     isFitToDisability: "false", lastUpadte: "21052020", imgs: ["https://img.yad2.co.il/Pic/202006/07/1_1/o/o1_1_1_01240_20200607150613.jpg?l=7&c=6&w=1024&h=768"]
// },