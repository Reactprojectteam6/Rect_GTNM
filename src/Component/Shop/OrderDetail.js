import React from 'react';
import Dashboard from './Dashboard';
import { connect } from 'react-redux';
import {getOrdersShop, DeleteOrder} from '../../redux/shop_reducer';

class OrderDetail extends React.Component
{
    render()
    {
        let {orderDetail=[]} = this.props;
        console.log("orderdetail")
        console.log(orderDetail)
        return(
            <div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <Dashboard/>
                </div>
                { orderDetail.length>0 &&
                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style={{marginTop:"10px"}}>
                    <h4>Thông tin đơn hàng</h4>
                    <hr/>
                    <p>Người đặt hàng</p>                                 
                    <input type="text" class="form-control" value={orderDetail[0].user_name}/>
                    <br/>
                    <p>Người nhận</p>                    
                    <input type="text" class="form-control" value={orderDetail[0].fullname}/>
                    <br/>
                    <p>Địa chỉ</p>                    
                    <input type="text" class="form-control" value={orderDetail[0].address}/>
                    <br/>
                    <p>Số điện thoại</p>                    
                    <input type="text" class="form-control" value={orderDetail[0].phone}/>
                    <br/>
                    <p>Trạng thái</p>
                    {
                        orderDetail[0].status == "1" && 
                        <input type="text" class="form-control" value="Đang xử lý"/>
                    }
                    {
                        orderDetail[0].status == "2" && 
                        <input type="text" class="form-control" value="Đã xử lý"/>
                    }
                    {
                        orderDetail[0].status == "3" && 
                        <input type="text" class="form-control" value="Đã hủy"/>
                    }
                    <br/>
                    <p>Phương thức thanh toán</p>
                    <input type="text" class="form-control" value={orderDetail[0].name} />
                    <br/>
                    {
                        orderDetail[0].status == "1" &&
                        <div>
                            <button type="button" class="btn btn-primary" style={{float:"right"}}>Xác nhận</button>
                            <button type="button" class="btn btn-warning">Hủy</button>
                        </div>
                    }
                    
                    

                </div>
    }
                
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{marginTop:"10px"}}>
                    <h4>Danh sách sản phẩm</h4>
                    <hr/>
                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Giá</th>
                                    <th>Số lượng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = (state) =>
{  console.log("hdfjdfh");
console.log( state.shopState.orderDetail)
    return{
        orderDetail: state.shopState.orderDetail
    }
}

const mapDispatchToProps = (dispath) =>
{
    return{
        getOrdersShop: (shop_id)=>dispath(getOrdersShop(shop_id)),
        DeleteOrder: (id)=>dispath(DeleteOrder(id)),
    }   
}

export default connect(mapStateToProps,mapDispatchToProps)(OrderDetail);