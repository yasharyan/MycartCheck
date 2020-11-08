import React from 'react'
import Bottombar from '../Components/Bottombar'
import Navbar from '../Components/Navbar'
import Secondadvertise from './Secondadvertise'
import ratingstarfull from '../Advertisement/img/ratingstarfull.png'
import secondareaproduct1 from '../Advertisement/img/secondareaproduct1.jpg'
import banner1 from '../Advertisement/img/sonyproduct1banner.jpg'
import banner2 from '../Advertisement/img/sonyproduct1banner2.jpg'

function Secondproduct1details(props) {
    return (
        <React.Fragment>
            <Navbar />
            <Secondadvertise
                brandName={<span style={{ fontWeight: "Bold" }}>Sony Alpha ILCE, 24.2MP Mirrorless Camera<span style={{ fontWeight: "400" }}> with 18-135 mm Zoom Lens (APS-C Sensor, Fastest Auto Focus, Real-time Eye AF, Real-time Tracking, 4K Vlogging Camera, Tiltable LCD)</span></span>}
                visit="/Secondproduct1details"
                price="Rs. 1,41,690.00"
                classNamemainrow="row mt-0 mr-2 mb-2 ml-2"
                classNameimg="col mt-5 mb-5 p-4"
                classNamecol1="col-lg-4 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-1 p-0 w-100 h-100 mb-0"
                classNamecol3="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 detailarea"
                imgratingstar={ratingstarfull} altratingstar="Rating star"
                supply="Abailable, Hurry up"
                imgproduct={secondareaproduct1}
                className="col-lg-4 order-ld-2 order-1 p-0 w-100 h-100 mb-0"
                altcamera="Sony Alpha ILCE 24MP Camera"
                buy="/Buy"
                offer1="Upto Rs.41,090 off."
                offer2="on Kotak Debit/Credit Cards, 10% off, up to" offer2Rs="₹14,169."
                offer3="up to, 29%"
                offer4="EMI on select cards for orders above" offer4Rs="₹9000."
                offer5="up to 10% off," offer5Rs="₹14,169."

            />
            <div className="row m-2 p-0">
                <div className="row m-4 w-100 h-100">
                    <img src={banner1} alt="Sony Alpha ILCE, 24.2MP Mirrorless Camera banner" className="col p-0" />
                    <img src={banner2} alt="Sony Alpha ILCE, 24.2MP Mirrorless Camera banner" className="col p-0" />
                </div>
            </div>
            <Bottombar />
        </React.Fragment>
    )
}

export default Secondproduct1details
