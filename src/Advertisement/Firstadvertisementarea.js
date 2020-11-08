import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import Firstadvertise from './Firstadvertise'
import iphone12promaxratingstar from './img/iphone12promaxratingstar.png'
import iphone12ratingstar from './img/iphone12ratingstar.png'
import iphone12pro from './img/iphone 12 pro.jpg'
import iphone11 from './img/iphone 11.jpg'
import appleiphone12pro from './img/iphone 12.jpg'
import iphoneXr from './img/iphone XR.jpg'
import Categoriescomponent from '../Components/Categoriescomponent'
import Bottombar from '../Components/Bottombar'

class Firstadvertisementarea extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [
                {
                    brandName1: "New Apple iPhone 12 Pro Max (128GB) - ",
                    brandName2: "Latest Apple iPhone 11 (64GB) - ",
                    brandName3: "Latest Apple iPhone 12 (64GB) - ",
                    brandName4: "Apple iPhone XR (64GB) - "
                }
            ],
            search: ""
        }
    }

    searchinputhandle = (e) => {
        console.log(e.target.value)
        this.setState({
            search: e.target.value
        })
    }

    render() {
        let filterProducts1 = this.state.products.filter(product => {
            return product.brandName1.toLowerCase().includes(this.state.search.toLowerCase())
        })
        let filterProducts2 = this.state.products.filter(product => {
            return product.brandName2.toLowerCase().includes(this.state.search.toLowerCase())
        })
        let filterProducts3 = this.state.products.filter(product => {
            return product.brandName3.toLowerCase().includes(this.state.search.toLowerCase())
        })
        let filterProducts4 = this.state.products.filter(product => {
            return product.brandName4.toLowerCase().includes(this.state.search.toLowerCase())
        })

        return (
            <React.Fragment>
                <Navbar handle={this.searchinputhandle} />
                {filterProducts1.map((product, i) => {
                    return <Firstadvertise key={i}
                        visit="/Firstproductcomponent"
                        brand="iPhone"
                        offer="Bumper offer"
                        brandName={product.brandName1}
                        brandColor={<span style={{ color: "#1BA4C3", fontWeight: "bold" }}>Pacific Blue</span>}
                        price="Rs. 1,29,900"
                        img={iphone12promaxratingstar} alt="iphone 12 pro max"
                        display="6.7 Inches" os="IOS 14" memory="128GB" color="Pacific Blue" supply="Abailable, Hurry up"
                        imgphone={iphone12pro} altphone="iphone 12 pro"
                        offer1="Upto Rs.19,900 off."
                        offer2="on Kotak Debit/Credit Cards, 10% off, up to" offer2Rs="₹1500."
                        offer3="up to, 40%"
                        offer4="EMI on select cards for orders above" offer4Rs="₹3000."
                        offer5="up to 10% off," offer5Rs="₹1500."
                        buy="/Buy"
                    />
                })}


                {filterProducts2.map((product, k) => {
                    return <Firstadvertise key={k}
                        visit="/Firstproduct2details"
                        brandName={product.brandName2}
                        brandColor={<span style={{
                            color: "rgb(223, 223, 223)", fontWeight: "bold",
                            textShadow: "-1px 1px 0 #9AD1EE", fontSize: "28px"
                        }}>White</span>}
                        price="Rs. 49,900"
                        img={iphone12promaxratingstar} alt="iphone 11"
                        display="6.1 Inches" os="A13 Bionic chip." memory="64GB" color={<span style={{ color: "black" }}>White</span>}
                        supply="Abailable, Hurry up"
                        imgphone={iphone11} altphone="iphone 11"
                        offer1="Upto Rs.1,990 off."
                        offer2="on Fino Debit/Credit Cards, 9% off, up to" offer2Rs="₹4590."
                        offer3="up to, 40%"
                        offer4="EMI on select cards for orders above" offer4Rs="₹1200."
                        offer5="up to 3% off," offer5Rs="₹1200."
                        buy="/Buy"
                    />
                })}


                {filterProducts3.map((product, l) => {
                    return <Firstadvertise key={l}
                        visit="/Firstproduct3details"
                        brandName={product.brandName3}
                        brandColor={<span style={{ color: "#053559", fontWeight: "bold" }}>Blue</span>}
                        price="Rs. 79,900"
                        img={iphone12ratingstar} alt="iphone 12"
                        display="6.1 Inches" os="IOS 14" memory="64GB" color={<span style={{ color: "#053559" }}>Blue</span>}
                        supply="Abailable, Hurry up"
                        imgphone={appleiphone12pro} altphone="iphone 12"
                        offer1="Upto Rs.9,990 off."
                        offer2="on HDFC Debit/Credit Cards, 5% off, up to" offer2Rs="₹3995."
                        offer3="up to, 40%"
                        offer4="EMI on select cards for orders above" offer4Rs="₹1000."
                        offer5="up to 5% off," offer5Rs="₹3995."
                        buy="/Buy"
                    />
                })}


                {filterProducts4.map((product, m) => {
                    return <Firstadvertise key={m}
                    visit="/Firstproduct4details"
                    brandName={product.brandName4}
                    brandColor={<span style={{ color: "black", fontWeight: "bold" }}>Black</span>}
                    price="Rs. 47,900"
                    img={iphone12ratingstar} alt="iphone XR"
                    display="6.1 Inches" os="IOS 12" memory="64GB" color={<span style={{ color: "Black" }}>Black</span>}
                    supply={<span style={{ color: "red", fontWeight: "600", fontSize: "18px" }}>Currently unavailable</span>}
                    imgphone={iphoneXr} altphone="iphone XR"
                    offer1="Upto Rs.4,790 off."
                    offer2="on ICICI Debit/Credit Cards, 10% off, up to" offer2Rs="₹4790."
                    offer3="up to, 40%"
                    offer4="EMI on select cards for orders above" offer4Rs="₹1500."
                    offer5="up to 8% off," offer5Rs="₹38"
                    buy="/Buy" />
                })}

                <Categoriescomponent />
                <Bottombar />
            </React.Fragment>
        )
    }
}

export default Firstadvertisementarea
