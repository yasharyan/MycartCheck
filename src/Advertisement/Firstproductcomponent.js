import React from 'react'
import Firstproduct1details from './Firstproduct1details'
import iphone12promaxratingstar from './img/iphone12promaxratingstar.png'
import iphone12pro from './img/iphone 12 pro.jpg'
import iphone12promaxbanner1 from './img/iphone 12 pro max banner1.jpg'
import iphone12promaxbanner2 from './img/iphone 12 pro max banner2.jpg'
import iphone12promaxbanner3 from './img/iphone 12 pro max banner3.jpg'
import iphone12promaxbanner4 from './img/iphone 12 pro max banner4.jpg'
import iphone12promaxbanner5 from './img/iphone 12 pro max banner5.jpg'
import iphone12promaxbanner6 from './img/iphone 12 pro max banner6.jpg'
import Navbar from '../Components/Navbar'

function Firstproductcomponent() {
    return (
        <React.Fragment>
            <Navbar/>
            <Firstproduct1details
                productImg={iphone12pro}
                productalt="iphone 12 pro max- 128GB"
                brandName="New Apple iPhone 12 Pro Max (128GB) - "
                brandColor={<span style={{ color: "#1BA4C3", fontWeight: "bold" }}>Pacific Blue</span>}
                price="Rs. 1,29,900"
                ratingstar={iphone12promaxratingstar} ratingAlt="iphone 12 pro max"
                display="6.7-inch Super Retina XDR display"
                os="A14 Bionic chip, the fastest chip ever in a smartphone"
                camera={<span>"Pro camera system with 12MP Ultra Wide, Wide and Telephoto cameras; 5x optical zoom range; Night mode, Deep Fusion, Smart HDR 3, Apple ProRAW, 4K Dolby Vision HDR recording<br />LiDAR Scanner for improved AR experiences, Night mode portraits<br />12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording"</span>} iprating="Industry-leading IP68 water resistance" wirelesscharging="Supports MagSafe accessories for easy attach and faster wireless charging"
                memory="128GB" color="Pacific Blue" supply="Abailable, Hurry up"
                offer1="Upto Rs.19,900 off."
                offer2="on Kotak Debit/Credit Cards, 10% off, up to" offer2Rs="₹1500."
                offer3="up to, 40%"
                offer4="EMI on select cards for orders above" offer4Rs="₹3000."
                offer5="up to 10% off," offer5Rs="₹1500."
                banner1={iphone12promaxbanner1}
                banner2={iphone12promaxbanner2}
                banner3={iphone12promaxbanner3}
                banner4={iphone12promaxbanner4}
                banner5={iphone12promaxbanner5}
                banner6={iphone12promaxbanner6}
                iphonebanneralt1="iphone 12 pro max 128GB"
                iphonebanneralt2="iphone 12 pro max 128GB"
                iphonebanneralt3="iphone 12 pro max 128GB"
                iphonebanneralt4="iphone 12 pro max 128GB"
                iphonebanneralt5="iphone 12 pro max 128GB"
                iphonebanneralt6="iphone 12 pro max 128GB"
                buy="/Buy"

            />
        </React.Fragment>
    )
}

export default Firstproductcomponent
