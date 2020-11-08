import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import './Style.css'
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa'
import { BsSearch } from 'react-icons/bs'
import mycartlogo from '../imgs/mycartlogo1.png'

class Navbar extends Component {

    render() {
        return (
            <Fragment>
                <div className="container-fluid navcontainer_fluid">
                    <div className="container nav_container">
                        <div className="row">
                            <NavLink to='/' className="col-lg-2 logoname pl-0 pl-lg-auto pr-0 pt-1" style={{ textAlign: "center" }}>
                                <span>
                                    <span className="m">M</span>
                                    <span className="y">y</span>
                                    <span className="c">C</span>
                                    <span className="a">a</span>
                                    <span className="r">r</span>
                                    <span className="t">t</span>
                                </span>
                                <img src={mycartlogo} id="logo" className="ml-lg-1" alt="Website Logo" />
                            </NavLink>
                            <div className="col-lg-7 m-auto pb-2">
                                <div className="row mt-2" id="searcharea">
                                    <div className="col-sm-12 ml-1 pr-0">
                                        <input type="text" placeholder="Search" onChange={this.props.handle} className="col-11 pl-0 pr-0" id="input" />
                                        <BsSearch size="25px" color="rgb(0, 95, 124)" className="col-1 pl-0 pr-2 float-right" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 pt-1">
                                <ul className="row row-cols-2 mb-1 mb-lg-0 ">
                                    <li className="col-6 m-auto pt-lg-1 pl-0 pl-lg-2" id="account">
                                        <NavLink to="/Account">
                                            <FaUserCircle size="25px" className="usericon" /><span className="p-1 accounttxt"> Account</span>
                                        </NavLink>
                                    </li>
                                    <li className="col-6 m-auto pt-lg-2 align-item-end">
                                        <NavLink to="/Cart">
                                            <FaShoppingCart size="35px" color="#E81E5A" className="float-right" />
                                            <span className="carttxt float-right p-1"> Cart</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Navbar
