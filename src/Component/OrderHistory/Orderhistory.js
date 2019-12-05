import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { getOrderOfUser,getOrder,getOrderDetail} from '../../redux/order_reducer';
//import {  getOrderDetail} from '../../redux/order_detail_reducer';
//import {getOrderById} from '../../redux/order_reducer';
class Orderhistory extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
          showMore: false,
          finish:4
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
        this.props.getOrderOfUser();
    }
    render()
    { let {list_order=[],currentUser}=this.props;
    const numberOfItems = this.state.showMore ? this.state.finish : 4
      let {id}=this.state;
        return (
   <div style={{marginLeft:"100px"}}>     
<h1 class="admin-title">Lịch sử đặt hàng</h1>
<hr/>
<div class="admin-content">
  <div class="row">
</div>
  <div class="row">
   {list_order.length>0 &&<div>
    <table className="table table-bordered">
      <tr>
        <th>STT</th>
        <th>Tên Khách Hàng</th>
        <th>Ngày Đặt Hàng</th>
        <th>Trạng Thái</th>
        <th>Hành Động</th>
      </tr>
       
  
     {
         list_order.slice(0, numberOfItems).map((item,i)=>
         {  console.log(item.id);
             return(
          
                <tr>  
               <td>{i}</td>
               <td>{currentUser.user_name}</td>
               <td>{item.date_create}</td>
               { item.status==1 &&
               <td>Đang xử lý</td>   
                }
               { item.status==2 &&
               <td>Đã duyệt đơn</td>   
                }
               { item.status==3 &&
               <td>Đã Hủy</td>   
                }

               <td> <button className="btn" style={{backgroundColor:"#A52A2A"}}onClick={e =>{
                             this.props.getOrderDetail(item.id);
                             this.props.getOrder(item.id);
                             
                            }
                            }><Link to={`/order/${item.id}`}>Detail</Link></button></td>
               </tr>
          
             )
         })
     }
     </table>
   </div>
   }
  </div>
  <div class="row">
  <div className="button" style={{marginLeft:"600px"}}>
        <button onClick={()=> this.handleClick()}  type="button" className="btn btn-default" style={{color:"black",backgroundColor:"brown"}}>Xem thêm</button>
        </div>
</div>
</div>
</div>
    
        )}
}
const mapStateToProps = (state) => {//tra state return ve tu reducer ve thanh prop
    
      return {
          list_order:state.orderState.ordersUser,
          currentUser:state.loginState.currentUser
      };
    }
const mapDispatchToProps = (dispatch) => {//store.dispatch(action)
        return {
          getOrderOfUser:() =>dispatch(getOrderOfUser()),
          getOrderDetail:(id)=>dispatch(getOrderDetail(id)),
          getOrder:(id)=>dispatch(getOrder(id)),
           
      };
        }     
 export default connect(mapStateToProps,mapDispatchToProps)(Orderhistory);
    