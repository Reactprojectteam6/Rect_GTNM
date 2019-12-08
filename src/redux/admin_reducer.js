import axios from 'axios';
const GET_USER='GET_USER';
const UPDATE_USER='UPDATE_USER';
const DELETE_USER='DELETE_USER';
const GET_ALL_USER='GET_ALL_USER';
const GET_USER_BY_NAME='GET_USER_BY_NAME';
const GET_ALL_SHOP='GET_ALL_SHOP';
const GET_SHOP_BY_NAME='GET_SHOP_BY_NAME';
export function getUser(user)
{
return  dispatch=>{
dispatch({type:GET_USER,payload:user});

}
}
export function  updateUser(id,user_name,email,phone,address,password,newpassword,role)
{  
    return dispatch => {axios({
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
          id:id,
          user_name:user_name,
          password:newpassword,
          email :email,
          phone:phone,
          address:address,
          role:role
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
                 {alert("cap nhat thanh cong!!")
                   dispatch({type:UPDATE_USER,payload:user});
                  
                 }
  
                  
             })   
         }   
         else {alert("Password va Password confirm khong khop,vui long nhap lai");}
  
       }
       else {alert("password cu khong chinh xac!!");}
  
      }
  
  
     })
       
      }
}
export function deleteUser(id)
{ console.log("user sau khi xoa");
  return dispatch => {
    API(id,data=> {
      console.log(data);
      dispatch({type:DELETE_USER,payload:data})
    });
  }
}

async function API(id,callback)
{ 
  await axios({
    method:'delete',
    url: `https://127.0.0.1:5001/api/User/${id}`,
    headers:{
     'Content-Type': 'application/json',
     Accept: 'application/json',
     'Authorization':'Bearer '+localStorage.getItem('token')
   }

  }).then(res=>{
   if(res.status=="200") alert("xoa user thanh cong!!");

   axios({
    method:'get',
    url: `https://127.0.0.1:5001/api/User`,
     headers:{
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Authorization':'Bearer '+localStorage.getItem('token')
    }
   }).then(res=>{
    if(res.status=="200") callback(res.data);
   }) 

  })
}
export function getAllUser()
 {
   return dispatch=>{
    axios({
      method:'get',
      url: `https://127.0.0.1:5001/api/User`,
       headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization':'Bearer '+localStorage.getItem('token')
      }
     }).then(res=>{
      if(res.status=="200") dispatch({type:GET_ALL_USER,payload:res.data});
     }) 
   }
 } 

export function getUserByName(key)
{return dispatch=>{
  axios({
    method:'get',
    url: `https://127.0.0.1:5001/api/User/name=${key}`,
     headers:{
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Authorization':'Bearer '+localStorage.getItem('token')
    }
   }).then(res=>{
    if(res.status=="200") dispatch({type:GET_USER_BY_NAME,payload:res.data});
   }) 
 }

}
export function getAllShop()
{return dispatch=>{
  axios({
    method:'get',
    url: `https://127.0.0.1:5001/api/Shop`,
     headers:{
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Authorization':'Bearer '+localStorage.getItem('token')
    }
   }).then(res=>{
    if(res.status=="200") dispatch({type:GET_ALL_SHOP,payload:res.data});
   }) 
 }

}
 

//get shop by name

export function getShopByName(key)
{return dispatch=>{
  axios({
    method:'get',
    url: `https://127.0.0.1:5001/api/Shop/name=${key}`,
     headers:{
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Authorization':'Bearer '+localStorage.getItem('token')
    }
   }).then(res=>{
    if(res.status=="200") dispatch({type:GET_SHOP_BY_NAME,payload:res.data});
   }) 
 }

}
var dt=JSON.parse(localStorage.getItem('User'));
var initialState={
   user:dt?dt:null,
   users:[],
   shops:[],
  }
  export default function admin_reducer(state =initialState, action) {
    if(action.type=='GET_USER')
    {  
      let newState={...state};
      newState.user=action.payload;
      localStorage.setItem('User',JSON.stringify(newState.user));
      return newState;
    }
    if(action.type=='UPDATE_USER')
    {
      let newState={...state};
      newState.user=action.payload;
      localStorage.setItem('User',JSON.stringify(newState.user));
      return newState;
    }
    if(action.type=='GET_ALL_USER')
    {  let newState={...state};
      newState.users=action.payload;
      return newState;
  
    }
    if(action.type=='DELETE_USER')
    {  let newState={...state};
       newState.users=action.payload;
       return newState;

    }
    if(action.type=='GET_USER_BY_NAME')
    {  let newState={...state};
       newState.users=action.payload;
       return newState;

    }
    if(action.type=='GET_ALL_SHOP')
    {  let newState={...state};
       newState.shops=action.payload;
       return newState;

    }
    if(action.type=='GET_SHOP_BY_NAME')
    {  let newState={...state};
       newState.shops=action.payload;
       return newState;

    }

    else return state;
  }