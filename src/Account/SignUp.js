import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class SignUp extends Component {
    constructor() {
        super()

        this.state = {
            name: "",
            mobile: "",
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
            <React.Fragment>
                <div className="container mt-5 p-auto">
                    <div className="row justify-content-center p-auto">
                        <div className="col-lg-4 col-xs-12 m-2" style={{ border: "1px solid rgb(0, 95, 124)", borderRadius: "10px 10px 10px 10px", }}>
                            <div className="row row-cols-2" style={{ textAlign: "center" }}>
                                <div className="col-6 p-2" style={{ backgroundColor: "rgb(0, 95, 124)", fontWeight: "bold", fontSize: "18px", color: "white", borderRadius: "10px 0px 0px 0px" }}>Sign up</div>
                                <NavLink to={this.props.visitloginpage} className="col-6 p-2" style={{ color: "black" }}>Login</NavLink>
                            </div>

                            <div className="row justify-content-center ml-auto mr-auto mb-auto mt-4 p-1 styling">
                                <input type="text" name="name" placeholder="Enter your Name" value={this.state.name} onChange={this.updatehandle} className="col inputfield"  style={{borderRadius: "4px"}}/>
                            </div>
                            <br />
                            <div className="row justify-content-center m-auto p-1 styling">
                                <input type="text" name="mobile" placeholder="Mobile No." value={this.state.mobile} onChange={this.updatehandle} className="col inputfield"  style={{borderRadius: "4px"}}/>
                            </div>
                            <br />

                            <div className="row justify-content-center m-auto p-1 styling">
                                <input type="text" name="email" placeholder="Email id" value={this.state.email} onChange={this.updatehandle} className="col inputfield"  style={{borderRadius: "4px"}}/>
                            </div>
                            <br />
                            <div className="row justify-content-center m-auto p-1 styling">
                                <input type="password" name="password" placeholder="New password" value={this.state.password} onChange={this.updatehandle} className="col inputfield"style={{borderRadius: "4px"}}/>
                            </div>
                            <br />
                            <div className="row justify-content-center mt-1 ml-auto mr-auto mb-0 p-1 styling" style={{ backgroundColor: "rgb(0, 95, 124)", borderRadius: "10px 10px 10px 10px" }}>
                                <NavLink to={this.props.visithomepage} className="col">
                                <button className="col pt-1 pb-0"  style={{ textAlign: "center", fontWeight: "bold", fontSize: "18px", color: "white", outline: "none" }} >Sign up
                                </button>
                                </NavLink>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-8 m-auto pt-2 pb-3 pl-0 pr-0">
                                    <div className="row justify-content-center">
                                        <NavLink to={this.props.visitloginpage} className="col-10 pl-3 m-auto alreadyaccount" style={{ textAlign: "center" }}>Already have an account!</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default SignUp
