import React, { Component } from 'react';
import { Link ,Redirect} from "react-router-dom";
import { connect } from 'react-redux';
import { show} from '../../redux/product_reducer';
import './MenuResult.css';
// import { actAddToCart} from '../../redux/cart_reducer';
import {addToRecentlyViewed} from '../../redux/recent_reducer';
class MenuResult extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      showMore: false,
      finish:3
    }
   
  }
  handleClick() {
    this.setState({showMore: true})
    this.setState((prevState) => ({
    finish: prevState.finish + 3
    }));
  }
    render() {
        let { list_product,categoryname} = this.props;
        let { product_id,addProduct,quantity,product}=this.state;
        console.log("product");
        console.log(this.props.list_product);
        const numberOfItems = this.state.showMore ? this.state.finish : 3
        return (
                <div style={{marginLeft:"100px"}}>
                    <div className="category-featured digital">
                     <nav className="navbar nav-menu result-brand">
                      <div className="navbar-brand">
                    
                      {this.props.categoryname}
                  
                
                   </div>
                </nav>
               <div className="product-featured clearfix">
               <div className="row">
               <div className="col-sm-12 category-product"></div>
               
                 { list_product.length>0 &&<div>
                     {
               list_product.slice(0, numberOfItems).map((item2)=>{
                      return(
                    
                                
            <div className="col-sm-4">
                         
            <div className="panel panel-default">
              <div className="panel-body" style={{height:"550px"}}>
              
        <div className="product-item">
          <div className="pi-img-wrapper"style={{width:"300px",height:"300px"}} >

          <img className="img-responsive" style={{width:"300px",height:"300px"}}   src={require('../../assets/'+item2.image)}alt=""/>
            <div>
            <button className="btn" onClick={e =>{
                 this.props.show(item2);
                 this.props.addToRecentlyViewed(item2);
                  }
                  }><Link to="./product">Xem chi tiết</Link></button>
            
          </div>
          </div>
          </div>
          <h3>
          {item2.product_name}
          </h3>
          <div className="pi-price">
           Price:{item2.price}
           <span> <button type="submit" className="shoe-cart pshoe-cart"onClick={e=>{this.props.onAddToCart(item2)}} style={{width:"22%"}}><i className="fa fa-cart-plus" aria-hidden="true" /></button></span>               
          </div>
          {
              
               <a href="#">
               <i className="fa fa-star" style={{color:"yellow"}}aria-hidden="true" />
               <i className="fa fa-star" style={{color:"yellow"}} aria-hidden="true" />
               <i className="fa fa-star" style={{color:"yellow"}} aria-hidden="true" />
               <i className="fa fa-star" style={{color:"yellow"}} aria-hidden="true" />
               <i className="fa fa-star" style={{color:"black"}} aria-hidden="false" />
              
               </a>
             }
         
        
                </div>
                 </div>
                 </div>



                      )
                 })
                }

            
               </div>
                 }
                    </div> 
                <div className="button" style={{marginLeft:"700px"}}>
        <button onClick={()=> this.handleClick()}  type="button" className="btn btn-default" style={{color:"black",backgroundColor:"brown"}}>Xem thêm</button>
        </div>
                 </div>
                 
               </div>
   
            </div>
          

                
            );
}   


}
const mapDispatchToProps = (dispatch) => {//store.dispatch(action)
return {
 show:(product) => dispatch(show(product)),
//   onAddToCart:(addProduct) => dispatch(actAddToCart(addProduct,1)),
  addToRecentlyViewed:(addProduct)=>dispatch(addToRecentlyViewed(addProduct)),
  
  //action la login voi 2 tham so la email va password
};
}     
const mapStateToProps = (state) => {//tra state return ve tu reducer ve thanh prop
 
    return {
        list_product:state.menuState.products,
        categoryname:state.menuState.categoryName
  };
    }

  export default connect(mapStateToProps,mapDispatchToProps)(MenuResult);
  
  

