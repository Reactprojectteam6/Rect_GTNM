import axios from 'axios';
const PAYMENT_BY_PAYPAL='PAYMENT_BY_PAYPAL';
function check(a,b)
{  for(let i=0;i<b.length;i++)
   {
     if(a==b[i]) return true;
   }
  return false;
}
export function paymentByPaypal(cart) {
  
    console.log(cart);
    return dispatch => {
       API(cart,data => {
           console.log("data");
           console.log(data);
           dispatch({type:PAYMENT_BY_PAYPAL,payload:data});//tra ve cho form
          
      });
    }
  }

async function API(cart,callback)
{   console.log("ahiii");
    let list_shop_id=[];
    let list_order=[];
    list_shop_id[0]=cart[0].product.shop_id;
    for (let i = 1; i < cart.length; i++) {
       if(check(cart[i].product.shop_id,list_shop_id)==false) list_shop_id.push(cart[i].product.shop_id);

     }
     for(var i=0;i<list_shop_id.length;i++)
      { 
          console.log(list_shop_id[i])

         let sum=0;//tinh tong tien cua tung shop
        let list_product=[];//list san pham mua cua tung shop
        let paypal=null;
        let order;
       for(let j=0;j<cart.length;j++)
        {
          if(cart[j].product.shop_id==list_shop_id[i]) 
            {  list_product.push(cart[j]);
            }
        }
     
        for(let k=0;k<list_product.length;k++) sum+=list_product[k].product.price*list_product[k].quantity;
         await axios({
            method: 'get',
            url: `https://127.0.0.1:5001/api/Shop/Paypal/${list_shop_id[i]}`,
            headers:{
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization':'Bearer '+localStorage.getItem('token')
              }
           
          }).then(response => {
            if(response.status=="200")
            {paypal=response.data;
               order={
                    list_product:list_product,
                    sum:sum,
                    paypal:paypal
         
                   } 
                   list_order.push(order); 
            }     
          })
          
        
       
        
        
            
    }
    console.log(list_order);
    if(list_order.length>0) callback(list_order);

}
var initialState =
{ paypal:[]
}
export default function paypal_reducer(state =initialState, action) {
  if(action.type=='PAYMENT_BY_PAYPAL')
  { let newState={...state};
    newState.paypal=action.payload
    console.log(newState.paypal);
    return newState;
  }

  else return state;
}