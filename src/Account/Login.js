import React, { Fragment } from 'react'
import './Style.css'
import Headerlogo from './Headerlogo'
import Logpage from './Logpage'

function Login() {

    return (
        <Fragment>
            <Headerlogo />
            <Logpage 
            visitsignuppage="/Account"
            visithomepage="/Mycart"
            />
        </Fragment>
    )
}

export default Login