import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Itemshoes(props) {
  // <li>I am a { props.brand }</li>;
 
  return (

    <div class="card bg-info">
      <div class="card-body text-center">
        <img src={props.url} style = {{ 'width': '350px' }}/>
        <h6 class="card-text"> {props.brand}</h6>
        <h5  style = {{ 'color': 'red' }}>{props.price} VNĐ</h5>
        <button type="button" className="btn btn-danger">Mua</button>
        
      </div>
    </div>

  )
}
function Itemcars(props) {
  // <li>I am a { props.brand }</li>;
 
  return (
    <div class="card bg-info">
      <div class="card-body text-center">
        <img src={props.url}  style = {{ 'width': '350px' }}/>
        <h6 class="card-text"> {props.brand}</h6>
        <h5  style = {{ 'color': 'red' }}>{props.price} VNĐ</h5>
        <button type="button" className="btn btn-danger">Mua</button>
        
      </div>
    </div>

  )
}

function Shoes() {
  const shoes = [
    { id: "1", brand: 'Guitar Acoutics', img: 'images/d2.jpg', price:3000000 },
    { id: "2", brand: 'Harmonica 10 lỗ', img: 'images/h1.jpg', price:500000 },
    { id: "3", brand: 'Đàn Kalimba', img: 'images/k1.jpg', price:650000 },
    { id: "4", brand: 'Piano', img: 'images/p1.jpg', price:100000000 },
    { id: "5", brand: 'Sáo Flute', img: 'images/s6.jpg', price:11000000 },
    { id: "6", brand: 'Sáo Flute', img: 'images/s1.jpg', price:11000000 },
    { id: "7", brand: 'Đàn Piano', img: 'images/p5.jpg', price:11000000 },
    { id: "8", brand: 'ĐÀn piano', img: 'images/p4.jpg', price:11000000 },
    { id: "9", brand: 'Trống Jazz', img: 'images/t3.jpg', price:7000000 }
  ];
  return (
    <>
      <div class="container">
        <div class="row"> 
        <div class="card-columns">
        {shoes.map((item) => <Itemshoes  key={item.id} brand={item.brand} price={item.price} url={item.img} style = {{ 'width': '30px' }}/>)}
        
      </div>
         </div>
      </div>
    </>
  );
}
function Cars(){

  const cars = [
    { id: "6", brand: 'Sáo Flute', img: 'images/s1.jpg', price:11000000 },
    { id: "7", brand: 'Đàn Piano', img: 'images/p5.jpg', price:11000000 },
    { id: "8", brand: 'ĐÀn piano', img: 'images/p4.jpg', price:11000000 },
    { id: "1", brand: 'Guitar Acoutics', img: 'images/d2.jpg', price:3000000 },
    { id: "2", brand: 'Harmonica 10 lỗ', img: 'images/h1.jpg', price:500000 },
    { id: "3", brand: 'Đàn Kalimba', img: 'images/k1.jpg', price:650000 },
    { id: "4", brand: 'Piano', img: 'images/p1.jpg', price:100000000 },
    { id: "5", brand: 'Sáo Flute', img: 'images/s6.jpg', price:11000000 },
    { id: "9", brand: 'Trống Jazz', img: 'images/t3.jpg', price:7000000 }
    
   
  ];
  return (
    <>
    <div class="container">
      <div class="row"> 
      <div class="card-columns">
      {cars.map((item) => <Itemcars  key={item.id}  brand={item.brand}  price={item.price} url={item.img} style = {{ 'width': '10px' }}/>)}
      
    </div>
       </div>
    </div>
  </>


  )

}
export { Cars, Shoes}
