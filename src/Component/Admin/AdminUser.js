import React from 'react';
class AdminUser extends React.Component  {
  render(){
      return (
          <div>
              
              <div className="row">
                    <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                        <div >
                            <div >
                                <h2 style={{fontFamily:"'Times New Roman', Times, serif",marginLeft:"10px"}}>Admin>Danh sách người dùng </h2>
                                <hr style={{width:"800px",marginLeft:"7px",marginTop:"5px",backgroundColor:"#000000"}}></hr>
                            </div >
                            
                            <p style={{fontSize:"32px",fontFamily:"'Times New Roman', Times, serif",marginLeft:"40px",marginTop:"30px"}}>Danh sách người dùng</p>
                            <input className="form-control" type="text" placeholder="Tìm kiếm" style={{width:"170px",marginLeft:"620px",marginTop:"20px"}}></input>
                            
                            <div className="row" style={{marginTop:"20px"}}>
                                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                                <table className="table table-striped" style={{fontSize:"20px",fontFamily:"Times New Roman', Times, serif"}}>
                            <thead>
                                <tr>
                                    <th>Họ và tên</th>
                                    <th>UserName</th>
                                    <th>Quyền hạng</th>
                                    <th>Số điện thoại</th>
                                    <th>Xóa</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                            </tbody>
                            </table>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
              
              </div>
      </div>
  );
}
}
export default AdminUser;
