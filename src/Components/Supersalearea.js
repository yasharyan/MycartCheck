import React from 'react'
import { NavLink } from 'react-router-dom'

function Supersalearea() {
    return (
        <div>
            <NavLink to="/Supersalearea1">
            <div className="jumbotron jumbotron-fluid mt-2 mb-2" id="supersale1">
                <div className="container pt-5">
                    <h1>Super Sale Area <span className="coloring">iphone 12</span> </h1>
                    <p className="lead supersale1">
                        Buyback best price
                    </p>
                    <h5>Upto 40% Off </h5>
                    <p className="lead supersale1">
                        LIMITED PERIOD OFFER
                    </p>
                </div>
            </div>
            </NavLink>
            <NavLink to="/Supersalearea2">
            <div className="jumbotron jumbotron-fluid mt-2 mb-2" id="supersale2">
                <div className="container">
                    <div className="row">
                        <div className="col pt-5 mt-5">
                            <h1>Super Sale Area <span className="supersale2"> Canon Camera</span></h1>
                            <p className="lead supersale2">
                                Upto ₹ 10,000 CashBack
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </NavLink>

            <NavLink to="/Supersalearea3">
            <div className="jumbotron jumbotron-fluid mt-2 mb-0" id="supersale3">
                <div className="container">
                    <h1>Super Sale Area <br/> <span className="supersale3">Men's Shoes</span></h1>
                    <p className="lead" style={{fontWeight: "600", color: "#D4934E"}}>
                        BUY 2 get 1.
                    </p>
                </div>
            </div>
            </NavLink>
        </div>
    )
}

export default Supersalearea
