//Login
import axios from 'axios';
const GET_PRODUCT_BY_CATEGORY="GET_PRODUCT_BY_CATEGORY";
const GET_CATEGORY_NAME="GET_CATEGORY_NAME";
export function getProductByCategory(id) {
  return dispatch => {
     callApi(id,data => {
         dispatch(set(data));//tra ve cho form
        
    });
  }
}
export function getCategoryName(name) {
    return dispatch => {
           dispatch({type:GET_CATEGORY_NAME,categoryName:name});//tra ve cho form
          
    
    }
  }
  

function set(products) {
  console.log(products);
  return {
    type: GET_PRODUCT_BY_CATEGORY,
    products
  };
}

function callApi( id,callback) {
   var token='Bearer '+localStorage.getItem("token");
    console.log(token);
    axios({
      method: 'get',
      url: `https://127.0.0.1:5001/api/Category/${id}/products`,
      // headers:{
      //   'Content-Type': 'application/json',
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
var data=JSON.parse(localStorage.getItem("Category"))
var Name=localStorage.getItem("categoryName");
var initialState={
   products:data?data:[],
   categoryName:Name?Name:null
}
export default function menu_reducer(state =initialState, action) {
  if(action.type=='GET_PRODUCT_BY_CATEGORY')
  {  
    let newState={...state};
    newState.products=action.products;
    localStorage.setItem("Category",JSON.stringify(newState.products));
    return newState;
  }
  if(action.type=='GET_CATEGORY_NAME')
  {  
    let newState={...state};
    newState.categoryName=action.categoryName;
    localStorage.setItem("categoryName",newState.categoryName);
    return newState;
  }
  else return state;
}