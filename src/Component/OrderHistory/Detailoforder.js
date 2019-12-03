import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';


class Detailoforder extends Component {
    constructor(props)
    {
        super(props);
        this.state = {};
    }
    render() {
    
     let {list_order_detail=[],currentUser,order,product=[]}=this.props;
     let {id}=this.state;
    console.log("product of component");
    console.log(this.props.list_order_detail);
    console.log(this.props.order);
        return (
          <div>
           
            <div>
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6"> 
         <h1>Hoàn thành đơn đặt hàng</h1>
         <form style={{marginLeft:"20px"}}>
         <label>người đặt</label>
          <label className="form-control" >{currentUser.user_name} </label>  
           <br/>
         <label>Người nhận</label>
         <input type="text" className="form-control" value={order[0].fullname} />
      <br/>
       <label>Phương thức thanh toán</label>
       <input type="text" className="form-control" value={order[0].name} />
      <br/>

     <label>Tổng cộng</label>
     <input type="text" className="form-control" value={order[0].total} />
      <br/>
    
     <label>Trạng thái</label>
     {this.props.order[0].status==1 && <div>
     <input type="text" value="Đang xử lý"  className="form-control" />
     </div>}
     {this.props.order[0].status==2 && <div>
     <input type="text" value="Đã duyệt đơn"  className="form-control" />
     </div>
     }
       {this.props.order[0].status==3 && <div>
     <input type="text" value="Đã hủy"  className="form-control" />
     </div>
     }
     <button type="button" className="btn btn-lg btn-primary" style={{marginTop:"30px",backgroundColor:"#A52A2A"}} ><Link to="./order_history">Back</Link></button>
         </form>    
         </div>
         <div class="col-xs-6 col-sm-6 col-md-3 col-lg-6"> 
         <table border="1">
                        <caption>List Order</caption>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Sản Phẩm</th>
                            <th>Giá</th>
                            <th>Số Lượng</th>
                             <th>Màu</th>
                            <th>Tổng Cộng</th>
                            
                        </tr>
                    </thead>
                   
           { this.props.list_order_detail.length>0&&
           this.props.list_order_detail.map((item, index) => {
              
                return (
                    <tr>
                      <td>{index}</td>
                    <td style={{paddingLeft:"10px"}}>
                        <h5>
                                               
                            <h5><strong>{item.product_name}</strong> </h5>
                         
                        
                      
                        </h5>
                    </td>
                    <td style={{paddingLeft:"10px"}}>{item.price}Đ</td>
                    <td style={{paddingLeft:"10px"}}>
                    <span className="qty">{item.quantity}</span>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price*item.quantity}Đ</td>
                    
                   </tr>
                 
                 
                );
            })
        }
        
       
       </table>
       
            
              
  
         </div>
          </div>
            
         </div>
      
 
        )
    }
    
   
}
const mapDispatchToProps = (dispatch) => {//store.dispatch(action)
  return {
 
};
  }     
const mapStateToProps = state => {
     
    return {
      
        currentUser:state.loginState.currentUser,
        list_order_detail:state.orderState.listOrderDetail,
        order:state.orderState.order,
         }
}

export default connect(mapStateToProps,mapDispatchToProps)(Detailoforder);
