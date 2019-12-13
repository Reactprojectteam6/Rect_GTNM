import React from 'react';
import AdminDashboard from './AdminDashboard';
import {getAllUser} from '../../redux/admin_reducer';
import {signup} from '../../redux/signup_reducer';
import { connect } from 'react-redux';
class AddUser extends React.Component  {
  constructor(props)
  {super(props);
   this.state={};


  }
  render(){
    let {user_name,email,phone,password,password_confirm,address}= this.state;
      return (
        <div >
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
               <AdminDashboard></AdminDashboard>
             </div>
         <div style={{paddingTop:"10px",marginLeft:"50px"}}>
           <h3 className="textTTCN" style={{fontFamily:"'Times New Roman', Times, serif"}}>Thêm mới User</h3>
           <hr style={{width:"700px",marginLeft:"10px",marginTop:"10px",backgroundColor:"#000000"}}></hr>
         </div>
         <div className="container">
             <div >
               <div>
                   <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{paddingLeft:"20px",marginTop:"10px"}}>
                       <div className="form-group">
                         <label style={{fontFamily:"'Times New Roman', Times, serif",fontSize:"18px"}} >Username: </label>
                         <input type="text" className="form-control"  name="Username"  placeholder="Trần Thu Sương" onChange={e=>{this.setState({user_name:e.target.value})}} />
                       </div>
                       <div className="form-group">
                         <label style={{fontFamily:"'Times New Roman', Times, serif",fontSize:"18px"}} >Email: </label>
                         <input type="text" className="form-control" name="Email" placeholder="thusuongtran15398@gmail.com" onChange={e=>{this.setState({email:e.target.value})}} />
                       </div>
                       <div className="form-group">
                         <label style={{fontFamily:"'Times New Roman', Times, serif",fontSize:"18px" }} >Địa chỉ: </label>
                         <input type="text" className="form-control" name="Address" placeholder="106 Nguyễn Lương Bằng , Liên Chiểu , ĐN" onChange={e=>{this.setState({address:e.target.value})}} />
                       </div>
                       <div className="form-group">
                         <label style={{fontFamily:"'Times New Roman', Times, serif",fontSize:"18px"}} >Số điện thoại: </label>
                         <input type="text" className="form-control" name="Address" placeholder="Nhập Số điện thoại..." onChange={e=>{this.setState({phone:e.target.value})}} />
                       </div>
                       <div className="form-group">
                         <label style={{fontFamily:"'Times New Roman', Times, serif",fontSize:"18px"}}>Password: </label>
                         <input type="password" className="form-control" name="Password" onChange={e=>{this.setState({password:e.target.value})}} />
                       </div>
                       <div className="form-group">
                         <label style={{fontFamily:"'Times New Roman', Times, serif",fontSize:"18px"}} >Password Confirmation: </label>
                         <input type="password" className="form-control" name="Password_Confimation"  onChange={e=>{this.setState({password_confirm:e.target.value})}} />
                       </div>
                           
                       <button  style={{paddingLeft:"2px",backgroundColor:"#A52A2A",marginLeft:"120px",marginTop:"23px",fontFamily:"'Times New Roman', Times, serif",fontSize:"18px",color:"white"}} type="submit" className="btn btn-default"
                       onClick={e=>{this.props.signup(user_name,email,phone,password,password_confirm,address);
                          this.props.getAllUser();
                       }}
                       >Thêm mới</button>
                   </div>
                 
                   </div>
                 
                  <div >
                <div>
                   
               </div>
             </div>
            </div>
           </div>
      </div>
  );
}
}
const mapDispatchToProps = (dispatch) => {//store.dispatch(action)
  return {
    //action la login voi 2 tham so la email va password
    signup:(user_name,email,phone,password,password_confirm,address)=>dispatch(signup(user_name,email,phone,password,password_confirm,address)),
    getAllUser:()=>dispatch(getAllUser())
  };
  }     
const mapStateToProps = state => {
return {

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddUser);

