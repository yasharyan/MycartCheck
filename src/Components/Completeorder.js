import React from 'react'
import Headerlogo from '../Account/Headerlogo'
import orderbox from '../imgs/orderbox.png'

function Completeorder() {
    return (
        <div>
            <Headerlogo />
            <div className="container">
                <div className="row mt-5 p-3" style={{border: "2px solid #E81E5A", borderRadius: "20px"}}>
                    <img src={orderbox} alt="thanks box." className="col-md-2 pt-4" />
                    <div className="row">
                      <h1 className="col m-auto" style={{ color: "#005F7C" }}>
                        Thanks for Ordering Us.
                      </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Completeorder
