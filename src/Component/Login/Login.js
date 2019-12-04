import React from 'react';
import './Login.css';
import {Link} from "react-router-dom";
import {login} from "../../redux/login_reducer";
import {connect} from "react-redux";
class Login extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {};
        this.onSubmit = this.onSubmit.bind(this);
      }
  render(){
    let {email, password} = this.state;//state co 2 trang thai la email va password
    let {isLoginPending, isLoginSuccess, loginError} = this.props;
      return (
          <div>
             
             <div class="container" style={{marginLeft:"200px"}}>
                 
                 <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="bgLogin">
                  <div style={{marginLeft:"200px"}}>
                  <div style={{color:"red",float:"left",marginRight:"5px",fontSize:"50px"}}>Đ</div>
                  <div  style={{color:"yellow",float:"left",marginRight:"5px",fontSize:"50px"}}>Ă</div>  
                 <div  style={{color:"greed",float:"left",marginRight:"5px",fontSize:"50px"}}>N</div>  
                 <div  style={{color:"pink",float:"left",marginRight:"5px",fontSize:"50px"}}>G</div>  
                 <div  style={{color:"blue",float:"left",marginRight:"5px",fontSize:"50px"}}>N</div> 
                  < div  style={{color:"yellow",float:"left",marginRight:"5px",fontSize:"50px"}}>H</div> 
               <div  style={{color:"red",float:"left",marginRight:"5px",fontSize:"50px"}}>Ậ</div>  
               <div  style={{color:"violet",float:"left",marginRight:"5px",fontSize:"50px"}}>P</div> 
               </div>
                 <br></br>   
                        <input type="text" class="form-control login" placeholder="email" onChange={e => this.setState({email: e.target.value})} value={email} />
                        <input type="password" class="form-control pass" placeholder="Mật khẩu" onChange={e => this.setState({password: e.target.value})} value={password}  />
                        
                        <div class="checkbox check">
                            <label>
                                <input type="checkbox" />
                                Ghi nhớ đăng nhập
                            </label>
                        </div>
                        
                        <button type="button" class="btn btn-default btnlogin" onClick={this.onSubmit} >ĐĂNG NHẬP</button>
                        <h6 >
                            <a href="#" className="href" >Quên mật khẩu ?</a>
                        </h6>
                        
                        <div class="row">
                            <h4 style={{float:"left",fontFamily:"'Times New Roman', Times, serif",color:" aliceblue",marginLeft:"220px",marginTop:"10px"}}>Đăng ký khác</h4>
                        </div>
                        <h5 style={{marginLeft:"200px",marginTop:"10px",paddingBottom:"10px",color:" aliceblue",fontFamily:"cursive"}}>
                            Bạn có tài khoản chưa? &nbsp;
                            <Link to="./signup" style={{fontFamily:"'Times New Roman', Times, serif",color:"aliceblue",fontSize:"20px"}}>Đăng ký ngay !</Link>
                        </h5>
                        
                     </div>
                 </div>
                 
             </div>
             
          </div>
    
  );
}
onSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;//lay trang thai off state do qua email va password
    this.props.login(email, password);//tao 1 props goi la login(email,password)
    this.setState({
      email: '',
      password: ''
    });
  }
  }
  
  const mapStateToProps = (state) => {//tra state return ve tu reducer ve thanh prop
   
  return {
    isLoginSuccess: state.loginState.isLoginSuccess,
  };
  }
  
  const mapDispatchToProps = (dispatch) => {//store.dispatch(action)
  return {
    login: (email, password) => dispatch(login(email, password)),//action la login voi 2 tham so la email va password
  };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);