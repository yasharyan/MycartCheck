import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'

class Logpage extends Component {
    constructor() {
        super()

        this.state = {
            email: "",
            password: ""
        }
    }

    updatehandle = (e) => {
        this.setState({
            [e.target.name]:
                e.target.value
        })
    }


    render() {
        return (
            <Fragment>
                <div className="container  mt-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-xs-12 m-2  check" style={{ border: "1px solid rgb(0, 95, 124)", borderRadius: "10px 10px 10px 10px", }}>
                            <div className="row row-cols-2" style={{ textAlign: "center" }}>
                                <NavLink to={this.props.visitsignuppage} className="col-6 p-2" style={{ color: "black" }}>Sign up</NavLink>

                                <div className="col-6 p-2" style={{ backgroundColor: "rgb(0, 95, 124)", fontWeight: "bold", fontSize: "18px", color: "white", borderRadius: "0px 10px 0px 0px" }}>Login</div>
                            </div>

                            <div className="row justify-content-center ml-auto mr-auto mb-auto mt-4 p-1 styling">
                                <input type="text" name="email" placeholder="email id" value={this.state.email} onChange={this.updatehandle} className="col inputfield " style={{ borderRadius: "4px" }} />
                            </div>
                            <br />
                            <div className="row justify-content-center m-auto p-1 styling">
                                <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.updatehandle} className="col inputfield " style={{ borderRadius: "4px" }} />
                            </div>
                            <br />
                            <br />
                            <div className="row justify-content-center ml-auto mr-auto mt-auto mb-4 p-1 styling" style={{ backgroundColor: "rgb(0, 95, 124)", borderRadius: "10px 10px 10px 10px" }}>
                                <NavLink to={this.props.visithomepage} className="col">
                                    <button className="col p-1" style={{ textAlign: "center", fontWeight: "bold", fontSize: "18px", color: "white", outline: "none" }} >
                                        Login
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Logpage
