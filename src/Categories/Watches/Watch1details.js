import React from 'react'
import Navbar from '../../Components/Navbar'
import Secondadvertise from '../../Advertisement/Secondadvertise'
import ratingstarfull from '../../Advertisement/img/ratingstarfull.png'
import watch1 from './img/watch1.jpg'
import Bottombar from './../../Components/Bottombar'

function Watch1details() {
    return (
        <React.Fragment>
            <Navbar/>
            <Secondadvertise
                brandName={<span style={{fontWeight: "Bold"}}>DELL XPS 9300<span style={{fontWeight: "400"}}> 13.3-inch UHD Laptop (10th Gen Core i7-1065G7/16GB/1TB SSD/Windows 10 Home Plus & MS Office/Intel HD Graphics), White</span></span>}
                visit="/Watch1details"
                price="Rs. 1,41,690.00"
                classNamemainrow="row mt-0 mr-0 mb-2 ml-2 pl-lg-4 pb-4"
                classNameimg="col "
                classNamecol1="col-lg-4 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-1 p-0 w-100 h-100 mb-0"
                classNamecol3="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 detailarea"
                imgratingstar={ratingstarfull} altratingstar="Rating star"
                supply="Abailable, Hurry up"
                imgproduct={watch1}
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

export default Watch1details
