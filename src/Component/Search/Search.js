import React, { Component } from 'react';
import { Link ,Redirect} from "react-router-dom";
import { connect } from 'react-redux';
import { show, getRating} from '../../redux/product_reducer';
import './Search.css';
// import { actAddToCart} from '../../redux/cart_reducer';
import {addToRecentlyViewed} from '../../redux/recent_reducer';
class Search extends React.Component{
  constructor (props) {
    super(props)
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
  render(){
    const {list=[]}=this.props;
    let{addProduct,product_id,id}=this.state;
    const numberOfItems = this.state.showMore ? this.state.finish : 3
    return (
  <div>
                     <nav className="navbar nav-menu result-brand">
                      <div className="navbar-brand">
                    
                 Kết quả tìm kiếm
                  
                
                   </div>
                </nav>
            
        <div class="row">
        {list.slice(0, numberOfItems).map((item2)=> {
          return (
        
                     
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
                  this.props.getRating(item2.id);
                  }
                  }><Link to="./product" >Xem chi tiết </Link></button>
            
          </div>
          </div>
          </div>
          <h3>
          {item2.product_name}
          </h3>
          <div className="pi-price">
           Price:{item2.price}
                   
          </div>
        
        
                </div>
                 </div>
                 </div>


           )
        })}
        </div>
        
      
        <div className="button" style={{marginLeft:"700px"}}>
        <button onClick={()=> this.handleClick()}  type="button" className="btn btn-default" style={{color:"black",backgroundColor:"brown"}}>Xem thêm</button>
        </div>
       
        
     </div>
  
    );
  }
}
const mapDispatchToProps = (dispatch) => {//store.dispatch(action)
  return {
     show:(addProduct) => dispatch(show(addProduct)),
     //onAddToCart:(addProduct) => dispatch(actAddToCart(addProduct,1)),
     addToRecentlyViewed:(addProduct)=>dispatch(addToRecentlyViewed(addProduct)),
     getRating:(id)=>dispatch(getRating(id))
    //action la login voi 2 tham so la email va password
  };
  }     
  const mapStateToProps = (state) => {//tra state return ve tu reducer ve thanh prop
    var a=false;
    console.log("san pham");
    console.log(state.searchState.products);
      if(localStorage.getItem('token')=="abcdefghiklm") a=true;
      return {
        list:state.searchState.products,
        isLogingSuccess:a
    };
      }
  
export default connect(mapStateToProps,mapDispatchToProps)(Search);
    