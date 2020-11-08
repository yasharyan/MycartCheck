import React from 'react'
import Navbar from '../../Components/Navbar'
import Secondadvertise from '../../Advertisement/Secondadvertise'
import ratingstarhalf from '../../Advertisement/img/ratingstar4.5.png'
import accessories2 from './img/accessories2.jpg'

function Accessories2details() {
    return (
        <React.Fragment>
            <Navbar/>
            <Secondadvertise
                brandName={<span style={{fontWeight: "Bold"}}>HyperX Pulsefire Surge<span style={{fontWeight: "400"}}> HX-MC002B RGB Gaming Mouse (Black)</span></span>}
                visit="/Accessories2details"
                price="Rs. 78,500.00"
                classNamemainrow="row mt-0 mr-0 mb-2 ml-2 pl-lg-4 pb-4"
                classNameimg="col p-0 h-100 p-4"
                classNamecol1="col-lg-4 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-1 p-0 w-100 h-100 mb-0"
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
        </React.Fragment>
    )
}

export default Accessories2details
