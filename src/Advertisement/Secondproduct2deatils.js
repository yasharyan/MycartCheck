import React from 'react'
import Bottombar from '../Components/Bottombar'
import Navbar from '../Components/Navbar'
import Secondadvertise from './Secondadvertise'
import secondareaproduct2 from '../Advertisement/img/secondareaproduct2.jpg'
import ratingstarhalf from '../Advertisement/img/ratingstar4.5.png'
import banner1 from '../Advertisement/img/sonyproduct2banner.jpg'
import banner2 from '../Advertisement/img/sonyproduct1banner2.jpg'

function Secondproduct2deatils() {
    return (
        <React.Fragment>
            <Navbar />
            <Secondadvertise
                brandName={<span style={{ fontWeight: "Bold" }}>Sony Alpha ILCE-6100Y 24.2 MP Mirrorless Camera<span style={{ fontWeight: "400" }}> with 16-50 mm and 55-210 mm Zoom Lenses (APS-C Sensor, Fast Auto Focus, Real-time Eye AF, Real-time Tracking, Vlogging & Tiltable Screen)</span></span>}
                visit="/Secondproduct2details"
                price="Rs. 78,500.00"
                classNamemainrow="row mt-0 mr-2 mb-2 ml-2"
                classNameimg="col mt-3 p-5"
                classNamecol1="col-lg-4 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-1 p-0 w-100 h-100 mb-0"
                classNamecol3="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 detailarea"
                imgratingstar={ratingstarhalf} altratingstar="Rating star"
                supply="Abailable, Hurry up"
                imgproduct={secondareaproduct2}
                altcamera="Sony Alpha ILCE-6100Y 24.2 MP Mirrorless Camera"
                buy="/Buy"
                offer1="Upto Rs.22,765 off."
                offer2="on Kotak Debit/Credit Cards, 10% off, up to" offer2Rs="₹7850."
                offer3="up to, 29%"
                offer4="EMI on select cards for orders above" offer4Rs="₹4700."
                offer5="up to 10% off," offer5Rs="₹7850."

            />
            <div className="row m-2 p-0">
                <div className="row m-4 w-100 h-100">
                    <img src={banner1} alt="Sony Alpha ILCE-6100Y 24.2 MP Mirrorless Camera banner" className="col p-0" />
                    <img src={banner2} alt="Sony Alpha ILCE-6100Y 24.2 MP Mirrorless Camera banner" className="col p-0" />
                </div>
            </div>
            <Bottombar />

        </React.Fragment>
    )
}

export default Secondproduct2deatils
