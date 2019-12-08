import React from 'react';
import AdminDashboard from './AdminDashboard';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {getAllShop,getShopByName} from '../../redux/admin_reducer';
import Moment from 'react-moment';
class AdminStore extends React.Component  {
    constructor(props)
    { super(props);
      this.state={};
   }
   componentWillMount()
   {
       this.props.getAllShop();
   }
  render(){
      let{shops=[]}=this.props;
      let{key}=this.props;
      return (
          <div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
               <AdminDashboard></AdminDashboard>
                </div>
                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
              <div className="row">
                 
                        <div >
                            <div >
                                <h2 style={{fontFamily:"'Times New Roman', Times, serif",marginLeft:"10px"}}>Admin>Cửa hàng </h2>
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
                             shops.map((item,i)=>
                             {
       
                            
                            
                             return(
                               <tr>
                                 <td>{i}</td>
                                 <td>{item.name}</td>
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
                                 
                                 <td>
                                 <button className="btn" onClick={e =>{
                             //this.props.detailUserAdmin(item);
                             
                            }
                            }><Link to={`/admin/user/${item.id}`}><span><i class="fas fa-info-circle"></i></span> </Link></button>
                              
                         &ensp;
                        <button className="btn" onClick={e =>{
                             //this.props.deleteUser(item.id);
                             //this.props.getAllUser();
                             
                         } }><span><i class="far fa-trash-alt"></i></span></button>


                                 </td>
                               </tr>


                             )
                             }
                             
                             )


                             }


                            </tbody>
                            </table>
                                </div>
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
         getShopByName:(key)=>dispatch(getShopByName(key))
        };
        }
    
export default connect(mapStateToProps,mapDispatchToProps)(AdminStore);
