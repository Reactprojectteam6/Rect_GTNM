import React from 'react';
class AdminDashboard extends React.Component  {
  render(){
      return (
       <div> 
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"> 
                <div className="panel panel-default">
                   
                    <div className="panel-heading">
                        <div className="row" style={{marginLeft:"70px",fontSize:"30px",color:"black"}}>
                            
                            <strong style={{fontFamily:"'Times New Roman', Times, serif",marginLeft:"30px"}}>Admin</strong>
                        </div>   
                    </div>
                        <table className="table">
                            <tbody className="nav nav-pills nav-stacked">
                                <tr>
                                     <td>
                                        <ul className="nav nav-pills nav-stacked">
                                            <li >
                                                <a href="#section2"  style={{color:"black",fontSize:"20px",fontFamily:"'Times New Roman', Times, serif"}}><i className="fas fa-info-circle"></i>&nbsp;Thông Tin Trang Web</a>
                                            </li>
                                        </ul>
                                        </td>
                                 </tr>
                                <tr>
                                    <td>
                                    <ul className="nav nav-pills nav-stacked">
                                        <li >
                                            <a href="#section2"  style={{color:"black",fontSize:"20px",fontFamily:"'Times New Roman', Times, serif"}}><i className="fas fa-users"></i>&nbsp;Người Dùng</a>
                                        </li>
                                    </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <ul className="nav nav-pills nav-stacked">
                                        <li ><a href="#section3"  style={{color:"black",fontSize:"20px",fontFamily:"'Times New Roman', Times, serif"}}> <i className="fas fa-store"></i>&nbsp;Cửa Hàng</a></li>
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
            
         
       </div>
  );
}
}
export default AdminDashboard;
