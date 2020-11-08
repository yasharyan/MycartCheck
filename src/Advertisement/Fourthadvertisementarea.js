import React from 'react'
import Bottombar from '../Components/Bottombar'
import Categoriescomponent from '../Components/Categoriescomponent'
import Navbar from '../Components/Navbar'
import Secondadvertise from './Secondadvertise'
import fourthareaproduct1 from '../Advertisement/img/fourthareaproduct1.jpg'
import fourthareaproduct2 from '../Advertisement/img/fourthareaproduct2.jpg'
import fourthareaproduct3 from '../Advertisement/img/fourthareaproduct3.jpg'
import fourthareaproduct4 from '../Advertisement/img/fourthareaproduct4.jpg'
import ratingstarfull from '../Advertisement/img/ratingstarfull.png'
import ratingstar4 from '../Advertisement/img/ratingstar4.png'
import ratingstarhalf from '../Advertisement/img/ratingstar4.5.png'

function Fourthadvertisementarea() {
    return (
        <React.Fragment>
            <Navbar />
            <Secondadvertise
                brand="ZARAMEN'S"
                offer="Bumper offer"
                brandName={<span style={{ fontWeight: "Bold" }}>Veirdo Cotton Jacket for Men<span style={{ fontWeight: "400" }}></span></span>}
                visit="/Fourthproduct1details"
                price="Rs. 699.00"
                sizetxt="Size : "
                size="S , M, L, XL, XXL"
                colortxt="Colour :"
                color={<span style={{color: "black"}}>Black</span>}
                maincontainer="container m-auto"
                classNamemainrow="row m-auto w-100 h-100"
                classNameimg="col p-0 p-4"
                classNamecol1="col-lg-4 order-lg-1 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-ld-2 order-1 p-0 w-100 h-100 mb-0"
                classNamecol3="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 detailarea"
                supply=
                {<span style={{ fontWeight: "400", color: "black" }}>Care Instructions: <span style={{ fontWeight: "bold" }}>Hand Wash
                Fit Type: Regular Fit
                Sleeve type: Full sleeve, Neck type: Round neck...</span></span>}
                imgproduct={fourthareaproduct1}
                altcamera="Veirdo Cotton Jacket for Men"
                imgratingstar={ratingstarfull} altratingstar="Rating star"
                buy="/Buy"
                offer1="No"
                offer2="on Kotak Debit/Credit Cards, 10% off, up to" offer2Rs="₹ 69."
                offer3="up to, 10%"
                offer4="EMI on select cards for orders above" offer4Rs="₹700."
                offer5="up to 10% off," offer5Rs="₹ 69."
                />
            <Secondadvertise
                brandName={<span style={{ fontWeight: "Bold" }}>Color Block Men Hooded Neck White, Black T-Shirt<span style={{ fontWeight: "400" }}></span></span>}
                visit="/Fourthproduct2details"
                price="Rs. 989.00"
                sizetxt="Size : "
                size="S , M, L, XL, XXL"
                colortxt="Colour :"
                color={<span style={{color: "black"}}>Black</span>}
                maincontainer="container m-auto"
                classNamemainrow="row m-auto w-100 h-25"
                classNameimg="col p-0 p-4"
                classNamecol1="col-lg-4 order-lg-1 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-ld-2 order-1 p-0 w-100 h-100 mb-0"
                classNamecol3="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 detailarea"
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
            <Secondadvertise
                brandName={<span style={{ fontWeight: "Bold" }}>Color Block Men Round Neck White, Black T-Shirt<span style={{ fontWeight: "400" }}></span></span>}
                visit="/Fourthproduct3details"
                price="Rs. 1299.00"
                sizetxt="Size : "
                size="S , M, L, XL, XXL"
                colortxt="Colour :"
                color={<span style={{color: "black"}}>Black</span>}
                maincontainer="container m-auto"
                classNamemainrow="row m-auto w-100 h-100"
                classNameimg="col p-0 p-4"
                classNamecol1="col-lg-4 order-lg-1 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-ld-2 order-1 p-0 w-100 h-100 mb-0"
                classNamecol3="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 detailarea"
                imgratingstar={ratingstar4} altratingstar="Rating star"
                imgproduct={fourthareaproduct3}
                altcamera="Veirdo Cotton Jacket for Men"
                buy="/Buy"
                offer1="No"
                offer2="on Kotak Debit/Credit Cards, 10% off, up to" offer2Rs="₹ 120."
                offer3="up to, 10%"
                offer4="EMI on select cards for orders above" offer4Rs="₹1000."
                offer5="up to 10% off," offer5Rs="₹ 100."
                />
            <Secondadvertise
                brandName={<span style={{ fontWeight: "Bold" }}>LEWEL Men's Regular Fit T-Shirt<span style={{ fontWeight: "400" }}></span></span>}
                visit="/Fourthproduct4details"
                price="Rs. 1600.00"
                sizetxt="Size : "
                size="S , M, L, XL, XXL"
                colortxt="Colour :"
                color={<span style={{color: "black"}}>3In1 Orange,White & Blue</span>}
                maincontainer="container m-auto"
                classNamemainrow="row m-auto w-100 h-100"
                classNameimg="col p-4"
                classNamecol1="col-lg-4 order-lg-1 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-ld-2 order-1 p-0 w-100 h-100 mb-0"
                classNamecol3="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 detailarea"
                supply=
                {<span style={{ fontWeight: "400", color: "black" }}>Care Instructions: <span style={{ fontWeight: "bold" }}>Care Instructions: Gentle machine wash. Dry in shade.
                Fit Type: Regular Fit
                SIZE GUIDE: MEDIUM (M)(39)...</span></span>}
                imgproduct={fourthareaproduct4}
                altcamera="Veirdo Cotton Jacket for Men"
                imgratingstar={ratingstarfull} altratingstar="Rating star"
                buy="/Buy"
                offer1="No"
                offer2="on Kotak Debit/Credit Cards, 10% off, up to" offer2Rs="₹ 150."
                offer3="up to, 10%"
                offer4="EMI on select cards for orders above" offer4Rs="₹900."
                offer5="up to 10% off," offer5Rs="₹100."
                />

            <Categoriescomponent />
            <Bottombar />
        </React.Fragment>
    )
}

export default Fourthadvertisementarea
