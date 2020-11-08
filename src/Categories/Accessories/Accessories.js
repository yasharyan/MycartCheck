import React from 'react'
import Secondadvertise from '../../Advertisement/Secondadvertise'
import Bottombar from '../../Components/Bottombar'
import Categoriescomponent from '../../Components/Categoriescomponent'
import ratingstarfull from '../../Advertisement/img/ratingstarfull.png'
import ratingstar4 from '../../Advertisement/img/ratingstar4.png'
import ratingstarhalf from '../../Advertisement/img/ratingstar4.5.png'
import accessories1 from './img/accessories1.jpg'
import accessories2 from './img/accessories2.jpg'
import accessories3 from './img/accessories3.jpg'
import accessories4 from './img/accessories4.jpg'
import Navbar from '../../Components/Navbar'

function Accessories() {
    return (
        <React.Fragment>
            <Navbar/>
            <Secondadvertise
                brandName={<span style={{fontWeight: "Bold"}}>Marshall Major 3<span style={{fontWeight: "400"}}> BT Bluetooth Headset  (Brown, On the Ear)</span></span>}
                visit="/Accessories1details"
                price="Rs. 1,41,690.00"
                maincontainer="container m-auto"
                classNamemainrow="row m-auto w-100 h-100"
                classNameimg="col p-0 h-100 p-4"
                classNamecol1="col-lg-4 order-lg-1 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-ld-2 order-1 p-0 w-100 h-100 mb-0"
                classNamecol3="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 detailarea"
                imgratingstar={ratingstarfull} altratingstar="Rating star"
                supply="Abailable, Hurry up"
                imgproduct={accessories1}
                altcamera="Sony Alpha ILCE 24MP Camera"
                buy="/Buy"
                offer1="Upto Rs.41,090 off."
                offer2="on Kotak Debit/Credit Cards, 10% off, up to" offer2Rs="₹14,169."
                offer3="up to, 29%"
                offer4="EMI on select cards for orders above" offer4Rs="₹9000."
                offer5="up to 10% off," offer5Rs="₹14,169."

            />
            <Secondadvertise
                brandName={<span style={{fontWeight: "Bold"}}>HyperX Pulsefire Surge<span style={{fontWeight: "400"}}> HX-MC002B RGB Gaming Mouse (Black)</span></span>}
                visit="/Accessories2details"
                price="Rs. 78,500.00"
                maincontainer="container m-auto"
                classNamemainrow="row m-auto w-100 h-100"
                classNameimg="col p-0 h-100 mt-3 p-5"
                classNamecol1="col-lg-4 order-lg-1 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-ld-2 order-1 p-0 w-100 h-100 mb-0"
                classNamecol3="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 detailarea"
                imgratingstar={ratingstarhalf} altratingstar="Rating star"
                supply="Abailable, Hurry up"
                imgproduct={accessories2}
                altcamera="Sony Alpha ILCE-6100Y 24.2 MP Mirrorless Camera"
                buy="/Buy"
                offer1="Upto Rs.22,765 off."
                offer2="on Kotak Debit/Credit Cards, 10% off, up to" offer2Rs="₹7850."
                offer3="up to, 29%"
                offer4="EMI on select cards for orders above" offer4Rs="₹4700."
                offer5="up to 10% off," offer5Rs="₹7850."

            />
            <Secondadvertise
                brandName={<span style={{fontWeight: "Bold"}}>Sony WF-XB700<span style={{fontWeight: "400"}}> Truly Wireless Extra Bass Bluetooth Earbuds/Headphones, True Wireless Earbuds with Mic for Phone Calls, 18 Hours Battery Life, Quick Charge, BT Ver 5.0 (Black)</span></span>}
                visit="/Accessories3details"
                price="Rs. 57,990.00"
                maincontainer="container m-auto"
                classNamemainrow="row m-auto w-100 h-100"
                classNameimg="col p-0 h-100 mt-5"
                classNamecol1="col-lg-4 order-lg-1 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-ld-2 order-1 p-0 w-100 h-100 mb-0"
                classNamecol3="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 detailarea"
                imgratingstar={ratingstar4} altratingstar="Rating star"
                supply="Abailable, Hurry up"
                imgproduct={accessories3}
                altcamera="Sony Alpha ILCE 24MP Camera"
                buy="/Buy"
                offer1="Upto Rs.16,817 off."
                offer2="on Kotak Debit/Credit Cards, 10% off, up to" offer2Rs="₹5799."
                offer3="up to, 29%"
                offer4="EMI on select cards for orders above" offer4Rs="₹7000."
                offer5="up to 10% off," offer5Rs="₹5799."

            />
            <Secondadvertise
                brandName={<span style={{fontWeight: "Bold"}}>Mi Power Bank 3i<span style={{fontWeight: "400"}}> 10000mAh (Midnight Black) Dual Output and Input Port | 18W Fast Charging</span></span>}
                visit="/Accessories4details"
                price="Rs. 2,82,115.00"
                maincontainer="container m-auto"
                classNamemainrow="row m-auto w-100 h-100"
                classNameimg="col p-0 h-100"
                classNamecol1="col-lg-4 order-lg-1 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-ld-2 order-1 p-0 w-100 h-100 mb-0"
                classNamecol3="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 detailarea"
                imgratingstar={ratingstar4} altratingstar="Rating star"
                supply="Abailable, Hurry up"
                imgproduct={accessories4}
                altcamera="Sony ILCE-9 Full-Frame 24.2MP Mirrorless Camera"
                buy="/Buy"
                offer1="Upto Rs.81,813 off."
                offer2="on Kotak Debit/Credit Cards, 10% off, up to" offer2Rs="₹28,211."
                offer3="up to, 40%"
                offer4="EMI on select cards for orders above" offer4Rs="₹9740."
                offer5="up to 10% off," offer5Rs="₹28,211."

            />
                        
            <Categoriescomponent/>
            <Bottombar/>
        </React.Fragment>
    )
}

export default Accessories
