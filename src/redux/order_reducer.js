import axios from 'axios';
const SET_ORDER='SET_ORDER';
const GET_ORDER_HISTORY_OF_USER='GET_ORDER_HISTORY_OF_USER';
const GET_ORDER='GET_ORDER';
const GET_ORDER_DETAIL='GET_ORDER_DETAIL';
export function   setOrder(order,user_id,state,address,email,phone,total_payment,payment_method,fullname)
{ return dispatch => {
    callApi(order,user_id,state,address,email,phone,total_payment,payment_method,fullname,error=> {
      if (!error) {
        dispatch(setSuccess(true));//tra ve cho form
      } else {
        dispatch(setSuccess(false));//tra ve cho form
      }
    });
  }
}
  function setSuccess(isSuccess) {
    return {
      type: SET_ORDER,
      isSuccess
    };
  }
  
  async function callApi(cart,user_id,state,address,email,phone,total_payment,payment_method,fullname,callback) {
    console.log(order);
    console.log(user_id);
    console.log(state);
    console.log(address);
    console.log(email);
    console.log(phone);
    console.log(total_payment);
    console.log(payment_method);
    console.log(fullname);
   var count=0;
  var list_shop_id=[];
  var receiver_id=null;
  var order_id=null;
  var shop_id=null;
   list_shop_id[0]=cart[0].product.shop_id;
    for (var i = 1; i < cart.length; i++) {
     if(cart[i].product.shop_id) list_shop_id.push(cart[i].product.shop_id);

      }    
      console.log("list_shop_id")
      console.log(list_shop_id); 
      console.log("ket thuc shop id");   
    for(var i=0;i<list_shop_id.length;i++)
    {  
    
      var receiver=
        {
           address :address,
           email :email,
           fullname:fullname,
           phone:phone
         }
      console.log(list_shop_id[i]);
    await axios(
       {   method:'post',
           url: `https://127.0.0.1:5001/api/Receiver`,
           data:receiver,
           headers:{
          'Content-Type': 'application/json',
          Accept: 'application/json',
            'Authorization':'Bearer '+localStorage.getItem('token')
          }
            
        }
      ).then(response=>{
        if(response.status=="200") receiver_id=response.data.id;
       
      
      })
        
      var total=0;
      for(let j=0;j<cart.length;j++)
      { if(cart[j].product.shop_id==list_shop_id[i]) total+=cart[j].product.price*cart[j].quantity;

      }
       var order={
        payment_id:payment_method,
        receiver_id :receiver_id,
        user_id:user_id,
        status:Number(state),
        total:Number(total),
        date_create:new Date(Date.now()),
        shop_id:list_shop_id[i]
       }
       await axios(
        {  
       method:'post',
       url: `https://127.0.0.1:5001/api/Order`,
       data:order,
       headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization':'Bearer '+localStorage.getItem('token')
      }  

        }
      ).then(response1=>{
        if(response1.status=="200") order_id=response1.data.id;
      })
      
      for(let j=0;j<cart.length;j++)
      { if(cart[j].quantity<=cart[j].product.quantity &&cart[j].product.shop_id==list_shop_id[i])
          {  let order_detail={
           price:Number(cart[j].product.price),
           product_id:cart[j].product.id,
           quantity:Number(cart[j].quantity),
           order_id:order_id

          }
            await axios({
             method:'post',
             url: `https://127.0.0.1:5001/api/OrderDetail`,
             data:order_detail,
              headers:{
               'Content-Type': 'application/json',
               Accept: 'application/json',
               'Authorization':'Bearer '+localStorage.getItem('token')
             }

            }).then(response2=>{
              if(response2.status=="200")
             {  
                   
            }
           })

          //update so luong

          let product={

            id:cart[j].product.id,
            product_name:cart[j].product.product_name,
            description:cart[j].product.description,
            cat_id:cart[j].product.cat_id,
            price:Number(cart[j].product.price),
            quantity:cart[j].product.quantity-cart[j].quantity,
            shop_id:cart[j].product.shop_id,
            image:cart[j].product.image
          }
        
          let id=cart[j].product.id;
        await axios({
          method:'put',
          url: `https://127.0.0.1:5001/api/Product/${id}`,
          data:product,
           headers:{
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization':'Bearer '+localStorage.getItem('token')
          }
         }).then(res=>{
          if(res.status=="200"){alert("order thanh cong,vui long doi de nhan hang"); }
         })
     


          }
        }  
        
           

   
        
    
  }
 
 }
 
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
      { 
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
        { console.log("dcm");
          console.log(response.data);
        dispatch({type:GET_ORDER_DETAIL,payload:response.data});
        }
       
      })
  
    };
  }
var order=JSON.parse(localStorage.getItem('order'));
var listOrderDetail=JSON.parse(localStorage.getItem('listOrderDetail'))
var order_state={
  isSuccess:false,
  ordersUser:[],
  order:order?order:[],
  listOrderDetail:listOrderDetail?listOrderDetail:[]
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
      return state;
  
}