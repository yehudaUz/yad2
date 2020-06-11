import React from 'react'
import { connect } from 'react-redux';

const Login = (props) => {
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
                    <a href="/logout" class="logout">התנתק</a>
                </div>
            </div>



            <div class="nav">
                <ul class="nav-list">
                    <li class="menu_element  active "><a href="//my.yad2.co.il/newOrder/index.php?action=personalAreaIndex">עדכון ועריכת מודעות</a></li><li class="menu_element  ">
                        <a href="//my.yad2.co.il/newOrder/index.php">פרסום מודעה חדשה</a>
                    </li><li class="menu_element1  ">
                        <a href="//my.yad2.co.il/newOrder/index.php?action=personalAreaCustomerInfo">עדכון פרטים</a></li>
                </ul>
                <div class="searchFormNav">
                    <form name="searchSiteform">
                        <span>
                            <select name="page" class="categorySelect">
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
                            <input name="q" id="q" type="text" autocomplete="on"></input>
                        </span>
                        <span class="searchSitebtn" onclick="personalAreaHeader.handleSiteSearch(this)">חפש</span>

                    </form>
                </div>
                <div class="cb"></div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(Login);
