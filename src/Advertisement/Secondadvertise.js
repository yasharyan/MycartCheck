import React from 'react'
import { NavLink } from 'react-router-dom'

function Secondadvertise(props) {
    return (
        <React.Fragment>
            <div className="container ml-auto mr-auto mb-auto mt-5">
                <div className="row">
                    <div className="col">
                        <h3>{props.brand} <span style={{ color: "#00b894", fontWeight: "bold" }}>{props.offer}</span></h3>
                    </div>
                </div>
            </div>

            <div className={props.maincontainer}>
                <div className={props.classNamemainrow} style={{ border: "3px solid #1BA4C3", borderRadius: "8px" }}>

                    <div className={props.classNamecol1}>
                        <ul className="col m-0 p-0">
                            <li className="col-12 mt-3">
                                <NavLink exact to={props.visit} style={{ color: "black" }}  >
                                    <h4>{props.brandName}<span style={{ color: "#1BA4C3" }}>{props.brandColor}</span></h4>
                                </NavLink>
                            </li>
                            <li className="col-12 mb-3 mt-2">
                                <span style={{ color: "green", fontWeight: "bold", fontSize: "18px" }}>Price. </span>
                                <span style={{ fontWeight: "bold", fontSize: "20px", borderBottom: "2px solid #1BA4C3" }}>{props.price}</span>
                                <span className="col-4">
                                    <img src={props.imgratingstar} alt={props.altratingstar} />
                                </span>
                            </li>
                            <li className="col-12">
                                <span className="row row-cols-2">
                                    <span className="col-6 mt-1 mb-1 pt-1 pb-1" style={{ fontWeight: "bold" }}>{props.sizetxt}</span>
                                    <span className="col-6 mt-1 mb-1 pt-1 pb-1" style={{ color: "#1BA4C3", fontWeight: "700" }}>{props.size}</span>
                                </span>
                                <span className="row row-cols-2">
                                    <span className="col-6 mt-1 mb-1 pt-1 pb-1" style={{ fontWeight: "bold" }}>{props.colortxt}</span>
                                    <span className="col-6 mt-1 mb-1 pt-1 pb-1" style={{ color: "#1BA4C3", fontWeight: "700" }}>{props.color}</span>
                                </span>
                            </li>
                            <li className="col-12">
                                <span className="row ml-0 mt-1 mt-0 mb-0">
                                    <h4 className="col m-0 p-0" style={{ color: "green", fontWeight: "bold" }}>{props.supply}</h4>
                                </span>
                            </li>
                        </ul>
                    </div>



                    <div className={props.classNamecol2}>
                        <ul className="mb-0">
                            <li className="col p-0 mb-1">
                                <NavLink exact to={props.visit}>
                                    <img src={props.imgproduct} className={props.classNameimg} alt={props.altcamera} />
                                </NavLink>
                            </li>
                            <div className="row row-cols-2 m-auto p-1">
                            <li className="col-md-6 col-12 p-2 m-auto" style={{ backgroundColor: "#E81E5A", borderRadius: "8px" }}>
                                    <button className="col" style={{ textAlign: "center" ,fontWeight: "bold", fontSize: "18px", color: "white", outline: "none"}}>Add to Cart</button>
                                </li>
                                <li className="col-md-6 col-12 p-2 m-auto" style={{ borderRadius: "8px", backgroundColor: "#00CAAF", }}>
                                    <NavLink exact to={props.buy}>
                                        <button className="col" style={{ fontWeight: "bold", fontSize: "18px", color: "white", textAlign: "center",outline: "none" }}>Buy Now</button>
                                    </NavLink>
                                </li>
                            </div>
                        </ul>
                    </div>




                    <div className={props.classNamecol3}>
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
            </div>
        </React.Fragment>
    )
}

export default Secondadvertise
