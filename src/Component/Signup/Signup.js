import React from 'react';
import './Signup.css';
import {Link} from "react-router-dom";
import {signup} from "../../redux/signup_reducer";
import {connect} from "react-redux";
 class Signup extends React.Component  {
  constructor(props)
  {
    super(props);
    this.state={};
    this.onSubmit=this.onSubmit.bind(this);
  }
  render(){
    let {user_name,email,phone,password,password_confirm,address}= this.state;
      return (
          <div>
             <div class="container" style={{marginLeft:"200px"}}>
                 
                 <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                     <div className="bgLogin">
                      
                     <div style={{marginLeft:"220px"}}>
                     <div style={{color:"red",float:"left",marginRight:"5px",fontSize:"50px"}}>Đ</div>
                   <div  style={{color:"yellow",float:"left",marginRight:"5px",fontSize:"50px"}}>Ă</div>  
                 <div  style={{color:"greed",float:"left",marginRight:"5px",fontSize:"50px"}}>N</div>  
                 <div  style={{color:"pink",float:"left",marginRight:"5px",fontSize:"50px"}}>G</div>  
                 <div  style={{color:"blue",float:"left",marginRight:"5px",fontSize:"50px"}}>N</div> 
                  < div  style={{color:"yellow",float:"left",marginRight:"5px",fontSize:"50px"}}>K</div> 
               <div  style={{color:"red",float:"left",marginRight:"5px",fontSize:"50px"}}>Ý</div>  
              
               </div>
                        <input type="text" class="form-control name" placeholder="Tên của bạn " onChange={e => this.setState({user_name: e.target.value})} value={user_name} required />
                        <input type="text" class="form-control  email" placeholder="Email" onChange={e => this.setState({email: e.target.value})} value={email}required/>
                        <input type="text" class="form-control  name" placeholder="Phone " onChange={e => this.setState({phone: e.target.value})} value={phone}required/>
                        <input type="text" class="form-control name" placeholder="Address " onChange={e => this.setState({address: e.target.value})} value={address}required/>
                        <input type="password" class="form-control pass" placeholder="Nhập mật khẩu"  onChange={e => this.setState({password: e.target.value})} value={password}/>
                        <input type="password" class="form-control passconfirm " placeholder="Nhập lại mật khẩu"  onChange={e => this.setState({password_confirm: e.target.value})} value={password_confirm}required/>
                        
                        <button type="button" class="btn btn-default btnsignup" onClick={this.onSubmit}>ĐĂNG KÝ</button>
                        <h5 style={{marginLeft:"200px",marginTop:"20px",paddingBottom:"10px",color:"brown",fontFamily:"cursive"}} >
                            Bạn đã có tài khoản? &nbsp;
                            <Link to="./login" style={{fontFamily:"'Times New Roman', Times, serif",color:"brown",fontSize:"20px"}}>Đăng nhập ngay !</Link>
                        </h5>
                        
                     </div>
                 </div>
                 
             </div>
             
          </div>
    
  );
}



onSubmit(e) {
  e.preventDefault();
  let { user_name,email,phone,password,password_confirm,address } = this.state;//lay trang thai off state do qua email va password
  this.props.signup(user_name,email,phone,password,password_confirm ,address);
  this.setState({
    user_name:'',
    email: '',
    password: '',
    password_confirm:'',
    address:'',
    phone:''
  });
}
}

const mapStateToProps = (state) => {//tra state return ve tu reducer ve thanh prop
return {
  
};
}

const mapDispatchToProps = (dispatch) => {//store.dispatch(action)
return {
  signup: (user_name,email,phone,password,password_confirm,address) => dispatch(signup(user_name,email,phone, password,password_confirm,address))//action la login voi 2 tham so la email va password
};
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup);