import React from 'react'
import { NavLink } from 'react-router-dom'

function Categories(props) {
    return (
        <div className="container-fluid mt-3 ">
            <div className="row m-auto p-3 itemrow">

                <div className="row m-auto">
                    <NavLink to={props.visit1} className="col m-2 pt-1 pr-1 pb-0 pl-1 hovereffect">
                        <img src={props.img1} alt={props.alt1} className="col p-0 sizeadjust" />
                        <h4 className="col categoryitem">{props.categoriesName1}</h4>
                    </NavLink>
                    <NavLink to={props.visit2} className="col m-2 pt-1 pr-1 pb-0 pl-1 hovereffect">
                        <img src={props.img2} alt={props.alt2} className="col p-0 sizeadjust" />
                        <h4 className="col categoryitem">{props.categoriesName2}</h4>
                    </NavLink>
                    <NavLink to={props.visit3} className="col m-2 pt-1 pr-1 pb-0 pl-1 hovereffect">
                        <img src={props.img3} alt={props.alt3} className="col p-0 sizeadjust" />
                        <h4 className="col categoryitem">{props.categoriesName3}</h4>
                    </NavLink>
                    <NavLink to={props.visit4} className="col m-2 pt-1 pr-1 pb-0 pl-1 hovereffect">
                        <img src={props.img4} alt={props.alt4} className="col p-0 sizeadjust" />
                        <h4 className="col categoryitem">{props.categoriesName4}</h4>
                    </NavLink>
                    <NavLink to={props.visit5} className="col m-2 pt-1 pr-1 pb-0 pl-1 hovereffect">
                        <img src={props.img5} alt={props.alt5} className="col p-0 sizeadjust" />
                        <h4 className="col categoryitem">{props.categoriesName5}</h4>
                    </NavLink>
                    <NavLink to={props.visit6} className="col m-2 pt-1 pr-1 pb-0 pl-1 hovereffect">
                        <img src={props.img6} alt={props.alt6} className="col p-0 sizeadjust" />
                        <h4 className="col categoryitem">{props.categoriesName6}</h4>
                    </NavLink>
                    <NavLink to={props.visit7} className="col m-2 pt-1 pr-1 pb-0 pl-1 hovereffect">
                        <img src={props.img7} alt={props.alt7} className="col p-0 sizeadjust" />
                        <h4 className="col categoryitem">{props.categoriesName7}</h4>
                    </NavLink>
                    <NavLink to={props.visit8} className="col m-2 pt-1 pr-1 pb-0 pl-1 hovereffect">
                        <img src={props.img8} alt={props.alt8} className="col p-0 sizeadjust" />
                        <h4 className="col categoryitem">{props.categoriesName8}</h4>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Categories
