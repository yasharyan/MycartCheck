import React from 'react'
import { NavLink } from 'react-router-dom'
import Headerlogo from '../Account/Headerlogo'
import mycartlogo from '../imgs/mycartlogo1.png'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import Bottombar from './Bottombar'

function Detailconfirmation() {
    return (
        <React.Fragment>
            <Headerlogo />

            <div className="container mt-3 p-2">
                <div className="row m-auto p-auto">
                    <div className="col-md-3 m-auto p-2" style={{ color: "#005F7C", textAlign: "center", fontWeight: "Bold", fontSize: "24px" }}>
                        SIGN IN<IoMdCheckmarkCircleOutline size="34px" color="#E81E5A" className="mb-2" />
                    </div>

                    <div className="col-md-3 m-auto p-2" style={{ color: "#005F7C", textAlign: "center", fontWeight: "Bold", fontSize: "24px" }}>
                        PAYMENT<IoMdCheckmarkCircleOutline size="34px" color="#E81E5A" className="mb-2" />
                    </div>


                    <div className="col-md-3 m-auto p-0" style={{ fontWeight: "bold", color: "white", textAlign: "center", backgroundColor: "#005F7C", border: "1px solid #005F7C", borderRadius: "8px" }}>
                        <img src={mycartlogo} id="logo" className="m-lg-1" alt="Website Logo" style={{}} />
                        DETAILS CONFIRMATION
                    </ div >
                </div>

                <h4 className="col mt-3 ml-2 p-1">Get Confirm About Your Order</h4>

                <div className="container">
                    <div className="row" style={{ border: "4px solid #005f7c", borderRadius: "6px" }}>
                        <div className="col-md-4 p-3" >
                            <h5 className="row m-auto" style={{ fontWeight: "bold" }}>Shipping Details</h5>
                            <span className="row mt-2 ml-auto mr-auto mb-auto">UserName : <span className="col m-auto" style={{ fontWeight: "600" }}> Abcdefgh jhwehew</span></span>
                            <span className="row m-auto">Address :<span className="col m-auto" style={{ fontWeight: "600" }}>H-2561, wbbwbw-3, hbhwbhwbwjnjd, hwdwdd efegyfeygfyue efefeefef.</span></span>
                            <span className="row m-auto">Pin-code :<span className="col m-auto" style={{ fontWeight: "600" }}> 987654</span></span>
                            <span className="row m-auto">Phone no :<span className="col m-auto" style={{ fontWeight: "600" }}> 9749874240</span></span>
                        </div>

                        <div className="col-md-4 p-3" >
                            <h5 className="row m-auto" style={{ fontWeight: "bold" }}>Payment Method</h5>
                            Pay on delivery
                        </div>

                        <div className="col-md-4 p-3" >
                            <NavLink to="/Completeorder">
                                <button className="col-9 ml-md-2 mt-2 pl-0 pr-0" style={{ border: "3px solid #ECD071", borderRadius: "4px", backgroundColor: "#ECD071", fontSize: "18px", fontWeight: "600" }}>Place your order</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <Bottombar/>

        </React.Fragment>
    )
}

export default Detailconfirmation