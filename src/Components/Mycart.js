import React from 'react'
import Navbar from './Navbar'
import Advertisement from './Advertisement'
import Supersalearea from './Supersalearea'
import Bottombar from './Bottombar'
import Categoriescomponent from './Categoriescomponent'

function Mycart() {
    return (
        <div>
            <Navbar/>
            <Advertisement/>
            <Categoriescomponent/>
            <Supersalearea/>
            <Bottombar/>
        </div>
    )
}

export default Mycart
