import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Detail.css';
import { actAddToCart} from '../../redux/cart_reducer';
import { FacebookProvider, Comments} from 'react-facebook';
import {getColors,getProductByNameAndColor,setComment} from '../../redux/product_reducer';
import StarRatings from 'react-star-ratings';
import {Link,Redirect} from 'react-router-dom';
import $ from 'jquery';
class Detail extends Component {
  
    constructor(props) {
        super(props);
        this.state = {rating:1,color:""};
        //this.onAddToCart=this.onAddToCart.bind(this);
        this.changeRating=this.changeRating.bind(this);
      }
   componentWillMount()
   {
    
  
   }
   changeRating( newRating, name ) {
    this.setState({
      rating:newRating
    });
  }
render()
{  let {product=[],sizes=[],colors=[],rate=0,currentUser} =this.props;
  let {isLogingSuccess,addProduct,quantity}=this.state;
  console.log(currentUser);
  console.log("hdjsd");
  console.log(this.props);
  console.log(rate);
  console.log("Mau la");
  console.log(this.props.colors);
    return (
        <div style={{marginLeft:"100px"}}>
         
          {product.length>0 &&
           <div>
               
              <div className="row product-details">
        <nav className="navbar nav-menu details-brand">
         <div className="navbar-brand" style={{backgroundColor:"brown"}}>
       Chi tiết sản phẩm
    </div>
  </nav>
  <div className="card">
    <div className="container-fliud">
      <div className="wrapper row">
        <div className="preview col-md-6">
          <div className="preview-pic tab-content">
            <div className="tab-pane active" id="pic-1">
            <img className="img-responsive"   src={require('../../assets/'+product[0].image)} alt=""/>
            </div>
          </div>
          <ul className="preview-thumbnail nav nav-tabs">
            <li className="active">
              <a data-target="#pic-1" data-toggle="tab">
              <img className="img-responsive"  src={require('../../assets/'+product[0].image)} alt=""/>
              </a>
            </li>
            <li className="active">
              <a data-target="#pic-2" data-toggle="tab">
              <img className="img-responsive"  src={require('../../assets/'+product[0].image)} alt=""/>
              </a>
            </li>
            <li className="active">
              <a data-target="#pic-3" data-toggle="tab">
              <img className="img-responsive"  src={require('../../assets/'+product[0].image)} alt=""/>
              </a>
            </li>
            <li className="active">
              <a data-target="#pic-4" data-toggle="tab">
              <img className="img-responsive"  src={require('../../assets/'+product[0].image)} alt=""/>
              </a>
            </li>
            <li className="active">
              <a data-target="#pic-4" data-toggle="tab">
              <img className="img-responsive"  src={require('../../assets/'+product[0].image)} alt=""/>
              </a>
            </li>
          </ul>
        </div>
        <div className="details col-md-6">
          <h3 className="product-title">{product[0].product_name}</h3>
          <h6 className="product-title" style={{color:"brown"}}>{product[0].shop_name}</h6>
          <strong>Rate:{this.props.rate}</strong>
                        <StarRatings
                          rating={this.state.rating}
                          starRatedColor="yellow"
                          changeRating={this.changeRating}
                          numberOfStars={5}
                          name='rating'
                        />
          <h3>Màu sắc</h3>
          <h>{product[0].id}</h>
          <div className="row" style={{marginTop:"20px",marginBottom:"20px"}}>
            {
             this.props.colors.length>0 &&
             this.props.colors.map((item,i)=>{
               var color;
               if(item.name=="Đỏ") color="red";
               if(item.name=="Hồng") color="pink";
               if(item.name=="Trắng") color="white";
               if(item.name=="Đen") color="black";
               console.log(color);
               return(

               <button value={item.name} style={{backgroundColor:color,fontsize:"1000px",float:"left",marginRight:"20px"}}

               onClick={e=>{this.props.getProductByNameAndColor(product[0],product[0].product_name,item.name,product[0].shop_id)
              this.setState({color:item.name});
              //this.props.getRating(product.id);
              
              }}
               
               
               >
                 {item.name}
            </button>
            
            
               )
             }
             )
           }
         </div>
         
          <p className="product-description">
            {product[0].description}
          </p>
          <div className="row">
         <div className="pi-price">
                           Giá:{product[0].price}
                           <span> <button type="submit" className="shoe-cart pshoe-cart" onClick={e=>{this.props.onAddToCart(product[0]);
                            this.props.setComment(currentUser.id,product[0].id,this.state.rating);
                             }}style={{width:"40px"}}><i className="fa fa-cart-plus" aria-hidden="true" /></button></span>               
                          </div>
               
          </div>               
                                
         
          <br/>              
         
                   
        

        </div>
      </div>
    </div>
  </div>
  </div>
  <div class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-width="" data-numposts="5"></div>
   </div>  
        }
     
        </div>

      )
  }
 
} 
const mapDispatchToProps = (dispatch) => {//store.dispatch(action)
  return {
       onAddToCart:(addProduct) =>dispatch(actAddToCart(addProduct,1)),
       getProductByNameAndColor:(product,name,color,shop_id)=>dispatch(getProductByNameAndColor(product,name,color,shop_id)),
       setComment:(user_id,product_id,rate)=>dispatch(setComment(user_id,product_id,rate))
};
  }      
const mapStateToProps = (state) => {//tra state return ve tu reducer ve thanh prop
    var a=false;
    if(localStorage.getItem('token')=="abcdefghiklm") a=true;
        return {
            product:state.productState.Product,
            isLogingSuccess:a,
            sizes:state.productState.Sizes,
            colors:state.productState.Colors,
            rate:state.productState.Rate,
            currentUser:state.loginState.currentUser
        };
        }
    
export default connect(mapStateToProps,mapDispatchToProps)(Detail);
      
      
