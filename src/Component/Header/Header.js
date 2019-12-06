import React, { Component } from 'react';
import { Link ,Redirect} from "react-router-dom";
import './Header.css';
import { connect } from 'react-redux';
import {logout} from '../../redux/login_reducer';
import { getProductByName} from '../../redux/search_reducer';
class Header extends Component {
  constructor(props)
  {
    super(props);
    this.state = {};
    this.onSubmit=this.onSubmit.bind(this);
    this.onLogout=this.onLogout.bind(this);
  }
    render() {
      console.log(this.props);
      let {product_name} = this.state;
      let { isLoginSuccess,list_product_get_by_name,currentUser} = this.props;
      console.log("currentuser");
      console.log(currentUser);
        return ( 
        
  <header className="header-layout">
   <div className="row">
    <div className="header-top">
      <div className="container-fluid">
        <div className="row clearfix">
          <div className="col-md-4 col-xs-12 text-center">
           <div className="col-md-8">
           <div className="logo-store" style={{float:"left"}}>
              <a href="#"><img style={{paddingLeft:"10px"}} src={require('./logo.png') }alt=""/></a>
             
            </div>
           </div>
            <div className="col-md-4">
            <button style={{width:"80px",height:"35px",color:"black",borderRadius:"10px",borderColor:"brown",marginTop:"20px"}}>Shop</button>
            </div>
              
          </div>
         
         
          <div className="col-md-5 col-sm-8 col-xs-10">
         <div className="input-group">
        
              <input type="text" name="" id="input" className="form-control" onChange={e => this.setState({product_name: e.target.value})} value={product_name} />
                  <span className="input-group-btn" >
                  <button type="submit" className="btn btn-default" onClick={this.onSubmit} ><Link to='/search'>Search</Link></button>
                   </span>
            </div>
         </div>
         { !isLoginSuccess&& <div>
         <div className="col-md-3 col-sm-2 col-xs-2 hidden-xs hidden-sm btn-sign-group">
              <ul className="nav navbar-right list-inline" style={{marginRight: "100px"}}>
                <li>
              
               <button type="button" className="btn"> <Link to='/signup'>Đăng ký</Link></button>
               </li>
                <li>
               
                <button type="button" className="btn"><Link to='/login'>Đăng nhập</Link></button>
                </li>
              </ul>
          </div>
          </div>
         
         }
         { isLoginSuccess &&
              <div class="col-md-3 col-sm-2 col-xs-2 btn-sign-group">
              <div class="nav navbar-right">
              <img src={require('../../assets/chonglee.jpg')} alt="Avatar" class="avatar" style={{marginRight:"20px"}}/>
              <ul class="nav navbar-right" style={{marginRight:"50px"}}>
                <li class="dropdown">
                  <button class="btn dropdown-toggle btn-account"
                    data-toggle="dropdown">
                    {currentUser.user_name}
                    <span class="glyphicon glyphicon-user pull-right"></span>
                  </button>
                  <ul class="dropdown-menu">
                  <li>
                     <Link to={`/profile/${currentUser.id}`} >Cá nhân
                        <span class="glyphicon glyphicon-stats pull-right">
                        </span>
                     </Link>
                    </li>
                    <li>
                      <Link to={`/orderhistory/${currentUser.id}`}>Lịch sử đặt hàng
                      
                        <span class="glyphicon glyphicon-cog pull-right">
                        </span>
                     </Link>
                    </li>
                    <li>
                    {currentUser.role==3 &&
                     <Link to="/admin" >
                       Admin
                       <span class="glyphicon glyphicon-user pull-right"></span>
                     </Link>

                    
  
                      }
                      </li>
                    <li class="divider"></li>
                    
                    <li>
                        <a href='#' onClick={this.onLogout}>Đăng xuất
                        <span class="glyphicon glyphicon-log-out pull-right">
                        </span>
                        </a>
                    </li>
                    
                    </ul>
                  
                </li>
              </ul>  
              </div>
            </div>
        
                    }
        
         
         
         
     <div className="header-bottom">
      <nav className="nav navbar-custom navbar-static">
        <div className="navbar-header">
          <button className="navbar-toggle" type="button" data-toggle="collapse"
            data-target=".js-navbar-collapse">
            <span className="sr-only"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
         {/* <span className="navbar-brand">Style Shop</span>*/}
        </div>
        <div className="collapse navbar-collapse js-navbar-collapse">
          <ul className="nav navbar-nav">
          <li>
              <Link to='/home'>StyleShop</Link>
            </li>
            <li>
            <Link to='/recently_viewed'>Sản phẩm xem gần đây</Link>
            </li>
            <li>
            <Link to='/about'>Giới thiệu</Link>
             
            </li>
         
            <li>
            <Link to='/help'>Giúp đỡ</Link>
               
            </li>
            <li>
            <Link to='/contact'>Liên lạc</Link>
            </li>
          </ul>
          <ul className="nav navbar-right link-cart" style={{marginRight:"100px",marginTop:"20px"}}>
            <li className="cart-text"> 
            <button type="button" className="btn btn-default btn-sm">
             <span className="glyphicon glyphicon-shopping-cart"></span> <Link to="/cart" >Cart</Link></button></li>
          </ul>
        </div>
      </nav>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div>
    
   </div>

   </header>
   
);
}
onLogout(e)
{
  e.preventDefault();
  this.props.logout();
}
onSubmit(e)
{ 
  e.preventDefault();
  let { product_name } = this.state;//lay trang thai off state do qua email va password
  this.props.getProductByName(product_name);//tao 1 props goi la login(email,password)
  this.setState({
    product_name: '',
   
  });
 // {this.props.list_product_get_by_name!=[] && <Redirect to="search"></Redirect> } 
}
}

const mapDispatchToProps = (dispatch) => {//store.dispatch(action)
  return {
    getProductByName: (product_name) => dispatch( getProductByName(product_name)),
    logout:()=> dispatch( logout()),
    //action la login voi 2 tham so la email va password
  };
  }
const mapStateToProps = (state) => {//tra state return ve tu reducer ve thanh prop
  console.log("set");
  console.log(state.loginState.currentUser);
  return {
 
     isLoginSuccess:state.loginState.isLoginSuccess,
     currentUser:state.loginState.currentUser
  };
  }
export default connect(mapStateToProps,mapDispatchToProps)(Header);

