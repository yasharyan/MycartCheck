import React from 'react'
import Bottombar from '../Components/Bottombar'
import Navbar from '../Components/Navbar'
import Secondadvertise from './Secondadvertise'
import secondareaproduct3 from '../Advertisement/img/secondareaproduct3.jpg'
import ratingstar4 from '../Advertisement/img/ratingstar4.png'
import banner1 from '../Advertisement/img/sonyproduct3banner.jpg'
import banner2 from '../Advertisement/img/sonyproduct1banner2.jpg'

function Secondproduct3deatils() {
    return (
        <React.Fragment>
            <Navbar />
            <Secondadvertise
                brandName={<span style={{ fontWeight: "Bold" }}>Sony Digital Vlog Camera<span style={{ fontWeight: "400" }}> ZV-1 Only (Compact, Video Eye AF, Flip Screen, in-Built Microphone, 4K Vlogging Camera and Content Creation) – Black</span></span>}
                visit="/Secondproduct3deatils"
                price="Rs. 57,990.00"
                classNamemainrow="row mt-0 mr-2 mb-2 ml-2"
                classNameimg="col p-0"
                classNamecol1="col-lg-4 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-1 p-0 w-100 h-100 mb-0"
                classNamecol3="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 detailarea"
                imgratingstar={ratingstar4} altratingstar="Rating star"
                supply="Abailable, Hurry up"
                imgproduct={secondareaproduct3}
                altcamera="Sony Alpha ILCE 24MP Camera"
                buy="/Buy"
                offer1="Upto Rs.16,817 off."
                offer2="on Kotak Debit/Credit Cards, 10% off, up to" offer2Rs="₹5799."
                offer3="up to, 29%"
                offer4="EMI on select cards for orders above" offer4Rs="₹7000."
                offer5="up to 10% off," offer5Rs="₹5799."

            />
            <div className="row m-2 p-0">
                <div className="row m-4 w-100 h-100">
                    <img src={banner1} alt="Sony Digital Vlog Camera banner" className="col p-0" />
                    <img src={banner2} alt="Sony Digital Vlog Camera banner" className="col p-0" />
                </div>
            </div>
            <Bottombar />
        </React.Fragment>
    )
}

export default Secondproduct3deatils
