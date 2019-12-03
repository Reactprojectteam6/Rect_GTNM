
import axios from 'axios';
const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';   
const GET_COLORS='GET_COLORS';
const GET_RATING='GET_RATING';
const GET_PRODUCT_BY_NAME_AND_COLOR='GET_PRODUCT_BY_NAME_AND_COLOR';
const SET_COMMENT='SET_COMMENT';
export function show(product) {
   return dispatch => {
      dispatch({type:GET_PRODUCT_DETAIL,Product:product});//tra ve cho form
        
   
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

}

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


var data = JSON.parse(localStorage.getItem('detail'));
var color=JSON.parse(localStorage.getItem('color'));
var dt1 = localStorage.getItem('rate');
var initialState =
{ Product:data ? data : [],
  Colors:color?color:[],
  Sizes:[],
  Rate:dt1?dt1:null,
  hasComment:null,
}
export default function product_reducer(state =initialState, action) {
  if(action.type=='GET_PRODUCT_DETAIL')
  { let newState={...state};
    newState.Product=action.Product
    localStorage.setItem('detail', JSON.stringify(newState.Product));
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
  else return state;
}