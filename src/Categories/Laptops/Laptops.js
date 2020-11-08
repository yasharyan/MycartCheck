import React from 'react'
import Navbar from '../../Components/Navbar'
import Secondadvertise from '../../Advertisement/Secondadvertise'
import ratingstarfull from '../../Advertisement/img/ratingstarfull.png'
import ratingstar4 from '../../Advertisement/img/ratingstar4.png'
import ratingstarhalf from '../../Advertisement/img/ratingstar4.5.png'
import laptop1 from './img/laptop1.jpg'
import laptop2 from './img/laptop2.jpg'
import laptop3 from './img/laptop3.jpg'
import laptop4 from './img/laptop4.jpg'
import Categoriescomponent from './../../Components/Categoriescomponent'
import Bottombar from './../../Components/Bottombar'

function Laptops() {
    return (
        <React.Fragment>
            <Navbar/>
            <Secondadvertise
                brandName={<span style={{fontWeight: "Bold"}}>DELL XPS 9300<span style={{fontWeight: "400"}}> 13.3-inch UHD Laptop (10th Gen Core i7-1065G7/16GB/1TB SSD/Windows 10 Home Plus & MS Office/Intel HD Graphics), White</span></span>}
                visit="/Laptop1details"
                price="Rs. 1,41,690.00"
                maincontainer="container m-auto"
                classNamemainrow="row m-auto w-100 h-100"
                classNameimg="col p-0"
                classNamecol1="col-lg-4 order-lg-1 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-ld-2 order-1 p-0 w-100 h-100 mb-0"
                classNamecol3="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 detailarea"
                imgratingstar={ratingstarfull} altratingstar="Rating star"
                supply="Abailable, Hurry up"
                imgproduct={laptop1}
                altcamera="Sony Alpha ILCE 24MP Camera"
                buy="/Buy"
                offer1="Upto Rs.41,090 off."
                offer2="on Kotak Debit/Credit Cards, 10% off, up to" offer2Rs="₹14,169."
                offer3="up to, 29%"
                offer4="EMI on select cards for orders above" offer4Rs="₹9000."
                offer5="up to 10% off," offer5Rs="₹14,169."
            
            />
            <Secondadvertise
                brandName={<span style={{fontWeight: "Bold"}}>ASUS VivoBook 15<span style={{fontWeight: "400"}}> Intel Core i5-1035G1 10th Gen 15.6-inch FHD Thin and Light Laptop (8GB RAM/1TB HDD + 256GB SSD/Windows 10/MS Office 2019/2GB NVIDIA MX330 Graphics/Blue/1.75 kg), X512JP-EJ232TS</span></span>}
                visit="/Laptop2details"
                price="Rs. 1,41,690.00"
                maincontainer="container m-auto"
                classNamemainrow="row m-auto w-100 h-100"
                classNameimg="col pb-5"
                classNamecol1="col-lg-4 order-lg-1 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-ld-2 order-1 p-0 w-100 h-100 mb-0"
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
            <Secondadvertise
                brandName={<span style={{fontWeight: "Bold"}}>HP Pavilion x360<span style={{fontWeight: "400"}}> Touchscreen 2-in-1 FHD 14-inch Laptop 14-inch Laptop (10th Gen Core i5-10210U/8GB/512GB SSD/Win 10/MS Office/Mineral Silver/1.58 kg), 14-dh1179tu</span></span>}
                visit="/Laptop3details"
                price="Rs. 1,41,690.00"
                maincontainer="container m-auto"
                classNamemainrow="row m-auto w-100 h-100"
                classNameimg="col p-0"
                classNamecol1="col-lg-4 order-lg-1 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-ld-2 order-1 p-0 w-100 h-100 mb-0"
                classNamecol3="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 detailarea"
                imgratingstar={ratingstarhalf} altratingstar="Rating star"
                supply="Abailable, Hurry up"
                imgproduct={laptop3}
                altcamera="Sony Alpha ILCE 24MP Camera"
                buy="/Buy"
                offer1="Upto Rs.41,090 off."
                offer2="on Kotak Debit/Credit Cards, 10% off, up to" offer2Rs="₹14,169."
                offer3="up to, 29%"
                offer4="EMI on select cards for orders above" offer4Rs="₹9000."
                offer5="up to 10% off," offer5Rs="₹14,169."
            
            />
            <Secondadvertise
                brandName={<span style={{fontWeight: "Bold"}}>HP Pavilion<span style={{fontWeight: "400"}}> Gaming 9th Gen Intel Core i5 Processor 15.6-inch FHD Gaming Laptop (8GB/1TB HDD/M.2 Slot/Windows 10/NVIDIA GTX 1650 4GB/Shadow Black), 15-dk0263TX</span></span>}
                visit="/Laptop4details"
                price="Rs. 1,41,690.00"
                maincontainer="container m-auto"
                classNamemainrow="row m-auto w-100 h-100"
                classNameimg="col mb-3 pb-5"
                classNamecol1="col-lg-4 order-lg-1 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-ld-2 order-1 p-0 w-100 h-100 mb-0"
                classNamecol3="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 detailarea"
                imgratingstar={ratingstarfull} altratingstar="Rating star"
                supply="Abailable, Hurry up"
                imgproduct={laptop4}
                altcamera="Sony Alpha ILCE 24MP Camera"
                buy="/Buy"
                offer1="Upto Rs.41,090 off."
                offer2="on Kotak Debit/Credit Cards, 10% off, up to" offer2Rs="₹14,169."
                offer3="up to, 29%"
                offer4="EMI on select cards for orders above" offer4Rs="₹9000."
                offer5="up to 10% off," offer5Rs="₹14,169."
            
            />

            <Categoriescomponent/>
            <Bottombar/>
        </React.Fragment>
    )
}

export default Laptops
