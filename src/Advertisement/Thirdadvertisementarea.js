import React from 'react'
import Bottombar from '../Components/Bottombar'
import Categoriescomponent from '../Components/Categoriescomponent'
import Navbar from '../Components/Navbar'
import Secondadvertise from './Secondadvertise'
import ratingstarfull from '../Advertisement/img/ratingstarfull.png'
import thirdareaproduct1 from '../Advertisement/img/thirdareaproduct1.jpg'
import thirdareaproduct2 from '../Advertisement/img/thirdareaproduct2.jpg'
import thirdareaproduct3 from '../Advertisement/img/thirdareaproduct3.jpg'
import thirdareaproduct4 from '../Advertisement/img/thirdareaproduct4.jpg'

function Thirdadvertisementarea() {
    return (
        <React.Fragment>
            <Navbar />
            <Secondadvertise
                brand="Max"
                offer="Bumper offer"
                brandName={<span style={{ fontWeight: "Bold" }}>Black Bottom Men's <span style={{ fontWeight: "400" }}> Patent Ethnic Juttis/Nagra/Mojaris for Men and Boys</span></span>}
                visit="/Thirdproduct1details"
                price="Rs. 4,999.00"
                maincontainer="container m-auto"
                classNamemainrow="row m-auto w-100 h-100"
                classNameimg="col p-0 h-100"
                classNamecol1="col-lg-4 order-lg-1 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-ld-2 order-1 p-0 w-100 h-100 mb-0"
                classNamecol3="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 detailarea"
                imgratingstar={ratingstarfull} altratingstar="Rating star"
                supply="Abailable, Hurry up"
                imgproduct={thirdareaproduct1}
                altcamera="Men's Shoes"
                buy="/Buy"
                offer1="Upto Rs.10 off."
                offer2="on Kotak Debit/Credit Cards, 2% off, up to" offer2Rs="₹ 98."
                offer3="up to, 10%"
                offer4="EMI on select cards for orders above" offer4Rs="₹ 600."
                offer5="up to 2% off," offer5Rs="₹ 98."

            />
            <Secondadvertise
                brandName={<span style={{ fontWeight: "Bold" }}>Red Tape Men's<span style={{ fontWeight: "400" }}> Tan Leather Footwear-9 UK (43 EU) (RTE1833)</span></span>}
                visit="/Thirdproduct2details"
                price="Rs. 2,458.00"
                maincontainer="container m-auto"
                classNamemainrow="row m-auto w-100 h-100"
                classNameimg="col p-0 h-100 mt-3 mb-3"
                classNamecol1="col-lg-4 order-lg-1 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-ld-2 order-1 p-0 w-100 h-100 mb-0"
                classNamecol3="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 detailarea"
                imgratingstar={ratingstarfull} altratingstar="Rating star"
                supply="Abailable, Hurry up"
                imgproduct={thirdareaproduct2}
                altcamera="Men's Shoes"
                buy="/Buy"
                offer1="Upto Rs.10 off."
                offer2="on Kotak Debit/Credit Cards, 2% off, up to" offer2Rs="₹ 50."
                offer3="up to, 10%"
                offer4="EMI on select cards for orders above" offer4Rs="₹ 700."
                offer5="up to 2% off," offer5Rs="₹ 50."

            />
            <Secondadvertise
                brandName={<span style={{ fontWeight: "Bold" }}>FENTACIA Men Synthetic Suede Chelsea Boots <span style={{ fontWeight: "400" }}></span></span>}
                visit="/Thirdproduct3details"
                price="Rs. 4,999.00"
                maincontainer="container m-auto"
                classNamemainrow="row m-auto w-100 h-100"
                classNameimg="col p-0 h-100"
                classNamecol1="col-lg-4 order-lg-1 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-ld-2 order-1 p-0 w-100 h-100 mb-0"
                classNamecol3="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 detailarea"
                imgratingstar={ratingstarfull} altratingstar="Rating star"
                supply="Abailable, Hurry up"
                imgproduct={thirdareaproduct3}
                altcamera="Men's Shoes"
                buy="/Buy"
                offer1="Upto Rs.10 off."
                offer2="on Kotak Debit/Credit Cards, 2% off, up to" offer2Rs="₹ 98."
                offer3="up to, 10%"
                offer4="EMI on select cards for orders above" offer4Rs="₹ 100."
                offer5="up to 2% off," offer5Rs="₹ 98."

            />
            <Secondadvertise
                brandName={<span style={{ fontWeight: "Bold" }}>Men Sneakers For Men <span style={{ fontWeight: "400" }}></span></span>}
                visit="/Thirdproduct4details"
                price="Rs. 3,295.00"
                maincontainer="container m-auto"
                classNamemainrow="row m-auto w-100 h-100"
                classNameimg="col mt-5 mb-3 p-3"
                classNamecol1="col-lg-4 order-lg-1 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-ld-2 order-1 p-0 w-100 h-100 mb-0"
                classNamecol3="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 detailarea"
                imgratingstar={ratingstarfull} altratingstar="Rating star"
                supply="Abailable, Hurry up"
                imgproduct={thirdareaproduct4}
                altcamera="Men's Shoes"
                buy="/Buy"
                offer1="Upto Rs.10 off."
                offer2="on Kotak Debit/Credit Cards, 2% off, up to" offer2Rs="₹ 98."
                offer3="up to, 10%"
                offer4="EMI on select cards for orders above" offer4Rs="₹ 1000."
                offer5="up to 2% off," offer5Rs="₹ 98."

            />
            
            <Categoriescomponent />
            <Bottombar />
        </React.Fragment>
    )
}

export default Thirdadvertisementarea
