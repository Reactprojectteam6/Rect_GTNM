import axios from 'axios';
const GET_ORDER_HISTORY_OF_USER='GET_ORDER_HISTORY_OF_USER';
const GET_ORDER='GET_ORDER';
const GET_ORDER_DETAIL='GET_ORDER_DETAIL';
const CANCEL_ORDER='CANCEL_ORDER';
const GET_ALL_PRODUCT='GET_ALL_PRODUCT';
 export function getOrderOfUser()
 { 
  return dispatch => {
    
    axios(
      {  method:'get',
         url: `https://127.0.0.1:5001/api/Order/user/${JSON.parse(localStorage.getItem('currentUser')).id}`,
         headers:{
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization':'Bearer '+localStorage.getItem('token')
        }
          
      }
    ).then(response=>{
      if(response.status=="200")
      { console.log("listorder");
        console.log(response.data);
      dispatch({type:GET_ORDER_HISTORY_OF_USER,payload:response.data});
      }
     
    })

  };
  }

  export function getOrder(id)
  {
    return dispatch=>{

      axios(
        {  method:'get',
           url: `https://127.0.0.1:5001/api/Order/${id}`,
           headers:{
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization':'Bearer '+localStorage.getItem('token')
          }
            
        }
      ).then(response=>{
        if(response.status=="200")
        {  console.log("ba noi m")
           console.log(response.data);
          dispatch({type:GET_ORDER,payload:response.data})
        }
       
      })
  
    };
    
    }

  export function getOrderDetail(id)
  {
    return dispatch => {
    
      axios(
        {  method:'get',
           url: `https://127.0.0.1:5001/api/OrderDetail/Order/${id}`,
           headers:{
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization':'Bearer '+localStorage.getItem('token')
          }
            
        }
      ).then(response=>{
        if(response.status=="200")
        { 
          console.log(response.data);
        dispatch({type:GET_ORDER_DETAIL,payload:response.data});
        }
       
      })
  
    };
  }
 export function cancelOrder(id) 
 {  return dispatch=>{
    axios({
    method:'put',
    url: `https://127.0.0.1:5001/api/Order/${id}/Cancel`,
     headers:{
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Authorization':'Bearer '+localStorage.getItem('token')
    }
   }).then(res=>{
    if(res.status=="200"){alert("Huy don hang thanh cong");
       axios(
      {  method:'get',
         url: `https://127.0.0.1:5001/api/Order/user/${JSON.parse(localStorage.getItem('currentUser')).id}`,
         headers:{
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization':'Bearer '+localStorage.getItem('token')
        }
          
      }
    ).then(response=>{
      if(response.status=="200")
      { console.log("listorder");
        console.log(response.data);
        dispatch({type:CANCEL_ORDER,payload:response.data});
      }
     
    })
  }
   })

  }
 }

 
export function getAllProduct() {
  return dispatch => {
     callAPI(data => {
         dispatch(set(data));//tra ve cho form
        
    });
  }
}


function set(products) {
  console.log(products);
  return {
    type:GET_ALL_PRODUCT,
    products
  };
}

function callAPI(callback) {
   var token='Bearer '+localStorage.getItem("token");
    console.log(token);
    axios({
      method: 'get',
      url: `https://127.0.0.1:5001/api/Order/Products`,
      //headers:{
         //'Content-Type': 'application/json',
      //   Accept: 'application/json',
      //   'Authorization':token
      // }
     
    }).then(response => {
   if(response.data!=null) 
   {  console.log(response.data);
      callback(response.data);
    }
    else callback(new Error("can't get data"));
 
}).catch(err => console.log(err));
}


var order=JSON.parse(localStorage.getItem('order'));
var listOrderDetail=JSON.parse(localStorage.getItem('listOrderDetail'))
var order_state={
  isSuccess:false,
  ordersUser:[],
  order:order?order:[],
  listOrderDetail:listOrderDetail?listOrderDetail:[],
  products:[],
  //order_user?order_user:[]
}
export default function order_reducer(state =order_state, action) {
  if(action.type=='SET_ORDER')
  {
    let newState={...state};
    newState.isSuccess=action.isSuccess;
    if(newState.isSuccess==true) alert("order thanh cong,vui long cho nhan hang");
    return newState;
  }
  if(action.type=='GET_ORDER_HISTORY_OF_USER')
  { let newState={...state};
     newState.ordersUser=action.payload;
     console.log("list order");
     console.log(newState.ordersUser);
     //localStorage.setItem('orderHistoryOfUser',JSON.stringify(newState.ordersUser));
     return newState;
  }
  if(action.type=='GET_ORDER')
  {
    let newState={...state};
     newState.order=action.payload;
     console.log("order la:");
     console.log(newState.order);
    localStorage.setItem('order',JSON.stringify(newState.order));
    return newState;
  }
  if(action.type=='GET_ORDER_DETAIL')
  {let newState={...state};
    newState.listOrderDetail=action.payload;
    localStorage.setItem('listOrderDetail',JSON.stringify(newState.listOrderDetail));
    return newState;

  }
  if(action.type=='CANCEL_ORDER')
  {  let newState={...state};
    newState.ordersUser=action.payload;
    return newState;
  }
  if(action.type=='GET_ALL_PRODUCT')
  { let newState={...state};
    newState.products=action.products;
    return newState;

  }
      return state;
  
}