import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Detail.css';
import { actAddToCart} from '../../redux/cart_reducer';
import { FacebookProvider, Comments} from 'react-facebook';
import $ from 'jquery';
class Detail extends Component {
  
    constructor(props) {
        super(props);
        this.state = {};
        this.onAddToCart=this.onAddToCart.bind(this);
      }
   
render()
{  let {product} =this.props;
  let {isLogingSuccess,addProduct,quantity}=this.state;   
  console.log("hdjsd");
  console.log(this.props);
    return (
        <div style={{marginLeft:"100px"}}>
         
          {
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
            <img className="img-responsive" onLoad={e => this.setState({addProduct:product})}  src={require('../../assets/'+product.image)} alt=""/>
            </div>
          </div>
          <ul className="preview-thumbnail nav nav-tabs">
            <li className="active">
              <a data-target="#pic-1" data-toggle="tab">
              <img className="img-responsive"  src={require('../../assets/'+product.image)} alt=""/>
              </a>
            </li>
            <li className="active">
              <a data-target="#pic-2" data-toggle="tab">
              <img className="img-responsive"  src={require('../../assets/'+product.image)} alt=""/>
              </a>
            </li>
            <li className="active">
              <a data-target="#pic-3" data-toggle="tab">
              <img className="img-responsive"  src={require('../../assets/'+product.image)} alt=""/>
              </a>
            </li>
            <li className="active">
              <a data-target="#pic-4" data-toggle="tab">
              <img className="img-responsive"  src={require('../../assets/'+product.image)} alt=""/>
              </a>
            </li>
            <li className="active">
              <a data-target="#pic-4" data-toggle="tab">
              <img className="img-responsive"  src={require('../../assets/'+product.image)} alt=""/>
              </a>
            </li>
          </ul>
        </div>
        <div className="details col-md-6">
          <h3 className="product-title">{product.product_name}</h3>
         
          
          <p className="product-description">
            {product.description}
          </p>
         <div className="pi-price">
                           Price:{product.price} Đ
                           <span> <button type="submit" className="shoe-cart pshoe-cart" onClick={this.onAddToCart}style={{width:"10%"}}><i className="fa fa-cart-plus" aria-hidden="true" /></button></span>               
                          </div>
         
          <br/>              
          {
                        <a href="#">
                        <i className="fa fa-star" style={{color:"yellow"}}aria-hidden="true" />
                        <i className="fa fa-star" style={{color:"yellow"}} aria-hidden="true" />
                        <i className="fa fa-star" style={{color:"yellow"}} aria-hidden="true" />
                        <i className="fa fa-star" style={{color:"black"}} aria-hidden="false" />
                        <i className="fa fa-star" style={{color:"black"}} aria-hidden="false" />
                       
                    </a>
          }
                   
        

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
  onAddToCart(e)
  {  e.preventDefault();
    
   
    let { addProduct}  = this.state;
    
    //lay trang thai off state do qua email va password
    this.props.onAddToCart(addProduct);
   }
} 
const mapDispatchToProps = (dispatch) => {//store.dispatch(action)
  return {
       //onAddToCart:(addProduct) =>dispatch(actAddToCart(addProduct,1))
};
  }      
const mapStateToProps = (state) => {//tra state return ve tu reducer ve thanh prop
    var a=false;
    if(localStorage.getItem('token')=="abcdefghiklm") a=true;
        return {
            product:state.productState.Product,
            isLogingSuccess:a
        };
        }
    
export default connect(mapStateToProps,mapDispatchToProps)(Detail);
      
      
