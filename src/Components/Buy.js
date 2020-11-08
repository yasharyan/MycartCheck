import React from 'react'
import Headerlogo from '../Account/Headerlogo'
import SignUp from '../Account/SignUp'
import mycartlogo from '../imgs/mycartlogo1.png'
import Bottombar from './Bottombar'

function Buy() {
    return (
        <React.Fragment>
            <Headerlogo/>


            <div className="container mt-3 p-2">
                <div className="row m-auto p-auto">
                    <div className="col-md-3 m-auto p-0" style={{ fontWeight: "bold", color: "white", textAlign: "center", backgroundColor: "#005F7C",border: "1px solid #005F7C" ,borderRadius: "8px" }}>
                        <img src={mycartlogo} id="logo" className="m-lg-1" alt="Website Logo"/>
                        SIGN IN
                    </div>
                    <div className="col-md-3 m-auto p-2" style={{color: "black", textAlign: "center"}}>PAYMENT</div>
                    <div className="col-md-3 m-auto p-2" style={{color: "black", textAlign: "center"}}>DETAILS CONFIRMATION</div>
                </div>
                <SignUp 
                visitloginpage="/Buylogpage"
                visithomepage="/Payment"/>
            </div>
            <Bottombar/>
            
        </React.Fragment>
    )
}

export default Buy
