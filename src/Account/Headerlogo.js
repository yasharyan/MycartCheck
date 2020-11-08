import React from 'react'
import { NavLink } from 'react-router-dom'
import mycartlogo from '../imgs/mycartlogo1.png'

function Headerlogo() {
    return (
        <React.Fragment>
            <div className="container-fluid navcontainer_fluid">
                <div className="container nav_container">
                    <div className="row justify-content-center p-1">
                        <NavLink to='/' className="col pt-1 logoname pl-0 pl-lg-auto" style={{ textAlign: "center" }}>
                            <span>
                                <span className="m">M</span>
                                <span className="y">y</span>
                                <span className="c">C</span>
                                <span className="a">a</span>
                                <span className="r">r</span>
                                <span className="t">t</span>
                            </span>
                            <img src={mycartlogo} id="logo" className="m-lg-1" alt="Website Logo" />
                        </NavLink>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Headerlogo
