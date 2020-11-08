import React from 'react'
import {AiOutlineYoutube} from 'react-icons/ai'
import {ImFacebook2} from 'react-icons/im'
import {SiTwitter} from 'react-icons/si'
import {BiCopyright} from 'react-icons/bi'

function Bottombar() {
    return (
        <div >
            <div className="cotainer-fluid navcontainer_fluid">
                <div className="container nav_container">
                    <div className="row mt-4 pt-5">
                        <div className="col">
                            <div className="about">ABOUT</div>
                            <ul className="listcolor">
                                <li>Contact Us</li>
                                <li>About Us</li>
                                <li>Detalis</li>
                                <li>My Cart Wholesale</li>
                            </ul>

                        </div>
                        <div className="col">
                            <div className="help">HELP</div>
                            <ul className="listcolor">
                                <li>Payments</li>
                                <li>Shipping</li>
                                <li>Cancellation & Returns</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                        <div className="col">
                            <div className="policy">POLICY</div>
                            <ul className="listcolor">
                                <li>Return Policy</li>
                                <li>Terms of Use</li>
                                <li>Security</li>
                                <li>Privacy</li>
                            </ul>
                        </div>
                        <div className="col">
                            <div className="social">Social</div>
                            <ul className="listcolor">
                                <li><AiOutlineYoutube size="30px" color="rgb(245, 59, 74)" className="mt-1"/> Youtube</li>
                                <li><SiTwitter size="30px" color="#5DA9DD" className="mt-2"/> Twitter</li>
                                <li><ImFacebook2 size="26px" color="white" className="mt-2"/> Facebook</li>
                            </ul>
                        </div>
                        <div className="col">
                            <div className="mailus">Mail Us:</div>
                            <div className="listcolor">MyCart @companyservice.com</div>
                        </div>
                        <div className="col">
                            <div className="address">Registered Office Address:</div>
                            <span className="listcolor">H-550, Sector 55, phase 1, Mohali(punjab). 160055</span>
                        </div>
                    </div>

                </div>
            </div>

            <div className="cotainer-fluid p-5 navcontainer_fluid">
                <div className="container p-5 nav_container ">
                    <div className="row justify-content-center ">
                        <div className="col-md-3 copyright">
                        <BiCopyright size="20px" color="white"/> 2020-2020 MyCart.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bottombar
