import React from 'react'
import Bottombar from '../Components/Bottombar'
import Navbar from '../Components/Navbar'
import Secondadvertise from './Secondadvertise'
import ratingstarfull from '../Advertisement/img/ratingstarfull.png'
import thirdareaproduct2 from '../Advertisement/img/thirdareaproduct2.jpg'
// import banner1 from '../Advertisement/img/sonyproduct1banner.jpg'
// import banner2 from '../Advertisement/img/sonyproduct1banner2.jpg'

function Thirdproduct2details() {
    return (
        <React.Fragment>
            <Navbar/>
            <Secondadvertise
                brandName={<span style={{ fontWeight: "Bold" }}>Red Tape Men's<span style={{ fontWeight: "400" }}> Tan Leather Footwear-9 UK (43 EU) (RTE1833)</span></span>}
                visit="/Thirdproduct2details"
                price="Rs. 2,458.00"
                classNamemainrow="row mt-0 mr-2 mb-2 ml-2"
                classNameimg="col p-0"
                classNamecol1="col-lg-4 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-1 p-0 w-100 h-100 mb-0"
                classNamecol3="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 detailarea"
                imgratingstar={ratingstarfull} altratingstar="Rating star"
                supply="Abailable, Hurry up"
                imgproduct={thirdareaproduct2}
                altcamera="Men's Shoes"
                buy="/Buy"
                offer1="Upto Rs.10 off."
                offer2="on Kotak Debit/Credit Cards, 2% off, up to" offer2Rs="₹ 50."
                offer3="up to, 10%"
                offer4="EMI on select cards for orders above" offer4Rs="₹ 700."
                offer5="up to 2% off," offer5Rs="₹ 50."

            />
            {/* <div className="row m-4 w-100 h-100">
                <img src={banner1} alt="" className="col p-0 h-100" />
                <img src={banner2} alt="" className="col p-0 h-100" />
            </div> */}
            <Bottombar />
        </React.Fragment>
    )
}

export default Thirdproduct2details
