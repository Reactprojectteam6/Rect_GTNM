import React from 'react';
import AdminDashboard from './AdminDashboard';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {getAllUser,filter} from '../../redux/admin_reducer';
import {getUser,deleteUser,getUserByName} from '../../redux/admin_reducer';
class AdminUser extends React.Component  {
    constructor(props)
    {
        super(props);
        this.state = {
          showMore: false,
          finish:4,
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
       this.props.getAllUser();
    }
  render(){
      let{key=null}=this.state;
      let{users=[],currentUser}=this.props;
      const numberOfItems = this.state.showMore ? this.state.finish : 4
      return (
          <div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
               <AdminDashboard></AdminDashboard>

              </div>
      
                    <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                        <div >
                            <div >
                                <h2 style={{fontFamily:"'Times New Roman', Times, serif",marginLeft:"10px"}}>Admin>Danh sách người dùng </h2>
                                <hr style={{width:"800px",marginLeft:"7px",marginTop:"5px",backgroundColor:"#000000"}}></hr>
                            </div >
                            
                            <p style={{fontSize:"32px",fontFamily:"'Times New Roman', Times, serif",marginLeft:"40px",marginTop:"30px"}}>Danh sách người dùng</p>
                            <div className="row">
                            <input className="form-control" type="text" placeholder="Tìm kiếm" style={{width:"170px",marginTop:"20px",float:"left"}} onChange={e=>{this.setState({key:e.target.value})}}></input>
                            <button style={{width:"10%",marginTop:"20px",float:"left",marginRight:"50px",color:"black"}} onClick={e=>{this.props.getUserByName(this.state.key)}} className="form-control">Tìm</button>
                            <button style={{width:"10%",marginTop:"20px",float:"left"}} className="form-control"><Link to="/admin/new/user" style={{color:"black"}}>Thêm user</Link></button>
                            <select className="form-control" onChange={event=>{this.props.filter(event.target.value)}} style={{width:"100px",marginTop:"20px"}}>
                            <option selected style={{display:"none"}}>None</option>
                            <option>Tất cả</option>
                            <option>Shop</option>
                           <option >User</option>
                           <option>Admin</option>
                           </select>

                            </div>
                            <div className="row" style={{marginTop:"20px"}}>
                            
                                <table className="table table-striped" style={{fontSize:"20px",fontFamily:"Times New Roman', Times, serif"}}>
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>UserName</th>
                                    <th>Email</th>
                                    <th>Quyền hạn</th>
                                    <th>Hành Động</th>
                                </tr>
                            </thead>
                            <tbody>
                             {users.length>0 &&
                              users.slice(0, numberOfItems).map((item,i)=>
                              {
                            if( item.id!=currentUser.id)
                                
                              return(
                               <tr>
                                <td>{i} </td>
                                <td>{item.user_name}</td>
                                <td>{item.email}</td>
                                { item.role==1 &&
                                 <td>Người dùng</td>   
                                }
                               { item.role==2 &&
                                <td>Chủ Shop</td>   
                                 }
                              { item.role==3 &&
                              <td>Quản trị viên</td>   
                                }
                          <td> 
                              
                            <button className="btn" onClick={e =>{
                             this.props.detailUserAdmin(item);
                             
                            }
                            }><Link to={`/admin/user/${item.id}`}><span><i class="fas fa-info-circle"></i></span> </Link></button>
                              
                         &ensp;
                        <button className="btn" onClick={e =>{
                             this.props.deleteUser(item.id);
                             
                         } }><span><i class="far fa-trash-alt"></i></span></button>
                       </td>
                       </tr>)
                        }
                       
                        )

                             }   
                            </tbody>
                            </table>
                            <div className="button" style={{marginLeft:"300px"}}>
        <button onClick={()=> this.handleClick()}  type="button" className="btn btn-default" style={{color:"black",backgroundColor:"brown"}}>Xem thêm</button>
        </div>          
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
   
   
  );
}
}
const mapStateToProps = state => {
    return { users:state.adminState.users,
             currentUser:state.loginState.currentUser
            }
    }
    const mapDispatchToProps = (dispatch) => {//store.dispatch(action)
        return {
            getAllUser:()=>dispatch(getAllUser()),
            detailUserAdmin:(item)=>dispatch(getUser(item)),
            deleteUser:(id)=>dispatch(deleteUser(id)),
            getUserByName:(key)=>dispatch(getUserByName(key)),
            filter:(key)=>dispatch(filter(key))
        };
        }
    

export default connect(mapStateToProps,mapDispatchToProps) (AdminUser);
