import React from 'react'
import Bottombar from '../Components/Bottombar'
import Navbar from '../Components/Navbar'
import Secondadvertise from './Secondadvertise'
import secondareaproduct4 from '../Advertisement/img/secondareaproduct4.jpg'
import ratingstar4 from '../Advertisement/img/ratingstar4.png'
import banner1 from '../Advertisement/img/sonyproduct4banner.jpg'
import banner2 from '../Advertisement/img/sonyproduct1banner2.jpg'

function Secondproduct4deatils() {
    return (
        <React.Fragment>
            <Navbar />
            <Secondadvertise
                brandName={<span style={{ fontWeight: "Bold" }}>Sony ILCE-9 Full-Frame 24.2MP Mirrorless Camera<span style={{ fontWeight: "400" }}> Body Only (Black)</span></span>}
                visit=""
                price="Rs. 2,82,115.00"
                classNamemainrow="row mt-0 mr-2 mb-2 ml-2"
                classNameimg="col pl-3"
                classNamecol1="col-lg-4 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-1 p-0 w-100 h-100 mb-0"
                classNamecol3="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 detailarea"
                imgratingstar={ratingstar4} altratingstar="Rating star"
                supply="Abailable, Hurry up"
                imgproduct={secondareaproduct4}
                altcamera="Sony ILCE-9 Full-Frame 24.2MP Mirrorless Camera"
                buy="/Buy"
                offer1="Upto Rs.81,813 off."
                offer2="on Kotak Debit/Credit Cards, 10% off, up to" offer2Rs="₹28,211."
                offer3="up to, 40%"
                offer4="EMI on select cards for orders above" offer4Rs="₹9740."
                offer5="up to 10% off," offer5Rs="₹28,211."

            />
            <div className="row m-2 p-0">
                <div className="row m-4 w-100 h-100">
                    <img src={banner1} alt="Sony ILCE-9 Full-Frame 24.2MP Mirrorless Camera banner" className="col p-0" />
                    <img src={banner2} alt="Sony ILCE-9 Full-Frame 24.2MP Mirrorless Camera banner" className="col p-0" />
                </div>
            </div>
            <Bottombar />
        </React.Fragment>
    )
}

export default Secondproduct4deatils
