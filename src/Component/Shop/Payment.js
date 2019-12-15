import React from 'react';
import Dashboard from './Dashboard';
import { connect } from 'react-redux';
import {getListPayment,getPaypalAccountOfWeb,setPaymentforweb} from '../../redux/shop_reducer';
import Moment from 'react-moment';
import axios from 'axios';
import PaypalButton from '../Paypal/PaypalButton.js';
class Payment extends React.Component
{  constructor(props)
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
       this.props.getPaymentOfShop();
       this.props.getPaypalAccountOfWeb();
   }
  render(){
      let{list_payments=[],paypalacc=[]}=this.props;
      let{key}=this.props;
      const numberOfItems = this.state.showMore ? this.state.finish : 4;
      //payment for web
    
      const CLIENT = {
        sandbox:paypalacc.sandbox,
        production:paypalacc.production,
        };
        const ENV = process.env.NODE_ENV === 'production'
          ? 'production'
          : 'sandbox'; 
          const onSuccess = (payment) =>
          { alert("giao dich thanh cong!!!");
            console.log('Successful payment!', payment);
          }
          const onError = (error) =>
            console.log('Erroneous payment OR failed to load script!', error);
          const onCancel = (data) =>
            console.log('Cancelled payment!', data);  
        
      return (
          <div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <Dashboard></Dashboard>
                </div>
                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
              <div className="row">
                 
                        <div >
                            <div >
                                <h2 style={{fontFamily:"'Times New Roman', Times, serif"}}> Shop>Thanh Toán </h2>
                                <hr style={{width:"800px",marginLeft:"7px",marginTop:"5px",backgroundColor:"#000000"}}></hr>
                                <h2 style={{fontFamily:"'Times New Roman', Times, serif"}}>Thanh toán </h2>
                                {paypalacc.length>0&&
                                 paypalacc.map((item3,i)=>
                                 {
                                 const CLIENT = {
                                  sandbox:item3.sandbox,
                                  production:item3.production,
                                  };
                                  const ENV = process.env.NODE_ENV === 'production'
                                    ? 'production'
                                    : 'sandbox'; 
                                    const onSuccess = (payment) =>
                                    { alert("giao dich thanh cong!!!");
                                      console.log('Successful payment!', payment);
                                      this.props.setPaymentforWeb();
                                    }
                                    const onError = (error) =>
                                      console.log('Erroneous payment OR failed to load script!', error);
                                    const onCancel = (data) =>
                                      console.log('Cancelled payment!', data);  
                                 return( 
                                <PaypalButton
                                client={CLIENT}
                                env={ENV}
                                commit={true}
                                currency={'USD'}
                                total={200000}
                                onSuccess={onSuccess}
                                onError={onError}
                                onCancel={onCancel}/>
                                 )
                                 })}
                               </div >
                            
                            <p style={{fontSize:"32px",fontFamily:"'Times New Roman', Times, serif",marginTop:"30px"}}>Lịch sử thanh toán</p>
                            <div className="row">
                            <input className="form-control" type="text" placeholder="Tìm kiếm" style={{width:"170px",marginTop:"20px",float:"left"}} onChange={e=>{this.setState({key:e.target.value})}}></input>
                            <button style={{width:"10%",marginTop:"20px",float:"left",marginRight:"50px",color:"black"}} onClick={e=>{this.props.getShopByName(this.state.key)}} className="form-control">Tìm</button>
                            </div>
                            <div className="row" style={{marginTop:"20px"}}>
                            
                                <table className="table table-striped" style={{fontSize:"20px",fontFamily:"Times New Roman', Times, serif"}}>
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên cửa hàng</th>
                                    <th>Tên chủ cửa hàng</th>
                                    <th>Ngày thanh toán</th>
                                    <th>Ngày hết hạn</th>
                                    <th>Phí thanh toán</th>
                                </tr>
                            </thead>
                            <tbody>
                            {list_payments.length>0&&
                               list_payments.slice(0, numberOfItems).map((item,i)=>
                              {
                             return(
                                <tr>
                                  <td>{i}</td>
                                  <td>{item.shop_name}</td>
                                   <td>{item.user_name}</td>
                                  <td> <Moment format="DD/MM/YYYY">
                                   {item.date_paid}
                                   </Moment>
                                   </td>
                                   <td> <Moment format="DD/MM/YYYY">
                                   {item.date_expired}
                                   </Moment>
                                   </td>
                                  <td>{item.money}</td>
                                </tr>
 
 
                             
                             )
                        })

                             
                             


                             }


                            </tbody>
                            </table>
                                </div>
                            </div>
                            
                            <div className="button" style={{marginLeft:"300px"}}>
        <button onClick={()=> this.handleClick()}  type="button" className="btn btn-default" style={{color:"black",backgroundColor:"brown"}}>Xem thêm</button>
        </div>                
                        </div>
                    </div>
              
              </div>
           
  );
}
}
const mapStateToProps = state => {
    return {list_payments:state.shopState.list_payments,
            paypalacc:state.shopState.webpaypal
            }
    }
    const mapDispatchToProps = (dispatch) => {//store.dispatch(action)
        return {
          getPaymentOfShop:()=>dispatch(getListPayment()),
          getPaypalAccountOfWeb:()=>dispatch(getPaypalAccountOfWeb()),
          setPaymentforWeb:()=>dispatch(setPaymentforweb())
        };
        }
    
export default connect(mapStateToProps,mapDispatchToProps)(Payment);
