import React, { Component } from 'react';
import { Link ,Redirect} from "react-router-dom";
import { connect } from 'react-redux';
import { checkLogin} from '../../redux/login_reducer';
import { getProductOnCart} from '../../redux/product_reducer';
class CartResult extends Component {
    constructor(props)
    {
        super(props);
        
    }
    render() {
        var { cart } = this.props;
        let{  isLogingSuccess}=this.props;
        console.log(isLogingSuccess);
        return (
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
                <td colSpan="3">
                    
                  <button type="button"
                    className="btn btn-default" style={{backgroundColor:"#A52A2A"}}
                    onClick={ e=>{
                          this.props.checkLogin();
                          this.props.getProductOnCart(cart);
  
                    }    
                    }
                    
                    > <Link to="/order" style={{color:"white"}}>Đặt hàng</Link> 
                         </button>
                </td>
            </tr>
        );
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
   

}
const mapStateToProps = state => {

    return {
        
        isLogingSuccess:state.loginState.checkLogin
    }
}
const mapDispatchToProps = (dispatch) => {//store.dispatch(action)
    return {
     checkLogin:()=>dispatch(checkLogin()),
     getProductOnCart:(cart)=>dispatch(getProductOnCart(cart))
    };
    }
export default connect(mapStateToProps,mapDispatchToProps)(CartResult);
