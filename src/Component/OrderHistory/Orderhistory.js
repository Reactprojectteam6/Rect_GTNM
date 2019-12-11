import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { getOrderOfUser,getOrder,getOrderDetail,cancelOrder} from '../../redux/order_reducer';
import {getAllProduct} from '../../redux/order_reducer';
import Moment from 'react-moment';
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
    {   this.props.getAllProduct();
        this.props.getOrderOfUser();
    }
    render()
    { let {list_order=[],currentUser,products=[]}=this.props;
    const numberOfItems = this.state.showMore ? this.state.finish : 4
      let {id}=this.state;
      console.log("products")
      console.log(products);
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
        <th>Sản phẩm</th>
        <th>Ngày Đặt Hàng</th>
        <th>Tổng cộng</th>
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
               <td>
                {
                  item.order_Details.map((item1,index)=>
                  products.length>0&&
                  products.map((item2,index)=>
                  { if(item2.id==item1.product_id)
                     return (
                    
                  
                      <img  style={{width:"50px",height:"50px"}}src={require('../../assets/'+item2.image)}
                              alt={item2.product_name} />
                     )


                  })
                  )
                }
              </td>
           <td><Moment format="DD/MM/YYYY">{item.date_create}</Moment></td>
           <td>{item.total}</td>     
           
              
               { item.status==1 &&
               <td>Đang xử lý</td>   
                }
               { item.status==2 &&
               <td>Đã duyệt đơn</td>   
                }
               { item.status==3 &&
               <td>Đã Hủy</td>   
                }

               <td> <button className="btn" onClick={e =>{
                             this.props.getOrderDetail(item.id);
                             this.props.getOrder(item.id);
                             
                            }
                            }><Link to={`/order/${item.id}`}>
                             <span><i class="fas fa-info-circle"></i></span> 
                              </Link></button>
                              &ensp;
                      {item.status==1&&

                        <button className="btn" onClick={e =>{
                             this.props.cancelOrder(item.id);
                             
                                    }
                            }>
                              <span><i class="fas fa-ban"></i></span>
                            </button>
                      }
                            </td>
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
          currentUser:state.loginState.currentUser,
          products:state.orderState.products,
      };
    }
const mapDispatchToProps = (dispatch) => {//store.dispatch(action)
        return {
          getOrderOfUser:() =>dispatch(getOrderOfUser()),
          getOrderDetail:(id)=>dispatch(getOrderDetail(id)),
          getOrder:(id)=>dispatch(getOrder(id)),
          getAllProduct:()=>dispatch(getAllProduct()),
          cancelOrder:(id)=>dispatch(cancelOrder(id))
           
      };
        }     
 export default connect(mapStateToProps,mapDispatchToProps)(Orderhistory);
    