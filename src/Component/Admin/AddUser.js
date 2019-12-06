import React from 'react';

class AddUser extends React.Component  {
  render(){
      return (
        <div style={{marginLeft:"200px"}} >
         <div style={{paddingTop:"10px",marginLeft:"50px"}}>
           <h3 className="textTTCN" style={{marginLeft:"30px"}}>User Information</h3>
           <hr style={{width:"800px",marginLeft:"30px",marginTop:"10px",backgroundColor:"#000000"}}></hr>
         </div>
         <div className="container">
             <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
               
               <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
               <img src="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.15752-9/75456783_423624331920122_6258242227626049536_n.png?_nc_cat=108&_nc_oc=AQm1mi6o4BP2DTAiHAqHPdAW_x9F1tk-qoszc7YzGn8La-8qmMzzrGoWtmzNTVmTXXo&_nc_ht=scontent.fdad3-3.fna&oh=4a31fffe1c955697f1e2747dab448d3b&oe=5E4B5792" style={{width:"90%"}}/>
                 <a href="#" style={{fontSize:"15px",marginLeft:"15px",paddingTop:"20px"}}>Change Avatar</a>
               </div>
               
               <div>
                   <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5" style={{paddingLeft:"20px",marginTop:"10px"}}>
                       <div className="form-group">
                         <label >Username: </label>
                         <input type="text" className="form-control" style={{paddingRight:"10px"}} name="Username"  placeholder="Trần Thu Sương" />
                       </div>
                       <div className="form-group">
                         <label >Email: </label>
                         <input type="text" className="form-control" name="Email" placeholder="thusuongtran15398@gmail.com"  />
                       </div>
                       <div className="form-group">
                         <label >Address: </label>
                         <input type="text" className="form-control" name="Address" placeholder="106 Nguyễn Lương Bằng , Liên Chiểu , ĐN"  />
                       </div>
                       <div className="form-group">
                         <label >Password: </label>
                         <input type="password" className="form-control" name="Password"  />
                       </div>
                       <div className="form-group">
                         <label >Password Confirmation: </label>
                         <input type="password" className="form-control" name="Password_Confimation"   />
                       </div>
                           
                       <button  style={{paddingLeft:"2px",backgroundColor:"#DCDCDC",marginLeft:"150px",marginTop:"23px"}} type="submit" className="btn btn-default">Add User</button>
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
export default AddUser;
