import React from 'react';
import Dashboard from './Dashboard';
import { connect } from 'react-redux';
import { Link ,Redirect} from "react-router-dom";
import {UpdatePermission, getProduct,getProductsShop} from '../../redux/shop_reducer.js';
import {getSubCategory} from '../../redux/home_reducer';

class ProductManage extends React.Component
{
    componentWillMount()
    {
        var shop_id = localStorage.getItem('shop_id');
        this.props.getProductsShop(shop_id);
    }
    render()
    {
        let {products=[]} = this.props;
        console.log("Product manage")
        console.log(products);
        return(
            <div>
                
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <Dashboard/>
                </div>
                
                
                <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9" style={{marginTop:"10px"}}>
                <h3>Quản lý sản phẩm</h3>
                    
                    <div class="row" style={{marginTop:"20px"}} >
                        <div class="input-group" style={{width:"250px",height:"35px",marginLeft:"15px"}}>
                            <input type="text" class="form-control" placeholder="Search for..."/>
                            <span class="input-group-btn">
                                <button class="btn btn-primary" type="button">
                                <i class="fas fa-search"></i>
                                </button>
                            </span>
                        </div>


                        
                        

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
                                   products.map((item,index)=>{
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

const mapDispatchToProps = (dispath) =>
{
    return{
        UpdatePermission:(id,permission)=>dispath(UpdatePermission(id,permission)),
        getProduct: (productDetail)=>dispath(getProduct(productDetail)),
        getProductsShop: (shop_id)=>dispath(getProductsShop(shop_id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductManage);