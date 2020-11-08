import React, { Component } from 'react'
import Categories from './Categories'
import mobilepic from '../imgs/mobile6.jpg'
import travelingluggage from '../imgs/Travelling Luggages.jpg'
import laptop from '../imgs/laptop1.jpg'
import accessories from '../imgs/accessories1.jpg'
import watch from '../imgs/watch3.jpg'
import shoes from '../imgs/shoes4.jpg'
import camera from '../imgs/camera6.jpg'
import musics from '../imgs/musics2.jpg'
import appliances from '../imgs/homeappliances3.jpg'
import book from '../imgs/books2.jpg'
import women from '../imgs/women2.jpg'
import kids from '../imgs/kids2.jpg'
import mens from '../imgs/mens4.jpg'
import sports from '../imgs/sports1.jpg'
import furniture from '../imgs/furniture2.jpg'
import electronics from '../imgs/electronics2.jpg'

export class Categoriescomponent extends Component {
    render() {
        return (
            <React.Fragment>

                <Categories 
                categoriesName1="Mobiles" img1={mobilepic} alt1="Mobiles" visit1="/Firstadvertisementarea"
                categoriesName2="Luggages" img2={travelingluggage} alt2="Traveling Luggage" visit2="/Luggages"
                categoriesName3="Laptop" img3={laptop} alt3="Laptops" visit3="/Laptops"
                categoriesName4="Accessories" img4={accessories} alt4="Accessories" visit4="/Accessories"
                categoriesName5="Watches" img5={watch} alt5="Watches" visit5="/Watches"
                categoriesName6="Shoes" img6={shoes} alt6="Shoes" visit6="/Thirdadvertisementarea"
                categoriesName7="Camera" img7={camera} alt7="Camera" visit7="/Secondadvertisementarea"
                categoriesName8="Instruments" img8={musics} alt8="Musics" visit8="/Musics"
                />

                <Categories 
                categoriesName1="Electronics" img1={electronics} alt1="Electronics" visit1="/Electronics"
                categoriesName2="Furniture" img2={furniture} alt2="Furniture" visit2="/Furniture"
                categoriesName3="Sports" img3={sports} alt3="Sports" visit3="/Sports"
                categoriesName4="Mens" img4={mens} alt4="Mens" visit4="/Fourthadvertisementarea"
                categoriesName5="Kids" img5={kids} alt5="Kids" visit5="/Kids"
                categoriesName6="Women" img6={women} alt6="Women" visit6="/Womens"
                categoriesName7="Appliances" img7={appliances} alt7="Appliances" visit7="/Appliances"
                categoriesName8="Books" img8={book} alt8="Books" visit8="/Books"
                />
            </React.Fragment>
        )
    }
}

export default Categoriescomponent
