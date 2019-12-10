//Login
import axios from 'axios';
const SET_LOGIN = 'SET_LOGIN';
const CHECK_LOGIN='CHECK_LOGIN';
const LOG_OUT='LOG_OUT';
export function login(email, password) { 
  //reducer thuc hien action login xu ly du lieu lay qua
  console.log("abcdds");
  //, {headers: {'Content-Type':'application/json','Access-Control-Allow-Origin': '*'}}
  return async dispatch => {
   
  axios.get(`https://127.0.0.1:5001/api/Token/${email}/${password}`).then(response => {
      var token="";
        if(response.data==""){ alert("khong") ;dispatch({type:SET_LOGIN, payload:false});}
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
          role:user.role,
          phone:user.phone,
        }
         localStorage.setItem('currentUser',JSON.stringify(currentUser));
         dispatch ({type:SET_LOGIN, payload:true,user:JSON.parse(localStorage.getItem('currentUser'))});
      
       }
            }
      )
  
     
    
    }
     
    }).catch(err => console.log(err));
}
  
}
export function logout() { //reducer thuc hien action login xu ly du lieu lay qua
  return dispatch => {
    localStorage.clear();
    //document.cookie = "token=; expires=Wed, 27 Feb 2019 07:41:28 GMT;";
    dispatch ({type:LOG_OUT, payload:false});
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
export function checkLogin() { //reducer thuc hien action login xu ly du lieu lay qua
  return dispatch => {
    var a=localStorage.getItem('token');
    if(a!=null)
    dispatch ({type:CHECK_LOGIN, payload:true});
    else   { alert("vui long dang nhap de mua hang");dispatch ({type:CHECK_LOGIN, payload:false});}
}
}
var a=false;
 var data=localStorage.getItem('token');
 var user=JSON.parse(localStorage.getItem('currentUser'));
 console.log(data);
 if(data!=null) a=true;
var login_state={
  isLoginSuccess:a,
  currentUser:user?user:[],
  checkLogin:false
}
export default function login_reducer(state =login_state, action) {
  
  if(action.type=='SET_LOGIN')
  {  let newState={...state};
      console.log(action.payload);
     newState.isLoginSuccess=action.payload;
     newState.currentUser=action.user;
     console.log(newState.isLoginSuccess);
    if(newState.isLoginSuccess==true) alert("dang nhap thanh cong");
    else if(newState.isLoginSuccess==false) alert("ban khong dang nhap duoc,vui long kiem tra lai")
     return newState;
   }
   if(action.type=='CHECK_LOGIN')
   {let newState={...state};
     newState.checkLogin=action.payload;
     return newState;
     
   }
   if(action.type=='LOG_OUT')
   { let newState={...state};
    newState.isLoginSuccess=action.payload;
    if(newState.isLoginSuccess==false) alert('da log out');
    newState.currentUser=[];
   return newState;

   }
   return state;
  
}