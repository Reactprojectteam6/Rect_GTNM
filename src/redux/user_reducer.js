import axios from "axios";
const UPDATE_USER='UPDATE_USER';
export function  updateUser(id,user_name,email,phone,address,password,newpassword)
{  
    return dispatch => {
        callApi(id,user_name,email,phone,address,password,newpassword,data=> {
          if (!data) {
            dispatch(setSuccess(data));//tra ve cho form
          } else {
            dispatch(setSuccess(data));
          }
        });
      }
}
function setSuccess(user) {
    return {
      type:UPDATE_USER,
      user
    };
  }

  function callApi(id,user_name,email,phone,address,password,newpassword,callback)
  { 
   axios({
    method:'get',
    url: `https://127.0.0.1:5001/api/User/${id}`,
    headers:{
     'Content-Type': 'application/json',
     Accept: 'application/json',
     'Authorization':'Bearer '+localStorage.getItem('token')
   }

   }).then(Response=>{
    if(Response.status=="200") {
    if(Response.data.password==password) 
     { if(password==newpassword)
       {  var user={
        user_name:user_name,
        password:newpassword,
        email :email,
        phone:phone,
        address:address,
        role:JSON.parse(localStorage.getItem('currentUser')).role
       }
        axios({
            method:'put',
            url: `https://127.0.0.1:5001/api/User/${id}`,
            data:user,
             headers:{
              'Content-Type': 'application/json',
              Accept: 'application/json',
              'Authorization':'Bearer '+localStorage.getItem('token')
            }
           }).then(res=>{
            if(res.status=="200")
               { var user={
                id:user.id,   
                user_name:user_name,
                email :email,
                phone:phone,
                address:address,
                role:JSON.parse(localStorage.getItem('currentUser').role)
                  }
               localStorage.setItem('currentUser',JSON.stringify(user));
               alert("update thanh cong");
               return callback(user);
              
               }

                
           })   
       }   
       else {alert("Password va Password confirm khong khop,vui long nhap lai"); callback(null)}

     }
     else {alert("password cu khong chinh xac!!"); callback(null);}

    }


   })


  }
 
var user=JSON.parse(localStorage.getItem('currentUser'));
var initialState={

    user:user?user:null,
}
export default function user_reducer(state =initialState, action) {
 
    if(action.type=='UPDATE_USER')
    {  let newState={...state};
      newState.user=action.user;
      return newState;
  
    }
  
        return state;
    
  }