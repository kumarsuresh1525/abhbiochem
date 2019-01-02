import React from 'react';
import logo from '../../../assets/images/output-logo.png';
import stonWash from '../../../assets/images/ston-wash.jpeg';
import womanAsleep from '../../../assets/images/woman-asleep.jpg';
import fa_softener from '../../../assets/images/fa_softener.jpg';
import Content_Header_Image_Textile from '../../../assets/images/Content_Header_Image_Textile.jpg';
import Page_H_C_Fixing from '../../../assets/images/Page_H_C_Fixing.jpg';
import './index.scss';

class Carousel extends React.Component {
  
  render() {
    const images = [
      {id: 0, imgName: stonWash, active: true},
      {id: 1, imgName: stonWash, active: false},
      {id: 2, imgName: stonWash, active: false},
      {id: 3, imgName: stonWash, active: false},
      {id: 4, imgName: stonWash, active: false}
    ];
    return (
      <div id="img" className="carousel slide" data-ride="carousel">
        <div className="logo">
            <img src={logo}/>
        </div>
        <i className="fa fa-bars hamburger-icon"></i>
        <ul className="carousel-indicators">
          {
            images.map((item, key) => {
              return <li key={key} data-target="#img" data-slide-to="img.id" className={item.active ? 'active' : ''} />
            })
          }
        </ul>
        <div className="carousel-inner">
          {
            images.map((item, key) => {
              return (
                <div key={key} className={`carousel-item ${item.active ? 'active' : ''}`}>
                    <img src={item.imgName} alt="Los Angeles" width="1100" height="500" />
                </div>
              )
            })
          }
        </div>
        <a className="carousel-control-prev" href="#img" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#img" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    )
  }
}

export default Carousel;