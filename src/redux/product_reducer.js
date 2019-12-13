
import axios from 'axios';
const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';   
const GET_COLORS='GET_COLORS';
const GET_RATING='GET_RATING';
const GET_PRODUCT_BY_NAME_AND_COLOR='GET_PRODUCT_BY_NAME_AND_COLOR';
const SET_COMMENT='SET_COMMENT';
const SORT='SORT';
const GET_PRODUCT_ON_CART='GET_PRODUCT_ON_CART';
const GET_ALL_PRODUCT='GET_ALL_PRODUCT';
export function show(id) {
   return dispatch => {

    axios({
      method: 'get',
      url: `https://127.0.0.1:5001/api/Product/${id}`,
    
     
    }).then(response => {
      if(response.status=="200")
      console.log("product_detail");
      console.log(response.data);
      dispatch({type:GET_PRODUCT_DETAIL,Product:response.data});//tra ve cho form
    
    })
        
   
  }
}
export function getColors(name)
{
  return dispatch => {
    axios({
      method: 'get',
      url: `https://127.0.0.1:5001/api/Product/${name}/Colors`,
    
     
    }).then(response => {
      if(response.status=="200")
    dispatch({type:GET_COLORS,Colors:response.data});//tra ve cho form
    
    })
}
}

export function getRating(id)
{
  return dispatch => {
    axios({
      method: 'get',
      url: `https://127.0.0.1:5001/api/Product/${id}/Rating`,
    
     
    }).then(response => {
      if(response.status=="200")
    dispatch({type:GET_RATING,Rate:response.data});//tra ve cho form
    })

}

//detail chon mau
export function getProductByNameAndColor(product,name,color,shop_id)
{
  return dispatch => {
    axios({
      method: 'get',
      url: `https://127.0.0.1:5001/api/Product/${name}/${color}/${shop_id}`,
     }).then(response => {
      if(response.status=="200")
     
    dispatch({type:GET_PRODUCT_BY_NAME_AND_COLOR,Product:response.data});//tra ve cho form
    if(response.status=="404")
    {  alert("Sản phẩm này hiện tại hết màu này,quý khách vui lòng chọn màu khác,xin cảm ơn ạ!!!")
      dispatch({type:GET_PRODUCT_BY_NAME_AND_COLOR,Product:product})
     }
    })

}

}
//comment
export function setComment(user_id,product_id,rate)
{   console.log(user_id);
    console.log(product_id);
    console.log(rate); 
  var comment={
  contents :"san pham tot",
  rate :rate,
  product_id:product_id,
  user_id :user_id
    }
    var token='Bearer '+localStorage.getItem('token');
   return dispatch=>{
  axios(

    {  method:'post',
       url: `https://127.0.0.1:5001/api/Comment`,
       data:comment,
       headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization':token
      }
        
    }
  ).then(response=>{
    if(response.status=="200")
    dispatch({type:"SET_COMMENT",payload:true});
    else  dispatch({type:"SET_COMMENT",payload:false});
  }
  )
}

}
//sort


export function sort(by,value) {
  console.log("by");
  console.log(by);
  console.log("value");
  console.log(value);
return dispatch => {
  var id=null; 
if(by=="Rating")
  { 
    if(value=="1-3")
    {
  axios({
      method:'get',
      url: `https://127.0.0.1:5001/api/Product/Rating/${1}-${3}`,
      headers:{
     'Content-Type': 'application/json',
     Accept: 'application/json',
     'Authorization':'Bearer '+localStorage.getItem('token')
  }


})
.then(res => {
     if(res.status=="200")  dispatch({type:SORT,payload:res.data});
    } 
)
  }
if(value=="4-5")
{
axios({
  method:'get',
  url: `https://127.0.0.1:5001/api/Product/Rating/${4}-${5}`,
  headers:{
   'Content-Type': 'application/json',
   Accept: 'application/json',
   'Authorization':'Bearer '+localStorage.getItem('token')
 }


})
.then(res => {
  console.log("4-5")
  console.log(res.data);
     if(res.status=="200") dispatch({type:SORT,payload:res.data});
    } 
)
  }

  }
  
if(by=="Price")
{
  var data=[];
    axios({
      method:'get',
      url: `https://127.0.0.1:5001/api/Product`,
      headers:{
       'Content-Type': 'application/json',
       Accept: 'application/json',
       'Authorization':'Bearer '+localStorage.getItem('token')
     }
    

    })
    .then(res => {
    
      if (res.data.length>0)
        { data=res.data;
          if(value=="1-300000")
          {const result=data.filter(data =>data.price>1&&data.price<301000);
            dispatch({type:SORT,payload:result});
       
          }
          if(value=="300000-500000")
          {
            const result=data.filter(data =>data.price>301000&&data.price<501000);
            console.log("result");
            dispatch({type:SORT,payload:result});
          }
          if(value=="500000-1000000")
          {  console.log("result");
        
            const result=data.filter(data =>data.price>501000&&data.price<1000000);
            dispatch({type:SORT,payload:result});
          }
       } 
     }
    )
}
if(by=="Sort")
var data=[];
axios({
  method:'get',
  url: `https://127.0.0.1:5001/api/Product`,
  headers:{
   'Content-Type': 'application/json',
   Accept: 'application/json',
   'Authorization':'Bearer '+localStorage.getItem('token')
 }


})
.then(res => {

  if (res.data.length>0)
    { data=res.data;
      if(value=="Tên sản phẩm")
      {const result=data.sort((a, b) => a.product_name.localeCompare(b.product_name, 'es', {sensitivity: 'base'}))
       dispatch({type:SORT,payload:result});
      }
      if(value=="Giá")
      {
        const result=data.sort(function(a, b){return a.price - b.price});
        dispatch({type:SORT,payload:result});
      }
    }
  })



}
}       

export function getProductOnCart(cart)
{ console.log(cart);
  return dispatch => {
     
        dispatch({type: GET_PRODUCT_ON_CART,payload:cart});
        //tra ve cho form
  }
        
}
export function getAllProduct()
{  return dispatch => {
  axios({
    method:'get',
    url: `https://127.0.0.1:5001/api/Product`,
    headers:{
     'Content-Type': 'application/json',
     Accept: 'application/json',
     'Authorization':'Bearer '+localStorage.getItem('token')
   }
  
  
  }).then(res=>{
if(res.status=="200")dispatch({type:GET_ALL_PRODUCT,payload:res.data});

  })
  //tra ve cho form
}

}

var data = JSON.parse(localStorage.getItem('detail'));
var color=JSON.parse(localStorage.getItem('color'));
var dt1 = localStorage.getItem('rate');
var filter=JSON.parse(localStorage.getItem('filter'));
var dt2=JSON.parse(localStorage.getItem('productOrder'));
var initialState =
{ Product:data ? data : [],
  Colors:color?color:[],
  Sizes:[],
  Rate:dt1?dt1:null,
  hasComment:null,
  productsFilter:filter?filter:[],
  productInCart:dt2?dt2:[],
  products:[],
}
export default function product_reducer(state =initialState, action) {
  if(action.type=='GET_PRODUCT_DETAIL')
  { let newState={...state};
    newState.Product=action.Product
    localStorage.setItem('detail', JSON.stringify(newState));
    return newState;
  }

  if(action.type=='GET_COLORS')
  { let newState={...state};
    newState.Colors=action.Colors;
    console.log(newState.Colors);
    localStorage.setItem('color', JSON.stringify(newState.Colors));
    return newState;
  }
  if(action.type=='GET_RATING')
  { let newState={...state};
    newState.Rate=action.Rate;
    console.log(newState.Rate);
    localStorage.setItem("rate",newState.Rate);
    return newState;
  }
  if(action.type=='GET_PRODUCT_BY_NAME_AND_COLOR')
  { let newState={...state};
    newState.Product=action.Product;
    console.log("adashjfadsgfd");
    console.log(action.product);
    console.log(newState.Product);
    localStorage.setItem("detail",JSON.stringify(newState.Product));
    return newState;
  }
   if(action.type=="SET_COMMENT")
   {
    let newState={...state};
    newState.hasComment=action.payload;
    if(newState.hasComment==true) alert("cam on danh gia ve san pham nay cua ban");
    return newState;
   }
   if(action.type=='SORT')
   { let newState={...state};
   newState.productsFilter=action.payload;
   localStorage.setItem("filter",JSON.stringify(newState.productsFilter));
   return newState;

   }
   if(action.type=='GET_PRODUCT_ON_CART')
   {
    let newState={...state};
    newState.productInCart=action.payload;
    localStorage.setItem('productOrder',JSON.stringify(newState.productInCart));
    return newState;
   }
   if(action.type=='GET_ALL_PRODUCT')
   {let newState={...state};
   newState.products=action.payload;
   return newState;

   }
  else return state;
}
}