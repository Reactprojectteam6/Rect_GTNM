import React from 'react';
import './Profile.css';
import {connect} from 'react-redux';
import {updateUser} from '../../redux/admin_reducer';
import {getAllUser} from '../../redux/admin_reducer';
import {Link} from 'react-router-dom';
class User extends React.Component  {
  constructor(props)
  {
    super(props);
    this.state={};

  }
  componentDidMount()
    {   console.log(this.props.currentUser);
        this.setState({user_name:this.props.currentUser.user_name,email:this.props.currentUser.email,address:this.props.currentUser.address,phone:this.props.currentUser.phone})
        this.setState({id:this.props.currentUser.id,role:this.props.currentUser.role});
    }
  render(){
    let {currentUser}=this.props;
    let {id,user_name,email,phone,address,password,newpassword,role}=this.state;
      return (

     <div >
       <div className="row"> 
       <div className="UpdateImage">
        <div style={{paddingTop:"10px"}}>
          
        <div style={{color:"red",float:"left",marginRight:"5px",fontSize:"50px"}}>P</div>
        <div  style={{color:"yellow",float:"left",marginRight:"5px",fontSize:"50px"}}>R</div>  
        <div  style={{color:"greed",float:"left",marginRight:"5px",fontSize:"50px"}}>O</div>  
        <div  style={{color:"pink",float:"left",marginRight:"5px",fontSize:"50px"}}>F</div>  
        <div  style={{color:"blue",float:"left",marginRight:"5px",fontSize:"50px"}}>I</div> 
        <div  style={{color:"yellow",float:"left",marginRight:"5px",fontSize:"50px"}}>L</div> 
        <div  style={{color:"red",float:"left",marginRight:"5px",fontSize:"50px"}}>E</div>    
       
          <hr style={{width:"850px",marginLeft:"30px",marginTop:"10px",backgroundColor:"#000000"}}></hr>
        </div>
        <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                
                <img  className="imageUpdate" src={require("./chonglee.jpg")} />
                <h1>{user_name}</h1>
              </div>
       </div>       
              <div>
                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{paddingLeft:"20px",marginTop:"20px"}}>
                      <div className="form-group">
                        <label >Username: </label>
                        <input type="text" className="form-control" style={{paddingRight:"10px"}} name="Username"  onChange={e => this.setState({user_name:e.target.value})} value={user_name} placeholder="username" />
                      </div>
                      <div className="form-group">
                        <label >Email: </label>
                        <input type="text" className="form-control" name="Email" placeholder="email"  onChange={e => this.setState({email: e.target.value})} value={email} />
                      </div>
                      <div className="form-group">
                        <label >Phone: </label>
                        <input type="text" className="form-control" name="Email" placeholder="phone"  onChange={e => this.setState({phone: e.target.value})} value={phone} />
                      </div>
                      <div className="form-group">
                        <label >Address: </label>
                        <input type="text" className="form-control" onChange={e => this.setState({address: e.target.value})}  name="Address" placeholder="address" value={address} />
                      </div>
                      <div className="form-group">
                        <label >Old Password: </label>
                        <input type="password" className="form-control"  onChange={e => this.setState({password: e.target.value})}  name="Password"  />
                      </div>
                      <div className="form-group">
                        <label >New Password: </label>
                        <input type="password"  onChange={e => this.setState({newpassword: e.target.value})}  className="form-control" name="Password_Confimation"   />
                      </div>

                      <div className="row">
                      <button  style={{paddingLeft:"3px",marginLeft:"100px",backgroundColor:"#A52A2A",float:"left",color:"white"}} type="submit" className="btn btn-default" onClick={e=>{this.props.updateUser(id,user_name,email,phone,address,password,newpassword,role);this.props.getAllUser()}}>Cập nhật</button>
                      <button  style={{paddingLeft:"3px",marginLeft:"50px",backgroundColor:"#A52A2A",color:"white",width:"70px"}} type="submit" className="btn btn-default" ><Link to="/admin/users" style={{color:"white"}}>Trở lại</Link></button>
                      </div>
                 <div >
                    
                  </div>
                
                  </div>
                  
                 
               <div>
                  
              </div>
            </div>
           </div>
          </div>
   
    
        
       
  );
}
}
const mapDispatchToProps = (dispatch) => {//store.dispatch(action)
  return {
  
    updateUser:(id,user_name,email,phone,address,password,newpassword,role)=>dispatch(updateUser(id,user_name,email,phone,address,password,newpassword,role)),
    getAllUser:()=>dispatch(getAllUser())
    //action la login voi 2 tham so la email va password
  };
  }     
const mapStateToProps = state => {
  console.log(state.adminState.user);
return {
  currentUser:state.adminState.user
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(User);
