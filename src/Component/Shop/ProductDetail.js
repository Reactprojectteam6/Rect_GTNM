import React from 'react';
import Dashboard from './Dashboard';
import { connect } from 'react-redux';
import {UpdateProduct,getProductsShop} from '../../redux/shop_reducer';
import {getSubCategory} from '../../redux/home_reducer';

class ProductDetail extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {            
        }
    }
   componentWillMount()
   {
    this.props.getSubCategory();
    this.setState({
        product_name: this.props.productDetail.product_name,
        price: this.props.productDetail.price,
        quantity:this.props.productDetail.quantity,
        description:this.props.productDetail.description,
        image:this.props.productDetail.image,
        cat_id: this.props.productDetail.cat_id,
        id: this.props.productDetail.id
         }); 
     console.log(this.props.productDetail);
      //this.props.productDetail[0]=this.props.productDetail[0];
   }
    render()
    {
        let {subcategory,shop_id} = this.props;
        console.log(shop_id);
        let {product_name,price,quantity,description,image,cat_id,id} = this.state;
        console.log(this.state);
        return(
            <div>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <Dashboard/>
        </div>

        <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                <div >
                    <h3 style={{fontFamily:"'Times New Roman', Times, serif",color:"black",marginTop:"15px"}} >Chi tiết sản phẩm</h3>
                    <hr style={{width:"1000px",marginLeft:"7px",marginTop:"5px",backgroundColor:"#000000"}}></hr>
                </div >
                
                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{marginLeft:"20px"}}>
                        <img src={image}style={{width:"50%",marginLeft:"50px"}}/>
                        
                    </div>
                    <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style={{marginTop:"20px"}}>
                        <div >
                                <p style={{fontFamily:"'Times New Roman', Times, serif",fontSize:"21px"}}>Tên sản phẩm</p>
                                <div className="form-group">
                                    <input type="text"  class="form-control" value={product_name} onChange={e=>this.setState({product_name: e.target.value})}></input>    
                                </div>
                        </div>
                        <div >
                           <p style={{fontFamily:"'Times New Roman', Times, serif",fontSize:"21px"}}>Danh mục</p>
                            <div className="form-group">
                               <select  class="form-control" required="required" >
                                   {
                                       subcategory.length>0 &&
                                       subcategory.map(item=>{
                                       return(
                                        <option value={item.id} onChange={e=>this.setState({cat_id: e.target.value})}>{item.name}</option>
                                       )
                                       })
                                   }
                               </select> 
                            </div>
                                
                        </div>
                        <div >
                                <p style={{fontFamily:"'Times New Roman', Times, serif",fontSize:"21px"}}>Mô tả</p>
                                <div className="form-group">
                                    <textarea rows="2" cols="35"  class="form-control" value={description} onChange={e=>this.setState({description: e.target.value})}></textarea>
                                    
                                </div>
                               
                        </div>
                        
                        <div >
                                  <p style={{fontFamily:"'Times New Roman', Times, serif",fontSize:"21px"}}>Giá</p>
                                <div className="form-group">
                                    <input type="text"  class="form-control" value={price} onChange={e=>this.setState({price: e.target.value})}></input>    
                                
                                </div>
                                
                        </div>
                        <div >
                                <p style={{fontFamily:"'Times New Roman', Times, serif",fontSize:"21px"}}>Số lượng</p>
                                <div className="form-group">
                                    <input type="text"  class="form-control" value={quantity} onChange={e=>this.setState({quantity: e.target.value})}></input>
                                       
                                </div>
                                
                        </div>
                        
                        <br/>
                        <button type="button" class="btn btn-default"
                        onClick={e=>{
                            this.props.UpdateProduct(id,product_name,description,cat_id,price,quantity,true);
                            
                        }}
                        >Lưu lại và hiển thị</button>
                        &ensp;
                        <button type="button" class="btn btn-primary" style={{backgroundColor:"#B22222"}}
                        onClick={e=>{
                            this.props.UpdateProduct(id,product_name,description,cat_id,price,quantity,false);
                            
                        }
                    }
                        >Lưu lại và ẩn</button>   
                    </div>
             
            </div>
        </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        shop_id: state.shopState.shop_id,
        subcategory:state.homeState.subcategories,
        productDetail:state.shopState.productDetail,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getSubCategory:()=> dispatch(getSubCategory()),
        UpdateProduct: (id,product_name,description,cat_id,price,quantity,permission)=>dispatch(UpdateProduct(id,product_name,description,cat_id,price,quantity,permission)),
        getProductsShop: (shop_id)=>dispatch(getProductsShop(shop_id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail);