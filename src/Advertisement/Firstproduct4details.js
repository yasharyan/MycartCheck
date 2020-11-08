import React from 'react'
import Firstproduct1details from './Firstproduct1details'
import iphoneXr from './img/iphone XR.jpg'
import iphone12ratingstar from './img/iphone12ratingstar.png'
import iphoneXRbanner1 from './img/iphone XR banner1.jpg'
import iphoneXRbanner2 from './img/iphone XR banner2.jpg'
import iphoneXRbanner3 from './img/iphone XR banner3.jpg'
import iphoneXRbanner4 from './img/iphone XR banner4.jpg'
import Navbar from '../Components/Navbar'

function Firstproduct4details(props) {
    return (
        <React.Fragment>
            <Navbar/>
            <Firstproduct1details
                productImg={iphoneXr}
                productalt="Apple iPhone XR (64GB) - "
                brandName="Apple iPhone XR (64GB) - "
                brandColor={<span style={{color: "black", fontWeight: "bold"}}>Black</span>}
                price="Rs. 47,900"
                ratingstar={iphone12ratingstar} ratingAlt="iphone 12 pro max"
                display="6.1-inch (15.5 cm) Liquid Retina HD LCD display"
                os="A12 Bionic with second-generation Neural Engine"
                camera={<span>"Single 12MP Wide camera with Portrait mode, Portrait Lighting, Depth Control, Smart HDR, and 4K video up to 60fps<br />7MP TrueDepth front camera system with Portrait mode, Portrait Lighting, Depth Control, and 1080p video</span>} iprating="Water and dust resistant (1 meter for up to 30 minutes, IP67)
                " wirelesscharging="Fast-charge capable"
                memory="64GB" color={<span style={{color: "Black"}}>Black</span>}  
                supply={<span style={{color: "red", fontWeight:"600", fontSize: "18px"}}>Currently unavailable</span>} 
                imgphone={iphoneXr} altphone="iphone XR" 
                offer1="Upto Rs.4,790 off." 
                offer2="on ICICI Debit/Credit Cards, 10% off, up to" offer2Rs="₹4790." 
                offer3="up to, 40%" 
                offer4="EMI on select cards for orders above" offer4Rs="₹1500." 
                offer5="up to 8% off," offer5Rs="₹3832."
                banner1={iphoneXRbanner1}
                banner2={iphoneXRbanner2}
                banner3={iphoneXRbanner3}
                banner4={iphoneXRbanner4}
                iphonebanneralt1="iphone 12 64GB"
                iphonebanneralt2="iphone 12 64GB"
                iphonebanneralt3="iphone 12 64GB"
                iphonebanneralt4="iphone 12 64GB"
                buy="/Buy"

            />
        </React.Fragment>
    )
}

export default Firstproduct4details
