import React from 'react';
import {Link} from 'react-router-dom';
class AdminDashboard extends React.Component  {
  render(){
      return (
       <div> 
             
                <div className="panel panel-default">
                   
                    <div className="panel-heading">
                        <div className="row" style={{fontSize:"30px",color:"black"}}>
                            
                            <strong style={{fontFamily:"'Times New Roman', Times, serif"}}>Quản trị viên</strong>
                        </div>   
                    </div>
                        <table className="table">
                            <tbody className="nav nav-pills nav-stacked">
                                <tr>
                                    <td>
                                    <ul className="nav nav-pills nav-stacked">
                                        <li >
                                            <Link to="/admin/users"  style={{color:"black",fontSize:"20px",fontFamily:"'Times New Roman', Times, serif"}}><i className="fas fa-users"></i>&nbsp;Người Dùng</Link>
                                        </li>
                                    </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <ul className="nav nav-pills nav-stacked">
                                        <li ><Link to="/admin/shops"  style={{color:"black",fontSize:"20px",fontFamily:"'Times New Roman', Times, serif"}}> <i className="fas fa-store"></i>&nbsp;Cửa Hàng</Link></li>
                                    </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <ul className="nav nav-pills nav-stacked">
                                        <li ><a href="#section3"  style={{color:"black",fontSize:"20px",fontFamily:"'Times New Roman', Times, serif"}}><i className="fas fa-phone-square-alt"></i>&nbsp;Thông Tin Liên Hệ</a></li>
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
export default AdminDashboard;
