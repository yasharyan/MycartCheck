import React from 'react'
import Bottombar from '../Components/Bottombar'
import Navbar from '../Components/Navbar'
import Secondadvertise from './Secondadvertise'
import ratingstarfull from '../Advertisement/img/ratingstarfull.png'
import fourthareaproduct4 from '../Advertisement/img/fourthareaproduct4.jpg'
// import banner1 from '../Advertisement/img/sonyproduct1banner.jpg'
// import banner2 from '../Advertisement/img/sonyproduct1banner2.jpg'

function Fourthproduct4details() {
    return (
        <React.Fragment>
            <Navbar />
            <Secondadvertise
                brandName={<span style={{ fontWeight: "Bold" }}>LEWEL Men's Regular Fit T-Shirt<span style={{ fontWeight: "400" }}></span></span>}
                visit="/Fourthproduct4details"
                price="Rs. 1600.00"
                sizetxt="Size : "
                size="S , M, L, XL, XXL"
                colortxt="Colour :"
                color={<span style={{ color: "black" }}>3In1 Orange,White & Blue</span>}
                classNamemainrow="row mt-0 mr-2 mb-2 ml-2"
                classNameimg="col-lg-8 p-4"
                classNamecol1="col-lg-4 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-1 p-0 w-100 h-100 mb-0"
                classNamecol3="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 detailarea"
                imgproduct={fourthareaproduct4}
                altcamera="Veirdo Cotton Jacket for Men"
                imgratingstar={ratingstarfull} altratingstar="Rating star"
                supply=
                {<span style={{ fontWeight: "400", color: "black" }}>Care Instructions: <span style={{ fontWeight: "bold" }}>Care Instructions: Gentle machine wash. Dry in shade.
                Fit Type: Regular Fit
                SIZE GUIDE: MEDIUM (M)(39)...</span><br/><br/><h1 style={{color: "green", fontWeight: "700", fontSize: "29px"}}>Available hurry up</h1></span>}
                buy="/Buy"
                offer1="No"
                offer2="on Kotak Debit/Credit Cards, 10% off, up to" offer2Rs="₹ 150."
                offer3="up to, 10%"
                offer4="EMI on select cards for orders above" offer4Rs="₹900."
                offer5="up to 10% off," offer5Rs="₹100."

            />
            {/* <div className="row m-4 w-100 h-100">
                <img src={banner1} alt="" className="col p-0 h-100" />
                <img src={banner2} alt="" className="col p-0 h-100" />
            </div> */}
            <Bottombar />
        </React.Fragment>
    )
}

export default Fourthproduct4details
