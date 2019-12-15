import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getAllProduct,getHotProduct} from '../../redux/home_reducer';
import {show, getRating,getColors} from '../../redux/product_reducer';
import { Redirect,Link} from "react-router-dom";
import Menu from '../Menu/Menu.js';
import "./Home.css";
import {addToRecentlyViewed} from '../../redux/recent_reducer';
class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
          showMore: false,
          finish:9
        }
      }
      handleClick() {
        this.setState({showMore: true})
        this.setState((prevState) => ({
        finish: prevState.finish + 9
        }));
      }
     componentWillMount()
     {
      this.props.getHotProduct();
      this.props.getAllProduct();
     
     }
      render(){
        
        let{ list_product=[],list_hot_product=[]}=this.props;
        let {product,id}=this.state;
        console.log(this.props);
        console.log("Hot product");
        console.log(list_hot_product);
        const numberOfItems = this.state.showMore ? this.state.finish : 9
        return(<div style={{marginTop:"10px"}}>
        
        
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
               <Menu/> 
       </div> 
       <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
       <nav className="navbar nav-menu result-brand">
          <div className="navbar-brand">
             Sản phẩm nổi bật
           
              </div>
              </nav>
              <div className="row">
            {list_hot_product.length>0 &&
              list_hot_product.map((item1,i)=>{
               return (

                <div className="col-sm-6">
                         
                <div className="panel panel-default">
                  <div className="panel-body" style={{height:"550px"}}>
                  
            <div className="product-item">
              <div className="pi-img-wrapper"style={{width:"400px",height:"400px"}} >
    
              <img className="img-responsive" style={{width:"400px",height:"400px"}}   src={item1.image}alt=""/>
                <div>
                <button className="btn" onClick={e =>{
                      this.props.show(item1.id);
                      this.props.addToRecentlyViewed(item1);
                      this.props.getRating(item1.id);
                      this.props.getColors(item1.product_name);
                      }
                      }><Link to={"/product/"+item1.id} >Xem chi tiết</Link></button>
                
              </div>
              </div>
              </div>
              <h3>
              {item1.product_name}
              </h3>
              <div className="pi-price">
               Giá:{item1.price}
                           
              </div>
             
             
            
                    </div>
                     </div>
                     </div>
    
    
               )

 


              }
              
              
              
              
              
              )



            }
            </div>
         
                     <nav className="navbar nav-menu result-brand">
                      <div className="navbar-brand">
                    
              Tất cả sản phẩm
                
                   </div>
                </nav>
            
        <div class="row">
        {list_product.slice(0, numberOfItems).map((item2)=> {
          return (
        
                     
            <div className="col-sm-4">
                         
            <div className="panel panel-default">
              <div className="panel-body" style={{height:"550px"}}>
              
        <div className="product-item">
          <div className="pi-img-wrapper"style={{width:"300px",height:"300px"}} >

          <img className="img-responsive" style={{width:"300px",height:"300px"}}   src={item2.image}alt=""/>
            <div>
            <button className="btn" onClick={e =>{
                 this.props.show(item2.id);
                  this.props.addToRecentlyViewed(item2);
                  this.props.getRating(item2.id);
                  this.props.getColors(item2.product_name);
                  }
                  }><Link to={"/product/"+item2.id} >Xem chi tiết</Link></button>
            
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
        
      
        <div className="button" style={{marginLeft:"350px"}}>
        <button onClick={()=> this.handleClick()}  type="button" className="btn btn-default" style={{color:"black",backgroundColor:"brown"}}>Xem thêm</button>
        </div>
       
        
  
  
             
            
   
   
   
      </div>
      </div>
   
   
   
   
   
        )
    
      }
}
 

const mapStateToProps = (state) => {//tra state return ve tu reducer ve thanh prop
  console.log(state);
    return {
     
       list_product:state.homeState.products,
       list_hot_product:state.homeState.hotproduct,

 };
}
    const mapDispatchToProps = (dispatch) => {//store.dispatch(action)
        return {
         
         getAllProduct:()=>dispatch(getAllProduct()), 
         show:(product)=>dispatch(show(product)),
         addToRecentlyViewed:(product)=>dispatch(addToRecentlyViewed(product)),
         getRating:(id)=>dispatch(getRating(id)),
         getColors:(product_name)=>dispatch(getColors(product_name)),
         getHotProduct:()=>dispatch(getHotProduct())
        
        };
        }
 export default connect(mapStateToProps, mapDispatchToProps)(Home);