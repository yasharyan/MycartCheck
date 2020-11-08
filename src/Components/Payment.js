import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Headerlogo from '../Account/Headerlogo'
import mycartlogo from '../imgs/mycartlogo1.png'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import Bottombar from './Bottombar'

class Payment extends Component {
    constructor() {
        super()
        this.state = {
            value: "",
            id: Math.random(),
            idcard: 1 + Math.random(),
            input: false,
            cardDetails: false
        }
    }

    changeHandler = (changeEvent) => {
        this.setState({
            value: changeEvent.target.value
        })
    }

    show = (e) => {
        this.setState({
            input: !this.state.input
        })
    }
    cardDetails = (e) => {
        this.setState({
            cardDetails: !this.state.cardDetails
        })
    }

    render() {
        return (
            <React.Fragment>
                <Headerlogo />

                <div className="container mt-3 p-2">
                    <div className="row m-auto p-auto">

                        <div className="col-md-3 m-auto p-2" style={{ color: "#005F7C", textAlign: "center", fontWeight: "Bold", fontSize: "24px" }}>
                            SIGN IN <IoMdCheckmarkCircleOutline size="34px" color="#E81E5A" className="mb-2" />
                        </div>

                        <div className="col-md-3 m-auto p-0" style={{ fontWeight: "bold", color: "white", textAlign: "center", backgroundColor: "#005F7C", border: "1px solid #005F7C", borderRadius: "8px" }}>
                            <img src={mycartlogo} id="logo" className="m-lg-1" alt="Website Logo" style={{}} />
                        PAYMENT
                        </div>

                        <div className="col-md-3 m-auto p-2" style={{ color: "black",textAlign: "center" }}>
                            DETAILS CONFIRMATION
                        </div >
                    </div>


                    <h4 className="col mt-3 ml-2 p-1">Select Payment Method.</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 p-3" style={{ border: "4px solid #005f7c", borderRadius: "6px" }}>
                                <div className="row">
                                    <div className="col p-2" >
                                        <input type="radio" value="UPI" checked={this.state.value === "UPI"} onChange={this.changeHandler} onClick={this.show} /> <span className="col pl-2" style={{ fontWeight: "bold", fontSize: "24px", color: "#005F7C" }}>UPI</span>
                                    </div>
                                </div>
                                <div className="row ml-2">
                                    {this.state.input ?
                                        <div>
                                            <input className="col-md-6 col-8" type="text" placeholder="enter your upi" key="id" />
                                            <NavLink to="/Detailconfirmation">
                                                <button className="col-md-4 ml-md-3 mt-md-auto mt-2 pl-0 pr-0" style={{ border: "3px solid #ECD071", borderRadius: "4px", backgroundColor: "#ECD071", fontSize: "18px", fontWeight: "600" }} >Continue</button>
                                            </NavLink>
                                        </div>
                                        : null}
                                </div>


                                <div className="row mt-2">
                                    <div className="col p-2" >
                                        <input type="radio" value="Add Debit/Credit Card" checked={this.state.value === "Add Debit/Credit Card"} onChange={this.changeHandler} onClick={this.cardDetails} /> <span className="col pl-2" style={{ fontWeight: "bold", fontSize: "24px", color: "#005F7C" }}>Add Debit/Credit Card</span>
                                    </div>
                                </div>
                                <div className="row ml-2">
                                    <div className="col m-auto">
                                        {this.state.cardDetails ?
                                            <div key="idcard">
                                                <div className="row ml-md-auto ml-1">Name on card</div>
                                                <div className="row pl-2 pt-0">
                                                    <input type="text" className="col-md-8 m-2 ml-md-1 pl-2 pr-0"/>
                                                </div>
                                                <div className="row ml-md-auto ml-1">Card number</div>
                                                <div className="row pl-2 pt-0">
                                                    <input type="text" className="col-md-8 m-2 ml-md-1 pl-2 pr-0"/>
                                                </div>
                                                <div className="row ml-md-auto ml-1">Expiry date</div>
                                                <div className="row pl-2 pt-0">
                                                    <input className="col-md-2 col-4 m-2 ml-md-1 pl-2 pr-0" type="text" placeholder="month" />
                                                    <input className="col-md-2 col-4 m-2 ml-md-1 pl-2 pr-0" type="text" placeholder="year" />
                                                </div>
                                                <div className="row mt-3">
                                                    <button className="col-md-4 col-8 ml-2 pl-0 pr-0" style={{ border: "3px solid #ECD071", borderRadius: "4px", backgroundColor: "#ECD071", fontSize: "18px", fontWeight: "600" }}>Add your card</button>
                                                </div>
                                            </div>
                                            : null
                                        }
                                    </div>
                                </div>




                                <div className="row mt-2">
                                    <div className="col p-2" >
                                        <input type="radio" value="EMI" checked={this.state.value === "EMI"} onChange={this.changeHandler} /> <span className="col pl-2" style={{ fontWeight: "bold", fontSize: "24px", color: "#005F7C" }}>EMI</span>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col p-2" >
                                        <input type="radio" value="Pay on Delivery" checked={this.state.value === "Pay on Delivery"} onChange={this.changeHandler} /> <span className="col pl-2" style={{ fontWeight: "bold", fontSize: "24px", color: "#005F7C" }}>Pay on Delivery</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="row ml-md-2 mt-2" style={{ backgroundColor: "whitesmoke" }}>
                                    <h5 className="col-10 p-2 ml-3 mb-0" style={{ borderBottom: "1px solid black",fontWeight: "bold" }}>DETAILS</h5>
                                    <h5 className="col-6 p-2 ml-3 mb-0">Total:</h5>
                                    <span className="col-4 p-2 ml-3 mb-0" style={{ fontWeight: "500" }}>Rs. 29,129</span>
                                    <h5 className="col-6 p-2 ml-3 mb-0">Delivery Time:</h5>
                                    <span className="col-4 p-2 ml-3 mb-0" style={{ fontWeight: "500" }}>{`Between 
                                    28-Monday- 30-Wednesday`}</span>
                                </div>
                                <NavLink to="/Detailconfirmation">
                                    <button className="col-md-4 ml-2 mt-2 pl-0 pr-0" style={{ border: "3px solid #ECD071", borderRadius: "4px", backgroundColor: "#ECD071", fontSize: "18px", fontWeight: "600" }}>Continue</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <Bottombar/>

            </React.Fragment>
        )
    }
}

export default Payment
