import React from 'react';
class AdminStore extends React.Component  {
  render(){
      return (
          <div>
              
              <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div >
                            <div >
                                <h2 style={{fontFamily:"'Times New Roman', Times, serif",marginLeft:"10px"}}>Admin>Cửa hàng </h2>
                                <hr style={{width:"800px",marginLeft:"7px",marginTop:"5px",backgroundColor:"#000000"}}></hr>
                            </div >
                            
                            <p style={{fontSize:"32px",fontFamily:"'Times New Roman', Times, serif",marginLeft:"60px",marginTop:"30px"}}>Cửa hàng</p>
                            <input className="form-control" type="text" placeholder="Tìm kiếm" style={{width:"170px",marginLeft:"850px",marginTop:"20px"}}></input>
                            
                            <div className="row" style={{marginTop:"20px"}}>
                                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                                <table className="table table-striped" style={{fontSize:"20px",fontFamily:"Times New Roman', Times, serif"}}>
                            <thead>
                                <tr>
                                    <th>Tên cửa hàng</th>
                                    <th>Tên chủ cửa hàng</th>
                                    <th>Email</th>
                                    <th>SĐT</th>
                                    <th>Ngày thanh toán</th>
                                    <th>Ngày hết hạn</th>
                                    <th>Phí thanh toán</th>
                                    <th>Hành động</th>
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
export default AdminStore;
