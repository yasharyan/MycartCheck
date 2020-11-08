import React from 'react'
import Navbar from '../../Components/Navbar'
import Secondadvertise from '../../Advertisement/Secondadvertise'
import ratingstar4 from '../../Advertisement/img/ratingstar4.png'
import accessories4 from './img/accessories4.jpg'

function Accessories4details() {
    return (
        <React.Fragment>
            <Navbar/>
            <Secondadvertise
                brandName={<span style={{fontWeight: "Bold"}}>Mi Power Bank 3i<span style={{fontWeight: "400"}}> 10000mAh (Midnight Black) Dual Output and Input Port | 18W Fast Charging</span></span>}
                visit="/Accessories4details"
                price="Rs. 2,82,115.00"
                classNamemainrow="row mt-0 mr-0 mb-2 ml-2 pl-lg-4 pb-4"
                classNameimg="col p-0 h-100 p-4"
                classNamecol1="col-lg-4 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-1 p-0 w-100 h-100 mb-0"
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
        </React.Fragment>
    )
}

export default Accessories4details
