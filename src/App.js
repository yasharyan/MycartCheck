import React, { Fragment } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Redirect, Route, Switch } from 'react-router-dom'
import Mycart from './Components/Mycart'
import Account from './Account/Account'
import Cart from './Cart/Cart'
import Accessories from './Categories/Accessories/Accessories'
import Appliances from './Categories/Appliances/Appliances'
import Books from './Categories/Books/Books'
import Camera from './Categories/Camera/Camera'
import Electronics from './Categories/Electronics/Electronics'
import Furniture from './Categories/Furniture/Furniture'
import Kids from './Categories/Kids/Kids'
import Laptops from './Categories/Laptops/Laptops'
import Luggages from './Categories/Luggages/Luggages'
import Mens from './Categories/Mens/Mens'
import Mobiles from './Categories/Mobile/Mobile'
import Musics from './Categories/Musics/Musics'
import Shoes from './Categories/Shoes/Shoes'
import Sports from './Categories/Sports/Sports'
import Watches from './Categories/Watches/Watches'
import Womens from './Categories/Womens/Womens'
import Supersalearea1 from './SupersaleArea/Supersalearea1'
import Supersalearea2 from './SupersaleArea/Supersalearea2'
import Supersalearea3 from './SupersaleArea/Supersalearea3'
import Login from './Account/Login'
import Firstadvertisementarea from './Advertisement/Firstadvertisementarea'
import Secondadvertisementarea from './Advertisement/Secondadvertisementarea'
import Thirdadvertisementarea from './Advertisement/Thirdadvertisementarea'
import Fourthadvertisementarea from './Advertisement/Fourthadvertisementarea'
import Firstproductcomponent from './Advertisement/Firstproductcomponent'
import Firstproduct2details from './Advertisement/Firstproduct2details'
import Firstproduct3details from './Advertisement/Firstproduct3details'
import Firstproduct4details from './Advertisement/Firstproduct4details'
import Buy from './Components/Buy'
import Payment from './Components/Payment'
import Detailconfirmation from './Components/Detailconfirmation'
import Completeorder from './Components/Completeorder'
import Secondproduct1details from './Advertisement/Secondproduct1details'
import Secondproduct2deatils from './Advertisement/Secondproduct2deatils'
import Secondproduct3deatils from './Advertisement/Secondproduct3deatils'
import Secondproduct4deatils from './Advertisement/Secondproduct4deatils'
import Thirdproduct1details from './Advertisement/Thirdproduct1details'
import Thirdproduct2details from './Advertisement/Thirdproduct2details'
import Thirdproduct3details from './Advertisement/Thirdproduct3details'
import Thirdproduct4details from './Advertisement/Thirdproduct4details'
import Fourthproduct1details from './Advertisement/Fourthproduct1details'
import Fourthproduct2details from './Advertisement/Fourthproduct2details'
import Fourthproduct3details from './Advertisement/Fourthproduct3details'
import Fourthproduct4details from './Advertisement/Fourthproduct4details'
import Accessories1details from './Categories/Accessories/Accessories1details'
import Accessories2details from './Categories/Accessories/Accessories2details'
import Accessories3details from './Categories/Accessories/Accessories3details'
import Accessories4details from './Categories/Accessories/Accessories4details'
import Luggages1details from './Categories/Luggages/Luggages1details'
import Luggages2details from './Categories/Luggages/Luggages2details'
import Luggages3details from './Categories/Luggages/Luggages3details'
import Luggages4details from './Categories/Luggages/Luggages4details'
import Laptop1details from './Categories/Laptops/Laptop1details'
import Laptop2details from './Categories/Laptops/Laptop2details'
import Laptop3details from './Categories/Laptops/Laptop3details'
import Laptop4details from './Categories/Laptops/Laptop4details'
import Watch1details from './Categories/Watches/Watch1details'
import Watch2details from './Categories/Watches/Watch2details'
import Watch3details from './Categories/Watches/Watch3details'
import Watch4details from './Categories/Watches/Watch4details'
import Instrument1details from './Categories/Musics/Instrument1details'
import Instrument2details from './Categories/Musics/Instrument2details'
import Instrument3details from './Categories/Musics/Instrument3details'
import Instrument4details from './Categories/Musics/Instrument4details'
import Electronics1details from './Categories/Electronics/Electronics1details'
import Electronics2details from './Categories/Electronics/Electronics2details'
import Electronics3details from './Categories/Electronics/Electronics3details'
import Electronics4details from './Categories/Electronics/Electronics4details'
import Furniture1details from './Categories/Furniture/Furniture1details'
import Furniture2details from './Categories/Furniture/Furniture2details'
import Furniture3details from './Categories/Furniture/Furniture3details'
import Furniture4details from './Categories/Furniture/Furniture4details'
import Sports1details from './Categories/Sports/Sports1details'
import Sports2details from './Categories/Sports/Sports2details'
import Sports3details from './Categories/Sports/Sports3details'
import Sports4details from './Categories/Sports/Sports4details'
import Appliances1details from './Categories/Appliances/Appliances1details'
import Appliances2details from './Categories/Appliances/Appliances2details'
import Appliances3details from './Categories/Appliances/Appliances3details'
import Appliances4details from './Categories/Appliances/Appliances4details'
import Womens1details from './Categories/Womens/Womens1details'
import Womens2details from './Categories/Womens/Womens2details'
import Womens3details from './Categories/Womens/Womens3details'
import Womens4details from './Categories/Womens/Womens4details'
import Kid1details from './Categories/Kids/Kid1details'
import Kid2details from './Categories/Kids/Kid2details'
import Kid3details from './Categories/Kids/Kid3details'
import Kid4details from './Categories/Kids/Kid4details'
import Buylogpage from './Components/Buylogpage'

const App = () => {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={Mycart}/>
                <Route exact path="/Account" component={Account} />
                <Route exact path="/Buy" component={Buy} />
                <Route exact path="/Cart" component={Cart} />
                <Route exact path="/Firstadvertisementarea" component={Firstadvertisementarea} />
                <Route exact path="/Secondadvertisementarea" component={Secondadvertisementarea}/>
                <Route exact path="/Thirdadvertisementarea" component={Thirdadvertisementarea}/>
                <Route exact path="/Fourthadvertisementarea" component={Fourthadvertisementarea}/>
                <Route exact path="/Accessories" component={Accessories}/>
                <Route exact path="/Appliances" component={Appliances} />
                <Route exact path="/Books" component={Books} />
                <Route exact path="/Camera" component={Camera} />
                <Route exact path="/Electronics" component={Electronics} />
                <Route exact path="/Furniture" component={Furniture} />
                <Route exact path="/Kids" component={Kids} />
                <Route exact path="/Laptops" component={Laptops} />
                <Route exact path="/Luggages" component={Luggages} />
                <Route exact path="/Mens" component={Mens} />
                <Route exact path="/Mobiles" component={Mobiles} />
                <Route exact path="/Musics" component={Musics} />
                <Route exact path="/Shoes" component={Shoes} />
                <Route exact path="/Sports" component={Sports} />
                <Route exact path="/Watches" component={Watches} />
                <Route exact path="/Womens" component={Womens} />
                <Route exact path="/Supersalearea1" component={Supersalearea1} />
                <Route exact path="/Supersalearea2" component={Supersalearea2} />
                <Route exact path="/Supersalearea3" component={Supersalearea3} />
                <Route exact path="/Mycart" component={Mycart} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Account" component={Account} />
                <Route exact path="/Firstproductcomponent" component={Firstproductcomponent} />
                <Route exact path="/Firstproduct2details" component={Firstproduct2details} />
                <Route exact path="/Firstproduct3details" component={Firstproduct3details} />
                <Route exact path="/Firstproduct4details" component={Firstproduct4details} />
                <Route exact path="/Secondproduct1details" component={Secondproduct1details} />
                <Route exact path="/Secondproduct2details" component={Secondproduct2deatils} />
                <Route exact path="/Secondproduct3deatils" component={Secondproduct3deatils} />
                <Route exact path="/Secondproduct4deatils" component={Secondproduct4deatils} />
                <Route exact path="/Thirdproduct1details" component={Thirdproduct1details} />
                <Route exact path="/Thirdproduct2details" component={Thirdproduct2details} />
                <Route exact path="/Thirdproduct3details" component={Thirdproduct3details} />
                <Route exact path="/Thirdproduct4details" component={Thirdproduct4details} />
                <Route exact path="/Fourthproduct1details" component={Fourthproduct1details} />
                <Route exact path="/Fourthproduct2details" component={Fourthproduct2details} />
                <Route exact path="/Fourthproduct3details" component={Fourthproduct3details} />
                <Route exact path="/Fourthproduct4details" component={Fourthproduct4details} />
                <Route exact path="/Accessories1details" component={Accessories1details} />
                <Route exact path="/Accessories2details" component={Accessories2details} />
                <Route exact path="/Accessories3details" component={Accessories3details} />
                <Route exact path="/Accessories4details" component={Accessories4details} />
                <Route exact path="/Luggages1details" component={Luggages1details} />
                <Route exact path="/Luggages2details" component={Luggages2details} />
                <Route exact path="/Luggages3details" component={Luggages3details} />
                <Route exact path="/Luggages4details" component={Luggages4details} />
                <Route exact path="/Laptop1details" component={Laptop1details} />
                <Route exact path="/Laptop2details" component={Laptop2details} />
                <Route exact path="/Laptop3details" component={Laptop3details} />
                <Route exact path="/Laptop4details" component={Laptop4details} />
                <Route exact path="/Watch1details" component={Watch1details} />
                <Route exact path="/Watch2details" component={Watch2details} />
                <Route exact path="/Watch3details" component={Watch3details} />
                <Route exact path="/Watch4details" component={Watch4details} />
                <Route exact path="/Instrument1details" component={Instrument1details}/>
                <Route exact path="/Instrument2details" component={Instrument2details}/>
                <Route exact path="/Instrument3details" component={Instrument3details}/>
                <Route exact path="/Instrument4details" component={Instrument4details}/>
                <Route exact path="/Electronics1details" component={Electronics1details}/>
                <Route exact path="/Electronics2details" component={Electronics2details}/>
                <Route exact path="/Electronics3details" component={Electronics3details}/>
                <Route exact path="/Electronics4details" component={Electronics4details}/>
                <Route exact path="/Furniture1details" component={Furniture1details}/>
                <Route exact path="/Furniture2details" component={Furniture2details}/>
                <Route exact path="/Furniture3details" component={Furniture3details}/>
                <Route exact path="/Furniture4details" component={Furniture4details}/>
                <Route exact path="/Sports1details" component={Sports1details}/>
                <Route exact path="/Sports2details" component={Sports2details}/>
                <Route exact path="/Sports3details" component={Sports3details}/>
                <Route exact path="/Sports4details" component={Sports4details}/>
                <Route exact path="/Kid1details" component={Kid1details}/>
                <Route exact path="/Kid2details" component={Kid2details}/>
                <Route exact path="/Kid3details" component={Kid3details}/>
                <Route exact path="/Kid4details" component={Kid4details}/>
                <Route exact path="/Womens1details" component={Womens1details}/>
                <Route exact path="/Womens2details" component={Womens2details}/>
                <Route exact path="/Womens3details" component={Womens3details}/>
                <Route exact path="/Womens4details" component={Womens4details}/>
                <Route exact path="/Appliances1details" component={Appliances1details}/>
                <Route exact path="/Appliances2details" component={Appliances2details}/>
                <Route exact path="/Appliances3details" component={Appliances3details}/>
                <Route exact path="/Appliances4details" component={Appliances4details}/>
                <Route exact path="/Payment" component={Payment}/>
                <Route exact path="/Detailconfirmation" component={Detailconfirmation}/>
                <Route exact path="/Completeorder" component={Completeorder}/>
                <Route exact path="/Buylogpage" component={Buylogpage}/>


                <Redirect to="/"/>
            </Switch>
        </Fragment>
    )
}

export default App