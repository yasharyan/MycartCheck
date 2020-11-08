import React from 'react'
import Navbar from '../../Components/Navbar'
import Secondadvertise from '../../Advertisement/Secondadvertise'
import ratingstarfull from '../../Advertisement/img/ratingstarfull.png'
import ratingstar4 from '../../Advertisement/img/ratingstar4.png'
import ratingstarhalf from '../../Advertisement/img/ratingstar4.5.png'
import instrument1 from './img/instrument1.jpg'
import instrument2 from './img/instrument2.jpg'
import instrument3 from './img/instrument3.jpg'
import instrument4 from './img/instrument4.jpg'
import Categoriescomponent from './../../Components/Categoriescomponent'
import Bottombar from './../../Components/Bottombar'

function Musics() {
    return (
        <React.Fragment>
            <Navbar/>
            <Secondadvertise
                brandName={<span style={{fontWeight: "Bold"}}>Juârez Acoustic Guitar<span style={{fontWeight: "400"}}> , 38 Inch Cutaway, 038C with Bag, Strings, Pick and Strap, Black</span></span>}
                visit="/Instrument1details"
                price="Rs. 1,41,690.00"
                maincontainer="container m-auto"
                classNamemainrow="row m-auto w-100 h-100"
                classNameimg="col-9 ml-5 pl-5 pt-4 pb-3"
                classNamecol1="col-lg-4 order-lg-1 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-ld-2 order-1 p-0 w-100 h-100 mb-0"
                classNamecol3="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 detailarea"
                imgratingstar={ratingstarfull} altratingstar="Rating star"
                supply="Abailable, Hurry up"
                imgproduct={instrument1}
                altcamera="Sony Alpha ILCE 24MP Camera"
                buy="/Buy"
                offer1="Upto Rs.41,090 off."
                offer2="on Kotak Debit/Credit Cards, 10% off, up to" offer2Rs="₹14,169."
                offer3="up to, 29%"
                offer4="EMI on select cards for orders above" offer4Rs="₹9000."
                offer5="up to 10% off," offer5Rs="₹14,169."
            
            />
            <Secondadvertise
                brandName={<span style={{fontWeight: "Bold"}}>Casio CT-S200<span style={{fontWeight: "400"}}> Casiotone 61-Key Portable Keyboard (White)</span></span>}
                visit="/Instrument2details"
                price="Rs. 1,41,690.00"
                maincontainer="container m-auto"
                classNamemainrow="row m-auto w-100 h-100"
                classNameimg="col pt-5"
                classNamecol1="col-lg-4 order-lg-1 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-ld-2 order-1 p-0 w-100 h-100 mb-0"
                classNamecol3="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 detailarea"
                imgratingstar={ratingstar4} altratingstar="Rating star"
                supply="Abailable, Hurry up"
                imgproduct={instrument2}
                altcamera="Sony Alpha ILCE 24MP Camera"
                buy="/Buy"
                offer1="Upto Rs.41,090 off."
                offer2="on Kotak Debit/Credit Cards, 10% off, up to" offer2Rs="₹14,169."
                offer3="up to, 29%"
                offer4="EMI on select cards for orders above" offer4Rs="₹9000."
                offer5="up to 10% off," offer5Rs="₹14,169."
            
            />
            <Secondadvertise
                brandName={<span style={{fontWeight: "Bold"}}>New Jaibharat Musicals<span style={{fontWeight: "400"}}> Saxophone Silver (With hard case with belt and globes)</span></span>}
                visit="/Instrument3details"
                price="Rs. 1,41,690.00"
                maincontainer="container m-auto"
                classNamemainrow="row m-auto w-100 h-100"
                classNameimg="col p-0"
                classNamecol1="col-lg-4 order-lg-1 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-ld-2 order-1 p-0 w-100 h-100 mb-0"
                classNamecol3="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 detailarea"
                imgratingstar={ratingstarhalf} altratingstar="Rating star"
                supply="Abailable, Hurry up"
                imgproduct={instrument3}
                altcamera="Sony Alpha ILCE 24MP Camera"
                buy="/Buy"
                offer1="Upto Rs.41,090 off."
                offer2="on Kotak Debit/Credit Cards, 10% off, up to" offer2Rs="₹14,169."
                offer3="up to, 29%"
                offer4="EMI on select cards for orders above" offer4Rs="₹9000."
                offer5="up to 10% off," offer5Rs="₹14,169."
            
            />
            <Secondadvertise
                brandName={<span style={{fontWeight: "Bold"}}>SG Musical Harmonium<span style={{fontWeight: "400"}}> - 3 1/4 Octave, Double Bellow, 39 Keys,7 Stopper, 2 Reeds (Bass- Male), With Cover</span></span>}
                visit="/Instrument4details"
                price="Rs. 1,41,690.00"
                maincontainer="container m-auto"
                classNamemainrow="row m-auto w-100 h-100"
                classNameimg="col p-5"
                classNamecol1="col-lg-4 order-lg-1 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100"
                classNamecol2="col-lg-4 order-ld-2 order-1 p-0 w-100 h-100 mb-0"
                classNamecol3="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 detailarea"
                imgratingstar={ratingstarfull} altratingstar="Rating star"
                supply="Abailable, Hurry up"
                imgproduct={instrument4}
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

export default Musics
