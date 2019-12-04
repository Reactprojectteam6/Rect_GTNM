import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setOrder } from '../../redux/order_reducer';
class Complete extends Component {
    constructor(props)
    {
        super(props);
        this.state = {};
        this.Order=this.Order.bind(this);
        // onChange={e => this.setState({user_id:currentUser.id})
    }
    componentDidMount()
    { 
        this.setState({state:0});
        this.setState({user_id:this.props.currentUser.id});
        this.setState({order:this.props.cart});
        this.setState({total_payment:this.showTotalAmount(this.props.cart)});
    }
    render() {
    
     let {currentUser,cart}=this.props;
     let {order,user_id,state,receiving_address,receiver,total_payment,note} = this.state;
     console.log(this.state);
     console.log(currentUser.id);
        return (
          <div>
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"> 
         <h1 onLoad={e=> this.setState({order:cart})}>Completing the order</h1>
         <form style={{marginLeft:"20px"}}>
         <label>UserName</label>
          <label className="form-control" >{currentUser.user_name} </label>  
           <br/>
         <label>Receiver</label>
         <input type="text" className="form-control" onChange={e => this.setState({receiver: e.target.value})} />
      <br/>
       <label>Receiving Address</label>
       <input type="text" className="form-control" onChange={e => this.setState({receiving_address: e.target.value})} />
      <br/>

     <label>Note</label>
     <input type="text" className="form-control" onChange={e => this.setState({note: e.target.value})} />
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
                            <th>Tổng Cộng</th>
                            <th></th>
                        </tr>
                    </thead>
                   
           {
           cart.map((item, index) => {
                return (
                    <tr>
                    <th scope="row">
                    <img  style={{width:"40%"}}src={require('../../assets/'+item.product.product_image)}
                            alt={item.product.name} className="img-fluid z-depth-0" />
                   
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
                    <td>{this.showSubTotal(item.product.price, item.quantity)}Đ</td>
                    
                   </tr>
                 
                 
                );
            })
        }
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
         </div>
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
        let {order,user_id,state,receiving_address,receiver,total_payment,note}=this.state;
        this.props.setOrder(order,user_id,state,receiving_address,receiver,total_payment,note);
    }
   
}
const mapStateToProps = state => {

    return {

        cart: state.cartState,
        currentUser:state.loginState.currentUser
    }
}
const mapDispatchToProps = (dispatch) => {//store.dispatch(action)
    return {
      setOrder: (order,user_id,state,receiving_address,receiver,total_payment,note) => dispatch(setOrder(order,user_id,state,receiving_address,receiver,total_payment,note))//action la login voi 2 tham so la email va password
    };
    }

export default connect(mapStateToProps,mapDispatchToProps)(Complete);
