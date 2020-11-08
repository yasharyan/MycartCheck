import React, { Fragment } from 'react'
import './Style.css'
import Headerlogo from './Headerlogo'
import SignUp from './SignUp'

function Account() {

    return (
        <Fragment>
            <Headerlogo />
            <SignUp 
            visitloginpage="/Login"
            visithomepage="/Mycart"
            />
        </Fragment>
    )
}

export default Account
