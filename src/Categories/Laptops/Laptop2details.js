import React from 'react'
import Navbar from '../../Components/Navbar'
import Secondadvertise from '../../Advertisement/Secondadvertise'
import ratingstar4 from '../../Advertisement/img/ratingstar4.png'
import laptop2 from './img/laptop2.jpg'
import Bottombar from './../../Components/Bottombar'

function Laptop2details() {
    return (
        <React.Fragment>
            <Navbar/>
            <Secondadvertise
                brandName={<span style={{fontWeight: "Bold"}}>ASUS VivoBook 15<span style={{fontWeight: "400"}}> Intel Core i5-1035G1 10th Gen 15.6-inch FHD Thin and Light Laptop (8GB RAM/1TB HDD + 256GB SSD/Windows 10/MS Office 2019/2GB NVIDIA MX330 Graphics/Blue/1.75 kg), X512JP-EJ232TS</span></span>}
                visit="/Laptop2details"
                price="Rs. 1,41,690.00"
                classNamemainrow="row mt-0 mr-0 mb-2 ml-2 pl-lg-4 pb-4"
                classNameimg="col pl-4 pr-4 pt-0"
                classNamecol1="col-lg-4 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-1 p-0 w-100 h-100 mb-0"
                classNamecol3="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 detailarea"
                imgratingstar={ratingstar4} altratingstar="Rating star"
                supply="Abailable, Hurry up"
                imgproduct={laptop2}
                altcamera="Sony Alpha ILCE 24MP Camera"
                buy="/Buy"
                offer1="Upto Rs.41,090 off."
                offer2="on Kotak Debit/Credit Cards, 10% off, up to" offer2Rs="₹14,169."
                offer3="up to, 29%"
                offer4="EMI on select cards for orders above" offer4Rs="₹9000."
                offer5="up to 10% off," offer5Rs="₹14,169."
            
            />
            <Bottombar/>
        </React.Fragment>
    )
}

export default Laptop2details
