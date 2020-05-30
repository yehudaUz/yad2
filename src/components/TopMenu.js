import React from 'react'
import TopMenuSpecialSections from './TopMenuSpecialSections'
import TopMenuNormalSections from './TopMenuNormalSections'

const TopMenu = () => {

    return (
        <div className="top-menu">
            <nav className="navbar">
                <ul className="top-menu-2-parts-wrapper">
                    <TopMenuSpecialSections />
                    <TopMenuNormalSections />
                </ul>
            </nav>
        </div>


        //     <div>
        //         <nav>
        //         <li class="header_menu_item width_1_1 selected" data-v-12493265=""><div class="hover-dropdown" data-v-2172e2eb="" data-v-12493265=""><div data-v-2172e2eb=""><a href="/vehicles/private-cars" target="_self" class="internalLink nuxt-link-exact-active nuxt-link-active nav_item selected" data-v-12493265="" data-v-2172e2eb=""><div data-v-12493265="">
        //             רכב
        //         </div></a></div> <div class="dropdown_content" data-v-2172e2eb=""><div class="dropdown-content" data-v-2172e2eb="" data-v-12493265=""><div data-v-2172e2eb="" data-v-12493265=""><ul data-v-b1f08816="" data-v-12493265="" data-v-2172e2eb=""><li data-v-b1f08816="" class=""><a href="/vehicles/private-cars" target="_self" class="internalLink nuxt-link-exact-active nuxt-link-active" data-v-b1f08816="">
        //         פרטי
        //     </a></li><li data-v-b1f08816="" class=""><a href="/vehicles/commercial-cars" target="_self" class="internalLink prefetched" data-v-b1f08816="">
        //         מסחרי
        //     </a></li><li data-v-b1f08816="" class=""><a href="/vehicles/4X4" target="_self" class="internalLink prefetched" data-v-b1f08816="">
        //         ג'יפים
        //     </a></li><li data-v-b1f08816="" class=""><a href="/vehicles/motorcycles" target="_self" class="internalLink prefetched" data-v-b1f08816="">
        //         אופנועים
        //     </a></li><li data-v-b1f08816="" class=""><a href="/vehicles/scooters" target="_self" class="internalLink prefetched" data-v-b1f08816="">
        //         קטנועים
        //     </a></li><li data-v-b1f08816="" class=""><a href="/vehicles/other" target="_self" class="internalLink prefetched" data-v-b1f08816="">
        //         מיוחדים
        //     </a></li><li data-v-b1f08816="" class=""><a href="/vehicles/car-accessories" target="_self" class="internalLink prefetched" data-v-b1f08816="">
        //         אביזרים
        //     </a></li><li data-v-b1f08816="" class=""><a href="/vehicles/trucks" target="_self" class="internalLink prefetched" data-v-b1f08816="">
        //         משאיות
        //     </a></li><li data-v-b1f08816="" class=""><a href="/vehicles/luxury-cars" target="_self" class="internalLink prefetched" data-v-b1f08816="">
        //         רכבי יוקרה
        //     </a></li><li data-v-b1f08816="" class=""><a href="/vehicles/watercraft" target="_self" class="internalLink prefetched" data-v-b1f08816="">
        //         כלי שייט
        //     </a></li></ul></div><div data-v-2172e2eb="" data-v-12493265=""><ul data-v-b1f08816="" data-v-12493265="" data-v-2172e2eb=""><li data-v-b1f08816="" class=""><a href="http://pricelist.yad2.co.il/NewCars.php" target="_blank" rel="follow" data-v-b1f08816=""><i class="y2i_car_catalog" data-v-b1f08816=""></i>
        //         קטלוג רכבים
        //     </a></li><li data-v-b1f08816="" class=""><a href="http://pricelist.yad2.co.il/" target="_blank" rel="follow" data-v-b1f08816=""><i class="y2i_car_price" data-v-b1f08816=""></i>
        //         מחירון רכב
        //     </a></li><li data-v-b1f08816="" class=""><a href="/vehicles/kones" target="_blank" rel="follow" data-v-b1f08816=""><i class="y2i_car_index" data-v-b1f08816=""></i>
        //         מכרזים וכינוס
        //     </a></li><li data-v-b1f08816="" class=""><a href="//www.yad2.co.il/MiniSites/yad2Mimun/?bannerID=120x120&amp;mador=Cars" target="_blank" rel="follow" data-v-b1f08816=""><i class="y2i_Calculator" data-v-b1f08816=""></i>
        //         מימון רכב
        //     </a></li></ul></div></div></div></div></li>
        //         </nav>
        //     </div>
    )
}

export { TopMenu as default }
