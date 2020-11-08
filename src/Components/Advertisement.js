import React, { Fragment } from 'react'
import advertisement1 from '../imgs/jonas-lee-o6elTKWZ5bI-unsplash.jpg'
import advertisement2 from '../imgs/sajad-nori-uRIil5LFBaI-unsplash.jpg'
import advertisement3 from '../imgs/jeremy-alford-68_PLKkF_ww-unsplash.jpg'
import advertisement4 from '../imgs/lan-deng-quddu_dZKkQ-unsplash.jpg'
import { Carousel } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Advertisement() {
    return (
        <Fragment>
            <div className="container-fluid advertisearea mt-2">
                <Carousel>
                    <Carousel.Item>
                        <NavLink to="/Firstadvertisementarea">
                            <img
                                className="d-block w-100 advertise"
                                src={advertisement1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h2>Apple Sale Bumper Offer</h2>
                                <h3>Get Upto 40% off.</h3>
                            </Carousel.Caption>
                        </NavLink>
                    </Carousel.Item>

                    <Carousel.Item>
                        <NavLink to="/Secondadvertisementarea">
                            <img
                                className="d-block w-100 advertise"
                                src={advertisement2}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Click Your Memories With Latest Sony Camera</h3>
                                <p>Get Image Editor 29% Off With Camera.</p>
                            </Carousel.Caption>
                        </NavLink>
                    </Carousel.Item>
                    <Carousel.Item>
                        <NavLink to="/Thirdadvertisementarea">
                            <img
                                className="d-block w-100 advertise"
                                src={advertisement3}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h2>Latest Shoes</h2>
                                <h4>Diwali Sale.</h4>
                            </Carousel.Caption>
                        </NavLink>
                    </Carousel.Item>
                    <Carousel.Item>
                        <NavLink to="/Fourthadvertisementarea">
                            <img
                                className="d-block w-100 advertise"
                                src={advertisement4}
                                alt="Fourth slide"
                            />

                            <Carousel.Caption>
                                <h3>ZARAMens Collections</h3>
                                <p>All Rich & Comfort Fit.</p>
                            </Carousel.Caption>
                        </NavLink>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="container-fluid mt-2 ">
                <div className="row justify-content-center categoryhead">
                    <h3 className="col-md-2 categorytxt">Categories</h3>

                </div>
            </div>
        </Fragment >
    )
}

export default Advertisement
