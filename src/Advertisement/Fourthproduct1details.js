import React from 'react'
import Bottombar from '../Components/Bottombar'
import Navbar from '../Components/Navbar'
import Secondadvertise from './Secondadvertise'
import ratingstarfull from '../Advertisement/img/ratingstarfull.png'
import fourthareaproduct1 from '../Advertisement/img/fourthareaproduct1.jpg'
// import banner1 from '../Advertisement/img/sonyproduct1banner.jpg'
// import banner2 from '../Advertisement/img/sonyproduct1banner2.jpg'

function Fourthproduct1details(props) {
    return (
        <React.Fragment>
            <Navbar />
            <Secondadvertise
                brandName={<span style={{ fontWeight: "Bold" }}>Veirdo Cotton Jacket for Men<span style={{ fontWeight: "400" }}></span></span>}
                visit=""
                price="Rs. 699.00"
                sizetxt="Size : "
                size="S , M, L, XL, XXL"
                colortxt="Colour :"
                color={<span style={{color: "black"}}>Black</span>}
                classNamemainrow="row mt-0 mr-2 mb-2 ml-2"
                classNameimg="col p-lg-4"
                classNamecol1="col-lg-4 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-1 p-0 w-100 h-100 mb-0"
                classNamecol3="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 detailarea"
                imgratingstar={ratingstarfull} altratingstar="Rating star"
                supply="Abailable, Hurry up"
                imgproduct={fourthareaproduct1}
                altcamera="Veirdo Cotton Jacket for Men"
                buy="/Buy"
                offer1="No"
                offer2="on Kotak Debit/Credit Cards, 10% off, up to" offer2Rs="₹ 69."
                offer3="up to, 10%"
                offer4="EMI on select cards for orders above" Rs="₹700."
                offer5="up to 10% off," offer5Rs="₹ 69."

            />
            {/* <div className="row m-4 w-100 h-100">
                <img src={banner1} alt="" className="col p-0 h-100" />
                <img src={banner2} alt="" className="col p-0 h-100" />
            </div> */}
            <Bottombar />
        </React.Fragment>
    )
}

export default Fourthproduct1details
