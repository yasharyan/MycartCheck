import React from 'react'
import Bottombar from '../../Components/Bottombar'
import Navbar from '../../Components/Navbar'
import Secondadvertise from '../../Advertisement/Secondadvertise'
import ratingstarfull from '../../Advertisement/img/ratingstarfull.png'
import womens1 from './img/womens1.jpg'

function Womens1details() {
    return (
        <React.Fragment>
            <Navbar />
            <Secondadvertise
                brandName={<span style={{ fontWeight: "Bold" }}>Reeah Women's<span style={{ fontWeight: "400" }}> Printed A-line Crepe Kurta</span></span>}
                visit="/Womens1details"
                price="Rs. 1,41,690.00"
                classNamemainrow="row mt-0 mr-2 mb-2 ml-2 pl-3 pb-3"
                classNameimg="col-lg-8 pl-lg-5 ml-lg-5 pt-2"
                classNamecol1="col-lg-4 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-1 p-0 mb-0"
                classNamecol3="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 detailarea"
                imgratingstar={ratingstarfull} altratingstar="Rating star"
                supply="Abailable, Hurry up"
                imgproduct={womens1}
                altcamera="Sony Alpha ILCE 24MP Camera"
                buy="/Buy"
                offer1="Upto Rs.41,090 off."
                offer2="on Kotak Debit/Credit Cards, 10% off, up to" offer2Rs="₹14,169."
                offer3="up to, 29%"
                offer4="EMI on select cards for orders above" offer4Rs="₹9000."
                offer5="up to 10% off," offer5Rs="₹14,169."

            />
            <Bottombar />
        </React.Fragment>
    )
}

export default Womens1details