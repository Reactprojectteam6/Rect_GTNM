import axios from 'axios';
const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_PRODUCT_IN_CART = 'DELETE_PRODUCT_IN_CART';
const UPDATE_PRODUCT_IN_CART='UPDATE_PRODUCT_IN_CART';
const SET_ORDER='SET_ORDER';
export function   setOrder(order,user_id,state,address,email,phone,total_payment,payment_method,fullname)
{ return dispatch => {
    callApi(order,user_id,state,address,email,phone,total_payment,payment_method,fullname,error=> {
      if (!error) {
        dispatch(setSuccess());//tra ve cho form
      } else {
        dispatch(setSuccess());//tra ve cho form
      }
    });
  }
}
  function setSuccess() {
    return {
      type: SET_ORDER,
    };
  }
 function checkExist(a,b)
  {  for(var i=0;i<b.length;i++)
     {
       if(a==b[i]) return true;
     }
    return false;
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
  var check=false;
   list_shop_id[0]=cart[0].product.shop_id;
    for (var i = 1; i < cart.length; i++) {
        if(checkExist(cart[i].product.shop_id,list_shop_id)==false) list_shop_id.push(cart[i].product.shop_id);

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
          if(res.status=="200"){
              alert("order thanh cong,vui long doi de nhan hang"); 
             check=true;
            }
            else check=false;
           
         })
     
 

          }
        }  
    
  }
  if(check==false)   
  return callback(new Error("khong tao duoc order"));
      else return callback(null);
 
 } 

export function  actAddToCart(product, quantity)
 {
return {
        type:ADD_TO_CART,
        product,
        quantity,
    }
}
export function  actDeleteProductInCart(product){
    return {
        type :DELETE_PRODUCT_IN_CART,
        product
    }
}

export function  actUpdateProductInCart(product, quantity ){
    return {
        type :UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
 }
 
 var data = JSON.parse(localStorage.getItem('CART'));
var initialState =data ? data : [];
export default function cart_reducer(state =initialState, action)  {
    var index = -1; // Không tìm thấy => index = -1
    var {product,quantity}=action;
    if(action.type=='ADD_TO_CART')
    {        
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity += parseInt(quantity);
            } else {
                state.push({
                    product,
                    quantity,
                    
                });
                alert("add product into cart successfully");
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        }       
    if(action.type=='DELETE_PRODUCT_IN_CART')
     {
            index = findProductInCart(state, product);
            if (index !== -1) {
                state.splice(index, 1);
               
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        }
     if(action.type=='UPDATE_PRODUCT_IN_CART')
     {
            index = findProductInCart(state, product);
            if(index !== -1){
                state[index].quantity = quantity;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
     }      
     if(action.type=='SET_ORDER')
     {   console.log("sdgsdfhjsdf");
         state.splice(0,state.length);
         localStorage.setItem('CART', JSON.stringify(state));
         return [...state];

     }   



     else return [...state];
    
}

var findProductInCart = (cart, product) => {//tim product da co trong cart hay chua
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}
