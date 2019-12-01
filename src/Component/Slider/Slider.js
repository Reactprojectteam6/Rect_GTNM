import React from 'react';

class Slider extends React.Component{
  componentDidMount()
  {
  }
render()
{ var style={
  height:"400px",
  
}
  return(
    <div id="main">
      <div className="container-fluid"> 
        <div id="carousel-simple"  className="carousel slide  col-lg-12 col-lg-offset-0" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carousel-simple" data-slide-to="0" className="active"></li>
            <li data-target="#carousel-simple" data-slide-to="1"></li>
            <li data-target="#carousel-simple" data-slide-to="2"></li>
            <li data-target="#carousel-simple" data-slide-to="3"></li>
            <li data-target="#carousel-simple" data-slide-to="4"></li>
            <li data-target="#carousel-simple" data-slide-to="5"></li>
        </ol>
    
         
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img style={style} src={require('./images/slider7.jpg') }alt=""/>
            </div>
            <div className="item">
            <img  style={style}src={require('./images/slider5.jpg')} alt=""/>
            </div>
            <div className="item">
            <img  style={style} src={require('./images/slider7.jpg')} alt=""/>
            </div>
            <div className="item">
            <img  style={style} src={require('./images/slider5.jpg')} alt=""/>
            </div>
            <div className="item">
            <img  style={style}src={require('./images/slider7.jpg')} alt=""/>
            </div>
            <div className="item">
            <img  style={style} src={require('./images/slider5.jpg')} alt=""/>
            </div>
          </div>
          <a className="left carousel-control" href="#carousel-simple" role="button" data-slide="prev">
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </a>
          <a className="right carousel-control" href="#carousel-simple" role="button" data-slide="next">
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </a>
       
        </div>
      </div>
    </div>
  )
}
}
export default Slider;