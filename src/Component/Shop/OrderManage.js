import React from 'react';
import Dashboard from './Dashboard';
import { connect } from 'react-redux';
import {getOrdersShop, DeleteOrder, getOrderByID} from '../../redux/shop_reducer';
import './OrderManage.css';
import { Link ,Redirect} from "react-router-dom";


class OrderManage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }
    componentWillMount()
    {
        var shop_id = localStorage.getItem("shop_id");
        this.props.getOrdersShop(shop_id);
    }
    render()
    {
        console.log("Orders")
        //console.log(products);
        let{orders,products} = this.props;
        console.log("products");
        console.log(products);
        return(
            <div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <Dashboard/>
                </div>
            
                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                    
                    <div role="tabpanel">
                        <br/>
                        <ul className="nav nav-tabs" role="tablist">
                            <li role="presentation" className="active">
                                <a href="#home" aria-controls="home" role="tab" data-toggle="tab">Tất cả</a>
                            </li>
                            <li role="presentation">
                                <a href="#tab1" aria-controls="tab" role="tab" data-toggle="tab">Đang xử lý</a>
                            </li>
                            <li role="presentation">
                                <a href="#tab2" aria-controls="tab" role="tab" data-toggle="tab">Đã xác nhận</a>
                            </li>
                            <li role="presentation">
                                <a href="#tab3" aria-controls="tab" role="tab" data-toggle="tab">Đã hủy</a>
                            </li>
                        </ul>
                    
                    
                        <div className="tab-content">
                            <div role="tabpanel" className="tab-pane active" id="home">
                                
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Mã đơn hàng</th>
                                            <th>Tên khách hàng</th>
                                            <th>Sản phẩm</th>
                                            <th>Ngày đặt hàng</th>
                                            <th>Tình trạng</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map(item=>{
                                            return(
                                                
                                                <tr>
                                                    <td>{item.id}</td>
                                                    <td>{item.user_name}</td>
                                                    <td>
                                                        {
                                                            item.order_Details.map((i,index)=>
                                                                products.length>0 &&
                                                                products.map((k,index)=>{
                                                                    if(i.product_id == k.id)
                                                                    
                                                                       return(
                                                                           <img src={k.image}
                                                                            alt={k.product_name} 
                                                                            style={{width:"50px",height:"50px"}}
                                                                            />
                                                                       )
                                                                    
                                                                }
                                                                
                                                            )
                                                            )
                                                        }
                                                    </td>
                                                    <td>{item.date_create}</td>
                                                    {item.status=="1" && <td>
                                                            Đang xử lý          
                                                        </td>}
                                                    {item.status=="2" && <td>
                                                        Đã xử lý       
                                                    </td>}
                                                    {item.status=="3" && <td>
                                                        Đã hủy          
                                                    </td>}
                                                    <td>
                                                        
                                                        <button type="button" className="btn btn-default" >
                                                                <Link to="/shop/order/detail" onClick={e=>this.props.getOrderByID(item.id)}>
                                                                <span>
                                                                <i className="fas fa-info-circle"></i>
                                                                </span>
                                                                </Link>
                                                        </button>
                                                        &ensp;
                                                        <button type="button" className="btn btn-default" onClick={e=>this.props.DeleteOrder(item.id)}>
                                                            <span>
                                                            <i className="far fa-trash-alt"></i>
                                                            </span>
                                                        </button>
                                                        
                                                    </td>
                                                </tr>
                                                
                                            )
                                        })
                                    }
                                    </tbody>
                                </table>
                                
                            </div>
                            <div role="tabpanel" class="tab-pane" id="tab1">
                                <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Mã đơn hàng</th>
                                                <th>Tên khách hàng</th>
                                                <th>Sản phẩm</th>
                                                <th>Ngày đặt hàng</th>
                                                <th>Tình trạng</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orders.map(item=>{
                                                if(item.status=="1")
                                                return(
                                                    
                                                    <tr>
                                                        <td>{item.id}</td>
                                                        <td>{item.user_name}</td>
                                                        <td>
                                                            {
                                                                item.order_Details.map((i,index)=>
                                                                    products.length>0 &&
                                                                    products.map((k,index)=>{
                                                                        if(i.product_id == k.id)
                                                                        
                                                                        return(
                                                                            <img src={k.image}
                                                                                alt={k.product_name} 
                                                                                style={{width:"50px",height:"50px"}}
                                                                                />
                                                                        )
                                                                        
                                                                    }
                                                                    
                                                                )
                                                                )
                                                            }
                                                        </td>
                                                        <td>{item.date_create}</td>
                                                        <td>Đang xử lý</td>
                                                        <td>
                                                            
                                                            <button type="button" className="btn btn-default">
                                                                <Link to="/shop/order/detail" onClick={e=>this.props.getOrderByID(item.id)}>
                                                                <span>
                                                                <i className="fas fa-info-circle"></i>
                                                                </span>
                                                                </Link>
                                                            </button>
                                                            &ensp;
                                                            <button type="button" className="btn btn-default" onClick={e=>this.props.DeleteOrder(item.id)}>
                                                                <span>
                                                                <i className="far fa-trash-alt"></i>
                                                                </span>
                                                            </button>
                                                            
                                                        </td>
                                                    </tr>
                                                    
                                                )
                                            })
                                        }
                                        </tbody>
                                    </table>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="tab2">
                            <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Mã đơn hàng</th>
                                                <th>Tên khách hàng</th>
                                                <th>Sản phẩm</th>
                                                <th>Ngày đặt hàng</th>
                                                <th>Tình trạng</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orders.map(item=>{
                                                if(item.status=="2")
                                                return(
                                                    
                                                    <tr>
                                                        <td>{item.id}</td>
                                                        <td>{item.user_name}</td>
                                                        <td>
                                                            {
                                                                item.order_Details.map((i,index)=>
                                                                    products.length>0 &&
                                                                    products.map((k,index)=>{
                                                                        if(i.product_id == k.id)
                                                                        
                                                                        return(
                                                                            <img src={k.image}
                                                                                alt={k.product_name} 
                                                                                style={{width:"50px",height:"50px"}}
                                                                                />
                                                                        )
                                                                        
                                                                    }
                                                                    
                                                                )
                                                                )
                                                            }
                                                        </td>
                                                        <td>{item.date_create}</td>
                                                        <td>Đã xử lý</td>
                                                        <td>
                                                            
                                                            <button type="button" className="btn btn-default">
                                                                <Link to="/shop/order/detail" onClick={e=>this.props.getOrderByID(item.id)}>
                                                                <span>
                                                                <i className="fas fa-info-circle"></i>
                                                                </span>
                                                                </Link>
                                                            </button>
                                                            &ensp;
                                                            <button type="button" className="btn btn-default" onClick={e=>this.props.DeleteOrder(item.id)}>
                                                                <span>
                                                                <i className="far fa-trash-alt"></i>
                                                                </span>
                                                            </button>
                                                            
                                                        </td>
                                                    </tr>
                                                    
                                                )
                                            })
                                        }
                                        </tbody>
                                    </table>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="tab3">
                            <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Mã đơn hàng</th>
                                                <th>Tên khách hàng</th>
                                                <th>Sản phẩm</th>
                                                <th>Ngày đặt hàng</th>
                                                <th>Tình trạng</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orders.map(item=>{
                                                if(item.status=="3")
                                                return(
                                                    
                                                    <tr>
                                                        <td>{item.id}</td>
                                                        <td>{item.user_name}</td>
                                                        <td>
                                                            {
                                                                item.order_Details.map((i,index)=>
                                                                    products.length>0 &&
                                                                    products.map((k,index)=>{
                                                                        if(i.product_id == k.id)
                                                                        
                                                                        return(
                                                                            <img src={k.image}
                                                                                alt={k.product_name} 
                                                                                style={{width:"50px",height:"50px"}}
                                                                                />
                                                                        )
                                                                        
                                                                    }
                                                                    
                                                                )
                                                                )
                                                            }
                                                        </td>
                                                        <td>{item.date_create}</td>
                                                        <td>Đã hủy</td>
                                                        <td>
                                                            
                                                            <button type="button" className="btn btn-default">
                                                                <Link to="/shop/order/detail">
                                                                <span>
                                                                <i className="fas fa-info-circle"></i>
                                                                </span>
                                                                </Link>
                                                            </button>
                                                            &ensp;
                                                            <button type="button" className="btn btn-default">
                                                                <span>
                                                                <i className="far fa-trash-alt"></i>
                                                                </span>
                                                            </button>
                                                            
                                                        </td>
                                                    </tr>
                                                    
                                                )
                                            })
                                        }
                                        </tbody>
                                    </table>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
        
        
        
    }
}

const mapStateToProps = (state) =>
{
    return{
        OrderDetail: state.shopState.orderDetail,
        orders: state.shopState.orders,
        products: state.shopState.products
    }
}

const mapDispatchToProps = (dispath) =>
{
    return{
        getOrdersShop: (shop_id)=>dispath(getOrdersShop(shop_id)),
        DeleteOrder: (id)=>dispath(DeleteOrder(id)),
        getOrderByID: (id)=>dispath(getOrderByID(id))
    }   
}

export default connect(mapStateToProps,mapDispatchToProps)(OrderManage);