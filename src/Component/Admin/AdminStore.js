import React from 'react';
import AdminDashboard from './AdminDashboard';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {getAllShop,getShopByName,getBill,getCheckPaidShop} from '../../redux/admin_reducer';
import Moment from 'react-moment';
class AdminStore extends React.Component  {
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
       this.props.getAllShop();
   }
  render(){
      let{shops=[]}=this.props;
      let{key}=this.props;
      const numberOfItems = this.state.showMore ? this.state.finish : 4
      return (
          <div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
               <AdminDashboard></AdminDashboard>
                </div>
                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
              <div className="row">
                 
                        <div >
                            <div >
                                <h2 style={{fontFamily:"'Times New Roman', Times, serif"}}>Admin>Cửa hàng </h2>
                                <hr style={{width:"800px",marginLeft:"7px",marginTop:"5px",backgroundColor:"#000000"}}></hr>
                            </div >
                            
                            <p style={{fontSize:"32px",fontFamily:"'Times New Roman', Times, serif",marginTop:"30px"}}>Cửa hàng</p>
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
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                            {shops.length>0&&
                               shops.slice(0, numberOfItems).map((item,i)=>
                             item.check_Paid_Shops.map((item1,j)=>
                             {
                             return(
                                <tr>
                                  <td>{i}</td>
                                  <td>{item.shop_name}</td>
                                   <td>{item.user_name}</td>
                                  <td> <Moment format="DD/MM/YYYY">
                                   {item1.date_paid}
                                   </Moment>
                                   </td>
                                   <td> <Moment format="DD/MM/YYYY">
                                   {item1.date_expired}
                                   </Moment>
                                   </td>
                                  <td>{item1.money}</td>
                                  
                                  <td>
                                  <button className="btn" onClick={e =>{
                              this.props.getBill(item,item1.id);
                              
                             }
                             }><Link to={`/admin/store/${item.id}`}><span><i class="fas fa-info-circle"></i></span> </Link></button>
 
 
                                  </td>
                                </tr>
 
 
                             
                             )
                        })

                             
                             )


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
    return {shops:state.adminState.shops,
            
            }
    }
    const mapDispatchToProps = (dispatch) => {//store.dispatch(action)
        return {
         getAllShop:()=>dispatch(getAllShop()),
         getShopByName:(key)=>dispatch(getShopByName(key)),
         getBill:(item,id)=>dispatch(getBill(item,id)),
        };
        }
    
export default connect(mapStateToProps,mapDispatchToProps)(AdminStore);
