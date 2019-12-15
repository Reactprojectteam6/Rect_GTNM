import React from 'react';
import Dashboard from './Dashboard';
import { connect } from 'react-redux';
import { Link ,Redirect} from "react-router-dom";
import {UpdatePermission, getProduct,getProductsShop,searchProduct} from '../../redux/shop_reducer.js';
import {getSubCategory} from '../../redux/home_reducer';

class ProductManage extends React.Component
{    constructor()
    {
        super();
        this.state = {
            showMore: false,
            finish:4,
          }
    }
    handleClick() {
        this.setState({showMore: true})
        this.setState((prevState) => ({
        finish: prevState.finish + 4
        }));
      }
    componentWillMount()
    {
        var shop_id = localStorage.getItem('shop_id');
        this.props.getProductsShop(shop_id);
        this.setState({shop_id:shop_id});
    }
    render()
    {
        let {products=[]} = this.props;
        let{key,shop_id}=this.state;
        console.log("Product manage")
        console.log(products);
        const numberOfItems = this.state.showMore ? this.state.finish : 4
        return(
            <div>
                
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <Dashboard/>
                </div>
                
                
                <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9" style={{marginTop:"10px"}}>
                <h3>Quản lý sản phẩm</h3>
                    
                    <div class="row" style={{marginTop:"20px"}} >
                        <div class="input-group" style={{width:"250px",height:"35px",marginLeft:"15px"}}>
                            <input type="text" class="form-control" placeholder="Search for..." onChange={e=>{this.setState({key:e.target.value})}}/>
                            <span class="input-group-btn">
                                <button class="btn btn-primary" type="button" onClick={e=>{this.props.searchProduct(key)}}>
                                <i class="fas fa-search"></i>
                                </button>
                            </span>
                           

                        </div>
                        <button class="btn btn-default" type="button" onClick={e=>{this.props.getProductsShop(shop_id)}} style={{marginLeft:"15px",marginTop:"10px"}}>
                                Tất cả sản phẩm
                        </button>


                        
                        

                        <button type="button" class="btn btn-default" style={{float:"right",height:"35px",marginRight:"15px"}}>
                            <Link to="/shop/products/excel">
                            <span  >
                            <i class="fas fa-folder-plus"></i>
                            </span>
                            Thêm nhiều sản phẩm
                            </Link>
                        </button>
                        <button type="button" class="btn btn-success" style={{float:"right",height:"35px", marginRight:"5px"}} >
                            <Link to="/shop/products/new" style={{color:"white"}} >
                            <span>
                            <i class="fas fa-plus"></i>
                            </span>
                            Thêm một sản phẩm
                            </Link>
                        </button>                       
                        
                    </div>
                    
                    
                    <div class="panel panel-default" style={{marginTop:"20px"}}>
                        <div class="panel-body">
                           
                           <table class="table table-striped table-hover">
                               <thead>
                                   <tr>
                                       <th>STT</th>
                                       <th>Tên sản phẩm</th>
                                       <th>Phân loại</th>
                                       <th>Giá</th>
                                       <th>Số lượng</th>
                                       <th>Action</th>
                                   </tr>
                               </thead>
                               <tbody>
                                   {
                                       products.length>0&&
                                       products.slice(0, numberOfItems).map((item,index)=>{
                                       return(
                                           <tr>
                                               <td>{index+1}</td>
                                               <td style={{width:"400px"}} >{item.product_name}</td>
                                               <td>{item.name}</td>
                                                <td>{item.price}</td>
                                                <td>{item.quantity}</td>
                                                <td>
                                                        <button type="button" className="btn btn-default" >
                                                            <Link onClick={e=>{this.props.getProduct(item)}} to="/shop/products/detail" >
                                                            <span>
                                                            <i className="fas fa-info-circle"></i>
                                                            </span>
                                                            </Link>
                                                        </button>
                                                        &ensp;
                                                        <button type="button" className="btn btn-default" onClick={e=>this.props.UpdatePermission(item.id,!item.permission)}>
                                                            <span>
                                                            {
                                                                item.permission == true &&
                                                                <i class="fas fa-eye"></i>
                                                            }
                                                            {
                                                                item.permission == false &&
                                                                <i class="fas fa-eye-slash"></i>
                                                            }
                                                            </span>
                                                        </button>
                                                </td>
                                           </tr>
                                       )
                                   })}
                               </tbody>
                           </table>
                           
                        </div>
                    </div>
                    <div className="button" style={{marginLeft:"300px"}}>
        <button onClick={()=> this.handleClick()}  type="button" className="btn btn-default" style={{color:"black",backgroundColor:"brown"}}>Xem thêm</button>
        </div>                    
                    
                </div>
                


            </div>
        );
    }
}
const mapStateToProps = (state) =>
{
    var isShop = localStorage.getItem("shop_id")
    return{
       products:state.shopState.products,       
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return{
        UpdatePermission:(id,permission)=>dispatch(UpdatePermission(id,permission)),
        getProduct: (productDetail)=>dispatch(getProduct(productDetail)),
        getProductsShop: (shop_id)=>dispatch(getProductsShop(shop_id)),
        searchProduct:(key)=>dispatch(searchProduct(key))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductManage);