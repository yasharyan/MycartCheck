import React from 'react'
import Navbar from '../../Components/Navbar'
import Secondadvertise from '../../Advertisement/Secondadvertise'
import ratingstar4 from '../../Advertisement/img/ratingstar4.png'
import accessories3 from './img/accessories3.jpg'

function Accessories3details() {
    return (
        <React.Fragment>
            <Navbar/>
            <Secondadvertise
                brandName={<span style={{fontWeight: "Bold"}}>Sony WF-XB700<span style={{fontWeight: "400"}}> Truly Wireless Extra Bass Bluetooth Earbuds/Headphones, True Wireless Earbuds with Mic for Phone Calls, 18 Hours Battery Life, Quick Charge, BT Ver 5.0 (Black)</span></span>}
                visit="/Accessories3details"
                price="Rs. 57,990.00"
                classNamemainrow="row mt-0 mr-0 mb-2 ml-2 pl-lg-4 pb-4"
                classNameimg="col p-0 h-100 p-4"
                classNamecol1="col-lg-4 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-1 p-0 w-100 h-100 mb-0"
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
        </React.Fragment>
    )
}

export default Accessories3details
