//Login
import axios from 'axios';
const GET_PRODUCT_BY_NAME="GET_PRODUCT_BY_NAME"
export function getProductByName(name) {
  return dispatch => {
     callAPI(name,data => {
         dispatch(set(data));//tra ve cho form
        
    });
  }
}


function set(products) {
    console.log("sp");
  console.log(products);
  return {
    type: GET_PRODUCT_BY_NAME,
    products
  };
}


function callAPI(name,callback) {
    var token='Bearer '+localStorage.getItem("token");
     //console.log(token);
     axios({
       method: 'get',
       url: `https://127.0.0.1:5001/api/Product/Name=${name}`,
       //headers:{
          //'Content-Type': 'application/json',
       //   Accept: 'application/json',
       //   'Authorization':token
       // }
      
     }).then(response => {
    if(response.data!=null) 
    {  console.log("ádgsdhfd");
        console.log(response.data);
       callback(response.data);
     }
     else callback(new Error("can't get data"));
  
 }).catch(err => console.log(err));
 }
 
 var data=JSON.parse(localStorage.getItem("Search"))
 var initialState={
    products:data?data:[],
 
 }
export default function search_reducer(state =initialState, action) {
  if(action.type=='GET_PRODUCT_BY_NAME')
  {  
    let newState={...state};
    newState.products=action.products;
    localStorage.setItem("Search",JSON.stringify(newState.products));
    return newState;
  }
  else return state;
}