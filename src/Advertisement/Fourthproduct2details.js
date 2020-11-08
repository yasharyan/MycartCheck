import React from 'react'
import Bottombar from '../Components/Bottombar'
import Navbar from '../Components/Navbar'
import Secondadvertise from './Secondadvertise'
import ratingstarhalf from '../Advertisement/img/ratingstar4.5.png'
import fourthareaproduct2 from '../Advertisement/img/fourthareaproduct2.jpg'
// import banner1 from '../Advertisement/img/sonyproduct1banner.jpg'
// import banner2 from '../Advertisement/img/sonyproduct1banner2.jpg'

function Fourthproduct2details() {
    return (
        <React.Fragment>
            <Navbar />
            <Secondadvertise
                brandName={<span style={{ fontWeight: "Bold" }}>Color Block Men Hooded Neck White, Black T-Shirt<span style={{ fontWeight: "400" }}></span></span>}
                visit="/Fourthproduct2details"
                price="Rs. 989.00"
                sizetxt="Size : "
                size="S , M, L, XL, XXL"
                colortxt="Colour :"
                color={<span style={{color: "black"}}>Black</span>}
                classNamemainrow="row mt-0 mr-2 mb-2 ml-2"
                classNameimg="col-lg-8 p-4"
                classNamecol1="col-lg-4 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-1 p-0 w-100 h-100 mb-0"
                classNamecol3="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 pl-auto detailarea"
                imgratingstar={ratingstarhalf} altratingstar="Rating star"
                imgproduct={fourthareaproduct2}
                altcamera="Veirdo Cotton Jacket for Men"
                buy="/Buy"
                offer1="No."
                offer2="on Kotak Debit/Credit Cards, 10% off, up to" offer2Rs="₹ 100."
                offer3="up to, 10%"
                offer4="EMI on select cards for orders above" offer4Rs="₹800."
                offer5="up to 10% off," offer5Rs="₹ 100."

            />
            {/* <div className="row m-4 w-100 h-100">
                <img src={banner1} alt="" className="col p-0 h-100" />
                <img src={banner2} alt="" className="col p-0 h-100" />
            </div> */}
            <Bottombar />
        </React.Fragment>
    )
}

export default Fourthproduct2details
