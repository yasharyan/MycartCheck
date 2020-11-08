import React from 'react'
import Bottombar from '../../Components/Bottombar'
import Navbar from '../../Components/Navbar'
import Secondadvertise from '../../Advertisement/Secondadvertise'
import ratingstarfull from '../../Advertisement/img/ratingstarfull.png'
import electronics1 from './img/electronics1.jpg'

function Electronics1details() {
    return (
        <React.Fragment>
            <Navbar />
            <Secondadvertise
                brandName={<span style={{fontWeight: "Bold"}}>LG 29 inch Ultrawide<span style={{fontWeight: "400"}}> Full HD IPS Gaming, Multitasking Monitor with 1ms Response Rate, 75Hz Refresh Rate - USB C, Display Port, HDMI, VGA - 10 W Inbuilt Speaker - 29UM69</span></span>}
                visit="/Electronics1details"
                price="Rs. 1,41,690.00"
                classNamemainrow="row mt-0 mr-2 mb-2 ml-2 pl-3 pb-3"
                classNameimg="col mt-2 mb-3 p-4"
                classNamecol1="col-lg-4 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-1 p-0 w-100 h-100 mb-0"
                classNamecol3="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 detailarea"
                imgratingstar={ratingstarfull} altratingstar="Rating star"
                supply="Abailable, Hurry up"
                imgproduct={electronics1}
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

export default Electronics1details
