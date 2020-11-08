import React from 'react'
import Navbar from '../Components/Navbar'

function Cart() {
    return (
        <div>
            <Navbar />
            <div className="container mt-5" style={{border: "4px solid #005F7C", borderRadius: "8px"}}>
                <div className="row">
                    <div className="col p-1" style={{textAlign: "center"}}>
                        <h3>Add your Item here.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
