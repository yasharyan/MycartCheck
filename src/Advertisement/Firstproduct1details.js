import React from 'react'
import Bottombar from '../Components/Bottombar'
import {NavLink} from 'react-router-dom'

function Firstproduct1details(props) {
    return (
        <React.Fragment>

            <div className="row mt-5 mr-2 mb-2 ml-2">
                <div className="row m-auto pt-0 pr-0 pl-lg-3 pb-5 w-100 h-100" style={{ border: "3px solid #1BA4C3", borderRadius: "8px" }}>

                    <div className="col-lg-4 order-1 p-0 w-100 h-100 mb-0">
                        <ul className="mb-0">
                            <li className="col p-0 mb-1">
                                <img src={props.productImg} className="col p-0 h-100" alt={props.productalt} />
                            </li>
                            <div className="row row-cols-2 m-auto p-1">
                                <li className="col-sm-6 col-12 p-2 m-auto" style={{ backgroundColor: "#E81E5A", fontWeight: "bold", fontSize: "18px", color: "white", textAlign: "center", border: "1px solid #E81E5A", borderRadius: "8px" }}>
                                    <span className="col" style={{ textAlign: "center" }}>Add to Cart</span>
                                </li>
                                <li className="col-sm-6 col-12 p-2 m-auto" style={{ border: "1px solid #00CAAF", borderRadius: "8px", backgroundColor: "#00CAAF", fontWeight: "bold", fontSize: "18px", color: "white", textAlign: "center" }}>
                                    <NavLink exact to={props.buy}>
                                        <span className="col pl-4 pr-4" style={{ textAlign: "center", color: "white" }}>Buy Now</span>
                                    </NavLink>
                                </li>
                            </div>
                        </ul>
                    </div>

                    <div className="col-lg-4 order-2 m-0 pl-0 pr-0 pb-1 h-100 w-100">
                        <ul className="col m-0 p-0">
                            <li className="col-12 mt-3">
                                <h4>{props.brandName}<span style={{ color: "#1BA4C3" }}>{props.brandColor}</span></h4>
                            </li>
                            <li className="col-12 mb-3 mt-2">
                                <span style={{ color: "green", fontWeight: "bold", fontSize: "18px" }}>Price. </span>
                                <span style={{ fontWeight: "bold", fontSize: "20px", borderBottom: "2px solid #1BA4C3" }}>{props.price}</span>
                                <span className="col-4">
                                    <img src={props.ratingstar} alt={props.ratingAlt} />
                                </span>
                            </li>

                            <li className="col-12">
                                <span className="row row-cols-2">
                                    <span className="col-6 mt-1 mb-1 pt-1 pb-1" style={{ fontWeight: "bold" }}>Display Size : </span>
                                    <span className="col-6 mt-1 mb-1 pt-1 pb-1" style={{ color: "#1BA4C3", fontWeight: "700" }}>{props.display}</span>
                                </span>
                                <span className="row row-cols-2">
                                    <span className="col-6 mt-1 mb-1 pt-1 pb-1" style={{ fontWeight: "bold" }}>Operating System:</span>
                                    <span className="col-6 mt-1 mb-1 pt-1 pb-1" style={{ color: "#1BA4C3", fontWeight: "700" }}>{props.os}</span>
                                </span>
                                <span className="row row-cols-2">
                                    <span className="col-6 mt-1 mb-1 pt-1 pb-1" style={{ fontWeight: "bold" }}>Camera:</span>
                                    <span className="col-6 mt-1 mb-1 pt-1 pb-1" style={{ color: "#1BA4C3", fontWeight: "700" }}>{props.camera}</span>
                                </span>
                                <span className="row row-cols-2">
                                    <span className="col-6 mt-1 mb-1 pt-1 pb-1" style={{ fontWeight: "bold" }}>IP Rating :</span>
                                    <span className="col-6 mt-1 mb-1 pt-1 pb-1" style={{ color: "#1BA4C3", fontWeight: "700" }}>{props.iprating}</span>
                                </span>
                                <span className="row row-cols-2">
                                    <span className="col-6 mt-1 mb-1 pt-1 pb-1" style={{ fontWeight: "bold" }}>Wireless Charging :</span>
                                    <span className="col-6 mt-1 mb-1 pt-1 pb-1" style={{ color: "#1BA4C3", fontWeight: "700" }}>{props.wirelesscharging}</span>
                                </span>
                                <span className="row row-cols-2">
                                    <span className="col-6 mt-1 mb-1 pt-1 pb-1" style={{ fontWeight: "bold" }}>Memory Storage Capacity :</span>
                                    <span className="col-6 mt-1 mb-1 pt-1 pb-1" style={{ color: "#1BA4C3", fontWeight: "700" }}>{props.memory}</span>
                                </span>
                                <span className="row row-cols-2">
                                    <span className="col-6 mt-1 mb-1 pt-1 pb-1" style={{ fontWeight: "bold" }}>Colour :</span>
                                    <span className="col-6 mt-1 mb-1 pt-1 pb-1" style={{ color: "#1BA4C3", fontWeight: "700" }}>{props.color}</span>
                                </span>
                                <span className="row ml-0 mt-1 mt-0 mb-0">
                                    <h4 className="col m-0 p-0" style={{ color: "green", fontWeight: "bold" }}>{props.supply}</h4>
                                </span>
                            </li>
                        </ul>
                    </div>




                    <div className="col-lg-4 order-3 ml-auto mr-auto mt-0 mb-0 pb-1 detailarea">
                        <ul className="col m-0 p-0">
                            <li className="col-12 mt-3">
                                <h4 style={{ color: "darkgreen", fontWeight: "bold" }}>Abailable Offers -</h4>
                            </li>
                            <li className="col-12 mb-1 mt-1 p-1">
                                <span style={{ color: "#e81e5a", fontWeight: "bold" }}>1. Check Exchange Offer. </span>
                                <span style={{ fontWeight: "bold" }}>{props.offer1}</span>
                            </li>
                            <li className="col-12 mb-1 mt-1 p-1">
                                <span style={{ color: "#e81e5a", fontWeight: "bold" }}>2. Bank Offer </span>
                                <span style={{ fontWeight: "500" }}>{props.offer2}</span><span style={{ color: "#e81e6a", fontWeight: "bold" }}> {props.offer2Rs}<span style={{ color: "blue", fontWeight: "bold" }}> T&C.</span></span>
                            </li>

                            <li className="col-12 mb-1 mt-1 p-1">
                                <span style={{ color: "#e81e5a", fontWeight: "bold" }}>3. Cashback offer, </span>
                                <span style={{ fontWeight: "500" }}> {props.offer3}</span><span style={{ color: "blue", fontWeight: "bold" }}> T&C.</span>
                            </li>

                            <li className="col-12 mb-1 mt-1 p-1">
                                <span style={{ fontWeight: "bold", color: "#e81e5a" }}>4. No Cost EMI, </span>
                                <span style={{ fontWeight: "500" }}>{props.offer4} </span><span style={{ color: "#e81e6a", fontWeight: "bold" }}> {props.offer4Rs}<span style={{ color: "blue", fontWeight: "bold" }}> T&C.</span></span>
                            </li>

                            <li className="col-12 mb-1 mt-1 p-1">
                                <span style={{ color: "#e81e5a", fontWeight: "bold" }}>5. UPI offer, </span>
                                <span style={{ fontWeight: "500" }}>{props.offer5}</span><span style={{ color: "#e81e6a", fontWeight: "bold" }}> {props.offer5Rs}<span style={{ color: "blue", fontWeight: "bold" }}> T&C.</span></span>
                            </li>

                        </ul>
                    </div>


                </div>

                <div className="row m-4 w-100 h-100">
                    <img src={props.banner1} alt={props.iphonebanneralt1} className="col p-0" />
                    <img src={props.banner2} alt={props.iphonebanneralt2} className="col p-0" />
                    <img src={props.banner3} alt={props.iphonebanneralt3} className="col p-0" />
                    <img src={props.banner4} alt={props.iphonebanneralt4} className="col p-0" />
                    <img src={props.banner5} alt={props.iphonebanneralt5} className="col p-0" />
                    <img src={props.banner6} alt={props.iphonebanneralt6} className="col p-0" />
                    <img src={props.banner7} alt={props.iphonebanneralt7} className="col p-0" />
                </div>

            </div>
            <Bottombar />
        </React.Fragment>
    )
}

export default Firstproduct1details
