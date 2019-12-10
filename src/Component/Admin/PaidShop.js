import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';

class PaidShop extends Component {
    constructor(props)
    {
        super(props);
        this.state = {};
    }
    render() {
    
     let {bill}=this.props;
        return (
       
         <div className="col-xs-6 col-sm-6 col-md-3 col-lg-6">
         {bill!=null &&
          <div>
         <h1>Hóa đơn thanh toán</h1>
         <form style={{marginLeft:"20px"}}>
         <label>Tên cửa hàng</label>
          <label className="form-control">{bill.name}</label>  
           <br/>
         <label>Chử cửa hàng</label>
         <input type="text" className="form-control" value={bill.user_name} />
      <br/>
      <label>Email</label>
         <input type="text" className="form-control" value={bill.email} />
      <br/>
      <label>Số ĐT</label>
      <input type="text" className="form-control" value={bill.phone} />
      <br/>
      <label>Địa chỉ</label>
      <input type="text" className="form-control" value={bill.address} />
      <br/>
      <label>Phí thanh toán</label>
       <input type="text" className="form-control" value={bill.check_Paid_Shops[0].money} />
       <br/>  
      {bill.check_Paid_Shops.length>0&&
      <div>
       <label>Ngày thanh toán</label>
        <Moment format="DD/MM/YYYY" style={{marginLeft:"50px"}}>
       {bill.check_Paid_Shops[0].date_paid}
       </Moment>
       <br/>
       <label>Ngày hết hạn</label>
        <Moment format="DD/MM/YYYY" style={{marginLeft:"72px"}}>
       {bill.check_Paid_Shops[0].date_expired}
       </Moment>
       
       <br/>  
      
      </div>
      }
      </form>
      </div>
       }
        <div className="row">
       <button  type="button" style={{marginLeft:"100px",backgroundColor:"brown"}} className="btn btn-default" 
       ><Link to={`/admin/shops`} style={{color:"white"}}>Trở lại </Link></button>
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
        bill:state.adminState.bill,
         }
}

export default connect(mapStateToProps,mapDispatchToProps)(PaidShop);
