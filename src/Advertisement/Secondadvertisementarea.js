import React from 'react'
import Bottombar from '../Components/Bottombar'
import Categoriescomponent from '../Components/Categoriescomponent'
import Navbar from '../Components/Navbar'
import Secondadvertise from './Secondadvertise'
import secondareaproduct1 from '../Advertisement/img/secondareaproduct1.jpg'
import secondareaproduct2 from '../Advertisement/img/secondareaproduct2.jpg'
import secondareaproduct3 from '../Advertisement/img/secondareaproduct3.jpg'
import secondareaproduct4 from '../Advertisement/img/secondareaproduct4.jpg'
import ratingstarfull from '../Advertisement/img/ratingstarfull.png'
import ratingstar4 from '../Advertisement/img/ratingstar4.png'
import ratingstarhalf from '../Advertisement/img/ratingstar4.5.png'

function Secondadvertisementarea() {
    return (
        <React.Fragment>
            <Navbar/>
            <Secondadvertise
                brand="SONY"
                offer="Bumper offer"
                brandName={<span style={{fontWeight: "Bold"}}>Sony Alpha ILCE, 24.2MP Mirrorless Camera<span style={{fontWeight: "400"}}> with 18-135 mm Zoom Lens (APS-C Sensor, Fastest Auto Focus, Real-time Eye AF, Real-time Tracking, 4K Vlogging Camera, Tiltable LCD)</span></span>}
                visit="/Secondproduct1details"
                price="Rs. 1,41,690.00"
                maincontainer="container m-auto"
                classNamemainrow="row m-auto w-100 h-100"
                classNameimg="col mt-5 mb-5 pl-4 pr-4 pt-5 pb-5"
                classNamecol1="col-lg-4 order-lg-1 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-ld-2 order-1 p-0 w-100 h-100 mb-0"
                classNamecol3="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 detailarea"
                imgratingstar={ratingstarfull} altratingstar="Rating star"
                supply="Abailable, Hurry up"
                imgproduct={secondareaproduct1}
                altcamera="Sony Alpha ILCE 24MP Camera"
                buy="/Buy"
                offer1="Upto Rs.41,090 off."
                offer2="on Kotak Debit/Credit Cards, 10% off, up to" offer2Rs="₹14,169."
                offer3="up to, 29%"
                offer4="EMI on select cards for orders above" offer4Rs="₹9000."
                offer5="up to 10% off," offer5Rs="₹14,169."

            />
            <Secondadvertise
                brandName={<span style={{fontWeight: "Bold"}}>Sony Alpha ILCE-6100Y 24.2 MP Mirrorless Camera<span style={{fontWeight: "400"}}> with 16-50 mm and 55-210 mm Zoom Lenses (APS-C Sensor, Fast Auto Focus, Real-time Eye AF, Real-time Tracking, Vlogging & Tiltable Screen)</span></span>}
                visit="Secondproduct2details"
                price="Rs. 78,500.00"
                maincontainer="container m-auto"
                classNamemainrow="row m-auto w-100 h-100"
                classNameimg="col mb-4 mt-5 p-5"
                classNamecol1="col-lg-4 order-lg-1 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-ld-2 order-1 p-0 w-100 h-100 mb-0"
                classNamecol3="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 detailarea"
                imgratingstar={ratingstarhalf} altratingstar="Rating star"
                supply="Abailable, Hurry up"
                imgproduct={secondareaproduct2}
                altcamera="Sony Alpha ILCE-6100Y 24.2 MP Mirrorless Camera"
                buy="/Buy"
                offer1="Upto Rs.22,765 off."
                offer2="on Kotak Debit/Credit Cards, 10% off, up to" offer2Rs="₹7850."
                offer3="up to, 29%"
                offer4="EMI on select cards for orders above" offer4Rs="₹4700."
                offer5="up to 10% off," offer5Rs="₹7850."

            />
            <Secondadvertise
                brandName={<span style={{fontWeight: "Bold"}}>Sony Digital Vlog Camera<span style={{fontWeight: "400"}}> ZV-1 Only (Compact, Video Eye AF, Flip Screen, in-Built Microphone, 4K Vlogging Camera and Content Creation) – Black</span></span>}
                visit="/Secondproduct3deatils"
                price="Rs. 57,990.00"
                maincontainer="container m-auto"
                classNamemainrow="row m-auto w-100 h-100"
                classNameimg="col pr-0 pt-5 pb-5 pl-0"
                classNamecol1="col-lg-4 order-lg-1 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-ld-2 order-1 p-0 w-100 h-100 mb-0"
                classNamecol3="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 detailarea"
                imgratingstar={ratingstar4} altratingstar="Rating star"
                supply="Abailable, Hurry up"
                imgproduct={secondareaproduct3}
                altcamera="Sony Alpha ILCE 24MP Camera"
                buy="/Buy"
                offer1="Upto Rs.16,817 off."
                offer2="on Kotak Debit/Credit Cards, 10% off, up to" offer2Rs="₹5799."
                offer3="up to, 29%"
                offer4="EMI on select cards for orders above" offer4Rs="₹7000."
                offer5="up to 10% off," offer5Rs="₹5799."

            />
            <Secondadvertise
                brandName={<span style={{fontWeight: "Bold"}}>Sony ILCE-9 Full-Frame 24.2MP Mirrorless Camera<span style={{fontWeight: "400"}}> Body Only (Black)</span></span>}
                visit="/Secondproduct4deatils"
                price="Rs. 2,82,115.00"
                maincontainer="container m-auto"
                classNamemainrow="row m-auto w-100 h-100"
                classNameimg="col pl-0 pr-0 pt-4"
                classNamecol1="col-lg-4 order-lg-1 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-ld-2 order-1 p-0 w-100 h-100 mb-0"
                classNamecol3="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 detailarea"
                imgratingstar={ratingstar4} altratingstar="Rating star"
                supply="Abailable, Hurry up"
                imgproduct={secondareaproduct4}
                altcamera="Sony ILCE-9 Full-Frame 24.2MP Mirrorless Camera"
                buy="/Buy"
                offer1="Upto Rs.81,813 off."
                offer2="on Kotak Debit/Credit Cards, 10% off, up to" offer2Rs="₹28,211."
                offer3="up to, 40%"
                offer4="EMI on select cards for orders above" offer4Rs="₹9740."
                offer5="up to 10% off," offer5Rs="₹28,211."

            />
                        
            <Categoriescomponent/>
            <Bottombar/>
        </React.Fragment>
    )
}

export default Secondadvertisementarea
