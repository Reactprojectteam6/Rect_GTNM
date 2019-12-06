import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setOrder } from '../../redux/cart_reducer';
import Login from '../Login/Login';
import './Complete.css';
class Complete extends Component {
    constructor(props)
    {
        super(props);
        this.state = {};
        this.Order=this.Order.bind(this);
    }
    componentDidMount()
    { 
        this.setState({state:1});
        this.setState({user_id:this.props.currentUser.id});
        this.setState({order:this.props.cart});
        this.setState({total_payment:this.showTotalAmount(this.props.cart)});
        this.setState({address:this.props.currentUser.address,email:this.props.currentUser.email,phone:this.props.currentUser.phone})
    }
    render() {
    let {currentUser,cart=[],isloginSuccess=true}=this.props;
     let {order,user_id,state,address,email,phone,total_payment,payment_method,fullname} = this.state;
     console.log(this.state);
     console.log(currentUser.id);
        return (
          <div>
           {isloginSuccess==true &&
          <div>    
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"> 
         <h1 onLoad={e=> this.setState({order:cart})}>Hoàn thành đơn đặt hàng</h1>
         <form style={{marginLeft:"20px"}}>
         <label>UserName</label>
          <label className="form-control" >{currentUser.user_name} </label>  
           <br/>
           <label>Reicever</label>
         <input type="text" className="form-control"  onChange={e => this.setState({fullname: e.target.value})} />
      <br/>
         <label>receiving_address</label>
         <input type="text" className="form-control" value={address} onChange={e => this.setState({address: e.target.value})} />
      <br/>
       <label>email</label>
       <input type="text" className="form-control" value={email}onChange={e => this.setState({email: e.target.value})} />
      <br/>

     <label>phone</label>
     <input type="text" className="form-control" value={phone} onChange={e => this.setState({phone: e.target.value})} />
      <br/>
    <label>TotalPayment</label>
     <input type="text" value={this.showTotalAmount(cart)}  className="form-control" readonly="true"  />
     <br/>
     <label>Status</label>
     <input type="text" value="processing"   className="form-control" />
    
     <button type="button" className="btn btn-lg btn-primary" onClick={this.Order} style={{marginTop:"30px",backgroundColor:"#A52A2A"}} >Order</button>
         </form>    
         </div>
         <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8"> 
         { cart.length> 0 && <div>
             {
         <table >
                        <caption>List Order</caption>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Sản Phẩm</th>
                            <th>Giá</th>
                            <th>Số Lượng</th>
                            <th>Màu</th>
                            <th>Tổng Cộng</th>
                            <th></th>
                        </tr>
                    </thead>
                   
           { cart.length>0 &&
           cart.map((item,index) => {
                return (
                    <tr>
                    <th scope="row">
                    <img  style={{width:"40%"}}src={require('../../assets/'+item.product.image)}
                            alt={item.product_name} className="img-fluid z-depth-0" />
                   
                    </th>
                    <td style={{paddingLeft:"10px"}}>
                        <h5>
                            <strong>{item.product.product_name}</strong>
                        </h5>
                    </td>
                    <td style={{paddingLeft:"10px"}}>{item.product.price}Đ</td>
                    <td style={{paddingLeft:"10px"}}>
                    <span className="qty">{item.quantity}</span>
                    </td>
                <td>{item.name}</td>
                    <td>{this.showSubTotal(item.product.price, item.quantity)}Đ</td>
                    
                   </tr>
                 
                 
                );
            })
        }
        
       
       
        <tr>
        <td colSpan="3"></td>
        <td>
            <h4>
                <strong>Tổng Tiền</strong>
            </h4>
        </td>
        
               <td>
                    <h4>
                        <strong  >{this.showTotalAmount(cart)}Đ</strong>
                    </h4>
                </td>
               
        </tr>    
        </table>
             }
             </div>


    }
         <h3>Phương thức thanh toán</h3><br/>
         
         <button type="button" class="btn btn-default"><span><img className="img-responsive" style={{width:"100px",height:"60px",float:"left",marginRight:"10px"}} onClick={e=>{this.setState({payment_method:"1"})}}  src={require('../../assets/paypal.jpg')}alt=""/></span></button>&nbsp;
         <button type="button" class="btn btn-default"><span><img className="img-responsive" style={{width:"100px",height:"60px"}} onClick={e=>{this.setState({payment_method:"2"})}}  src={require('../../assets/vnpost.jpg')}alt=""/></span></button>
         
       
         
         </div>
         </div>
    } 

    {
        isloginSuccess==false &&
        <Login></Login>
    }
          </div>
 
        )
    }
    showSubTotal=(price,quantity)=>
    {return price*quantity;

    }
    showTotalAmount = (cart) => {
     
        var total = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                total += cart[i].product.price * cart[i].quantity;
            }
        }
        
        return total;
    }
    Order(e)
    {
        let {order,user_id,state,address,email,phone,total_payment,payment_method,fullname}=this.state;
        this.props.setOrder(order,user_id,state,address,email,phone,total_payment,payment_method,fullname);
        //this.props.deleteAllProductInCart();
    }
   
}
const mapStateToProps = state => {
return { cart:state.productState.productInCart,
        currentUser:state.loginState.currentUser,
        isloginSuccess:state.loginState.checkLogin
    }
}
const mapDispatchToProps = (dispatch) => {//store.dispatch(action)
    return {
    setOrder: (order,user_id,state,address,email,phone,total_payment,payment_method,fullname) => dispatch(setOrder(order,user_id,state,address,email,phone,total_payment,payment_method,fullname)),
    //deleteAllProductInCart:()=>dispatch(deleteAllProductInCart())
    //action la login voi 2 tham so la email va password
    };
    }

export default connect(mapStateToProps,mapDispatchToProps)(Complete);
