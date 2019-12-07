//Login
import axios from 'axios';
const SET_LOGIN = 'SET_LOGIN';
export function login(email, password) { 
  //reducer thuc hien action login xu ly du lieu lay qua
  console.log("abcdds");
  //, {headers: {'Content-Type':'application/json','Access-Control-Allow-Origin': '*'}}
  return async dispatch => {
   
  axios.get(`https://127.0.0.1:5001/api/Token/${email}/${password}`).then(response => {
      console.log(response);
      var token="";
        if(response.status=="400") dispatch ({type:SET_LOGIN, payload:false});
        else { //localStorage.setItem("token",response.data);
        localStorage.setItem("token",response.data)
        token='Bearer '+localStorage.getItem("token");
        console.log(token);
        axios({
          method: 'get',
          url: `https://127.0.0.1:5001/api/User/email=${email}`,
          headers:{
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization':token
          }
         
        }).then(response => {
       if(response.data!=null) 
       {  console.log("sfsdjfhsdf");
          //console.log(response.data);
          const user = response.data;
          const currentUser={
          id:user.id,
          user_name:user.user_name,
          email:user.email,
          address:user.address,
          phone:user.phone,
          role:user.role,
        }
        if(user.role==2) 
        { 
          axios({
            method: 'get',
            url: `https://127.0.0.1:5001/api/User/${user.id}/shop`,
            headers:{
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization':'Bearer '+localStorage.getItem("token")
              }
        }).then(response =>{
           if(response.status=="200"){
             //console.log("shop")
             //console.log(response.data)
            localStorage.setItem('shop_id',response.data)
           };
           
        }).catch(err => console.log(err));
        }

         localStorage.setItem('currentUser',JSON.stringify(currentUser));
        
       }
            }
      )
          dispatch ({type:SET_LOGIN, payload:true});
    }
     
    }).catch(err => console.log(err));
}
  
}
export function logout() { //reducer thuc hien action login xu ly du lieu lay qua
  return dispatch => {
    localStorage.clear();
    //document.cookie = "token=; expires=Wed, 27 Feb 2019 07:41:28 GMT;";
    dispatch ({type:SET_LOGIN, payload:false});
}
}
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length,c.length);
      }
  }
  return "";
}

var a=false;
 var data=localStorage.getItem('token');
 console.log(data);
 if(data!=null) a=true;
var login_state={
 
  isLoginSuccess:a,
}
export default function login_reducer(state =login_state, action) {
  
  if(action.type=='SET_LOGIN')
  {  let newState={...state};
      console.log(action.payload);
     newState.isLoginSuccess=action.payload
     if(newState.isLoginSuccess==true) alert("login successfully");
     return newState;
   }
   return state;
  
}