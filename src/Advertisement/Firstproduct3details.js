import React from 'react'
import Firstproduct1details from './Firstproduct1details'
import iphone12 from './img/iphone 12.jpg'
import iphone12ratingstar from './img/iphone12ratingstar.png'
import iphone12banner1 from './img/iphone 12 banner1.jpg'
import iphone12banner2 from './img/iphone 12 banner2.jpg'
import iphone12banner3 from './img/iphone 12 banner3.jpg'
import iphone12banner4 from './img/iphone 12 banner4.jpg'
import iphone12banner5 from './img/iphone 12 banner5.jpg'
import Navbar from '../Components/Navbar'

function Firstproduct3details(props) {
    return (
        <React.Fragment>
            <Navbar/>
            <Firstproduct1details
                productImg={iphone12}
                productalt="iphone 12- 64GB"
                brandName="Latest Apple iPhone 12 (64GB) - "
                brandColor={<span style={{color: "#053559", fontWeight: "bold"}}>Blue</span>}
                price="Rs. 79,900"
                ratingstar={iphone12ratingstar} ratingAlt="iphone 12 pro max"
                display="6.1-inch Super Retina XDR display"
                os="A14 Bionic chip, the fastest chip ever in a smartphone"
                camera={<span>"Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording<br />12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording</span>} iprating="Industry-leading IP68 water resistance
                " wirelesscharging="Supports MagSafe accessories for easy attach and faster wireless charging"
                memory="64GB" color={<span style={{color: "#053559"}}>Blue</span>} supply="Abailable, Hurry up"
                offer1="Upto Rs.9,990 off." 
                offer2="on HDFC Debit/Credit Cards, 5% off, up to" offer2Rs="₹3995." 
                offer3="up to, 40%" 
                offer4="EMI on select cards for orders above" offer4Rs="₹1000." 
                offer5="up to 5% off," offer5Rs="₹3995."
                banner1={iphone12banner1}
                banner2={iphone12banner2}
                banner3={iphone12banner3}
                banner4={iphone12banner4}
                banner5={iphone12banner5}
                iphonebanneralt1="iphone 12 64GB"
                iphonebanneralt2="iphone 12 64GB"
                iphonebanneralt3="iphone 12 64GB"
                iphonebanneralt4="iphone 12 64GB"
                iphonebanneralt5="iphone 12 64GB"
                buy="/Buy"

            />
        </React.Fragment>
    )
}

export default Firstproduct3details
