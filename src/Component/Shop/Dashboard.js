import React from 'react';
import ProfileShop from './ProfileShop';
import { Link ,Redirect} from "react-router-dom";

class Dashboard extends React.Component  {
  render(){
      return (
       <div> 
                <div className="panel panel-default">
                   
                    <div className="panel-heading">
                        <div className="row" style={{marginLeft:"-5px",fontSize:"21px",color:"gray"}}>
                            
                            <strong style={{fontFamily:"'Times New Roman', Times, serif",marginLeft:"30px"}}>Kênh Người Bán</strong>
                        </div>   
                    </div>
                        <table className="table">
                            <tbody className="nav nav-pills nav-stacked">
                                <tr>
                                     <td>
                                        <ul className="nav nav-pills nav-stacked">
                                            <li >
                                                <a href="#section2"  style={{color:"black",fontSize:"20px",fontFamily:"'Times New Roman', Times, serif"}}>
                                                     <i className="fas fa-store"></i>
                                                     <Link to="/shop">&nbsp;Danh Mục Shop</Link>
                                                
                                                </a>
                                            </li>
                                        </ul>
                                        </td>
                                 </tr>
                                <tr>
                                    <td>
                                    <ul className="nav nav-pills nav-stacked">
                                        <li >
                                            <a href="#section2"  style={{color:"black",fontSize:"20px",fontFamily:"'Times New Roman', Times, serif"}}><i className="fas fa-check-circle"></i>&nbsp;Sản Phẩm</a>
                                        </li>
                                    </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <ul className="nav nav-pills nav-stacked">
                                        <li ><a href="#section3"  style={{color:"black",fontSize:"20px",fontFamily:"'Times New Roman', Times, serif"}}><i className="fas fa-plus-square"></i>&nbsp;Đơn Bán</a></li>
                                    </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <ul className="nav nav-pills nav-stacked">
                                        <li ><Link to="/shop/profile" style={{color:"black",fontSize:"20px",fontFamily:"'Times New Roman', Times, serif"}}>
                                            <i className="fas fa-user-cog"></i>
                                            &nbsp;Thiết Lập</Link>
                                
                                            
                                        </li>
                                    </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                       
              
                
            </div>
            
         
       </div>
  );
}
}

export default Dashboard;
