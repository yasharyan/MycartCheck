import React from 'react'
import Firstproduct1details from './Firstproduct1details'
import iphone12promaxratingstar from './img/iphone12promaxratingstar.png'
import iphone11 from './img/iphone 11.jpg'
import iphone11banner1 from './img/iphone 11 banner1.jpg'
import iphone11banner2 from './img/iphone 11 banner2.jpg'
import iphone11banner3 from './img/iphone 11 banner3.jpg'
import iphone11banner4 from './img/iphone 11 banner4.jpg'
import iphone11banner5 from './img/iphone 11 banner5.jpg'
import iphone11banner6 from './img/iphone 11 banner6.jpg'
import iphone11banner7 from './img/iphone 11 banner7.jpg'
import Navbar from '../Components/Navbar'

function Firstproduct2details(props) {
    return (
        <React.Fragment>
            <Navbar/>
            <Firstproduct1details
                productImg={iphone11}
                productalt="iphone 11- 64GB"
                brandName="Latest Apple iPhone 11 (64GB) - "
                brandColor={<span style={{color: "rgb(223, 223, 223)", fontWeight: "bold",
                textShadow: "-1px 1px 0 #9AD1EE", fontSize: "28px"}}>White</span>} 
                price="Rs. 49,900"
                ratingstar={iphone12promaxratingstar} ratingAlt="iphone 12 pro max"
                display="6.1-inch (15.5 cm) Liquid Retina HD LCD display"
                os="A13 Bionic chip with third-generation Neural Engine"
                camera={<span>"Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps<br />12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo</span>} iprating="Water and dust resistant (2 meters for up to 30 minutes, IP68)" wirelesscharging="Supports MagSafe accessories for easy attach and faster wireless charging"
                memory="64GB" color="White" supply="Abailable, Hurry up"
                offer1="Upto Rs.1,990 off." 
                offer2="on Fino Debit/Credit Cards, 9% off, up to" offer2Rs="₹4590." 
                offer3="up to, 40%" 
                offer4="EMI on select cards for orders above" offer4Rs="₹1200." 
                offer5="up to 3% off," offer5Rs="₹1200."
                banner1={iphone11banner1}
                banner2={iphone11banner2}
                banner3={iphone11banner3}
                banner4={iphone11banner4}
                banner5={iphone11banner5}
                banner6={iphone11banner6}
                banner7={iphone11banner7}
                iphonebanneralt1="iphone 11 64GB"
                iphonebanneralt2="iphone 11 64GB"
                iphonebanneralt3="iphone 11 64GB"
                iphonebanneralt4="iphone 11 64GB"
                iphonebanneralt5="iphone 11 64GB"
                iphonebanneralt6="iphone 11 64GB"
                iphonebanneralt7="iphone 11 64GB"
                buy="/Buy"

            />
        </React.Fragment>
    )
}

export default Firstproduct2details
