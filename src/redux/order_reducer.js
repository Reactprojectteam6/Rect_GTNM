import axios from 'axios';
import { userInfo } from 'os';
const SET_ORDER='SET_ORDER';
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
  
function callApi(order,user_id,state,address,email,phone,total_payment,payment_method,fullname,callback) {
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
           if (order.length > 0 ) {
             for (var i = 0; i < order.length; i++) {
               if(order[i].quantity<=order[i].product.quantity)
                { count++;
                
                 }
                }
             }        
               
    if(count!=0)
    { 
        
         axios(
    
        {  method:'post',
           url: `https://127.0.0.1:5001/api/Receiver`,
           data:{
            address :address,
            email :email,
            fullname:fullname,
            phone:phone
           },
           headers:{
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization':'Bearer '+localStorage.getItem('token')
          }
            
        }
      ).then(response=>{
        if(response.status=="200")
        {
         alert("tao receiver thanh cong");
          axios(
            {  
           method:'post',
           url: `https://127.0.0.1:5001/api/Order`,
           data:{
            payment_id:payment_method,
            receiver_id :response.data.id,
            user_id:user_id,
            status:Number(state),
            total:Number(total_payment),
            date_create:new Date(Date.now()),
           },
           headers:{
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization':'Bearer '+localStorage.getItem('token')
          }

            }
          ).then(response1=>{
            if(response1.status=="200")
            { console.log(response1);
             alert("Tao order thanh cong")

             for(var i=0;i<order.length;i++)
             { if(order[i].quantity<=order[i].product.quantity)
                 { 
                   axios({
                    method:'post',
                    url: `https://127.0.0.1:5001/api/OrderDetail`,
                    data:{
                      price:Number(order[i].product.price),
                      product_id:order[i].product.id,
                      quantity:Number(order[i].quantity),
                      order_id:response1.data.id

                     },
                     headers:{
                      'Content-Type': 'application/json',
                      Accept: 'application/json',
                      'Authorization':'Bearer '+localStorage.getItem('token')
                    }

                   }).then(response2=>{
                     if(response2.status=="200")
                    {  
                           alert("order detail thanh cong")
                   }
                      
                   })
                   var product={

                    id:order[i].product.id,
                    product_name:order[i].product.product_name,
                    description:order[i].product.description,
                    cat_id:order[i].product.cat_id,
                    price:Number(order[i].product.price),
                    quantity:order[i].product.quantity-order[i].quantity,
                    shop_id:order[i].product.shop_id,
                    image:order[i].product.image
                  }
                  alert(product.quantity);
                  alert(product.product_name);
                  alert(product.description);
                  var id=order[i].product.id;
                 axios({
                  method:'put',
                  url: `https://127.0.0.1:5001/api/Product/${id}`,
                  data:product,
                   headers:{
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization':'Bearer '+localStorage.getItem('token')
                  }
                 }).then(res=>{
                  if(res.status=="200") alert("update xong");
                 })

                 }

             }
            }

          })
        }
         

      })    
                 

    }
    
 
 
 }
 
var order_state={
  isSuccess:false,
}
export default function order_reducer(state =order_state, action) {
  if(action.type=='SET_ORDER')
  {
    let newState={...state};
    newState.isSuccess=action.isSuccess;
    if(newState.isSuccess==true) alert("order thanh cong,vui long cho nhan hang");
    return newState;
  }
      return state;
  
}