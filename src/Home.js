import React from "react";
import Product from "./Product"
import "./Home.css";

function Home(){
    return(
        <div className="home">
           <img 
             className="home__image"
             src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
             alt=""
            />
        
        <div className="home__row">
            <Product
            id="1"
            title="Best Novel to keep you Motivated "
            price={5000}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51zChiHckjL._AC_SX184_.jpg"
            />
            <Product
            id="2"
            title="Cricket Bat, One of the Greatest "
            price={7800}
            rating={5}
            image="https://m.media-amazon.com/images/I/514hBcHREQL._AC_UL320_.jpg"
            />
        </div>

        <div className="home__row">
            <Product
            id="3"
            title="Fall in love with Apple"
            price={50000}
            rating={4}
            image="https://m.media-amazon.com/images/I/71HtGqb9vXL._AC_UL320_.jpg"
            />
            <Product
            id="4"
            title="New Apple MacBook Pro "
            price={65000}
            rating={5}
            image="https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY218_.jpg"
            />
            <Product
            id="5"
            title="COKAFIL Mens Running "
            price={4600}
            rating={4}
            image="https://m.media-amazon.com/images/I/81e8RNrgk6L._AC_UL320_.jpg"
            />
        </div>

        <div className="home__row">
            <Product
            id="123"
            title="Sony X830F 70 Inch TV: 70 in Bravia 4K Ultra HD Smart LED Television with HDR, 70-Inch"
            price={8700}
            rating={5}
            image="https://m.media-amazon.com/images/I/81YtB46HnsL._AC_UY218_.jpg"
            />
            
        </div>

       
      </div>
    );
}

export default Home;