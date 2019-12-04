//Login
import axios from 'axios';
const GET_ALL_CATEGORY = 'GET_ALL_CATEGORY';
const GET_ALL_PRODUCT='GET_ALL_PRODUCT';
const GET_SUB_CATEGORY='GET_SUB_CATEGORY';
export function getAllCategory() {
  return dispatch => {
     callCategoryApi(data => {
         dispatch(setAllCategory(data));//tra ve cho form
        
    });
  }
}


function setAllCategory(parents) {
  console.log(parents);
  return {
    type: GET_ALL_CATEGORY,
    parents
  };
}

function callCategoryApi( callback) {
   var token='Bearer '+localStorage.getItem("token");
    console.log(token);
    axios({
      method: 'get',
      url: `https://127.0.0.1:5001/api/Category/parent`,
    // headers:{
    //   'Content-Type': 'application/json',
    //     Accept: 'application/json',
    //    //'Authorization':token
    //    }
     
    }).then(response => {
   if(response.data!=null) 
   {  console.log(response.data);
      callback(response.data);
    }
    else callback(new Error("can't get data"));
 
}).catch(err => console.log(err));
}

//get product by category

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
      url: `https://127.0.0.1:5001/api/Product`,
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


//get sub category 


export function getSubCategory() {
  return dispatch => {
     callSubAPI(data => {
         dispatch(setSub(data));//tra ve cho form
        
    });
  }
}


function setSub(subcategories) {
  console.log(subcategories);
  return {
    type:GET_SUB_CATEGORY,
   subcategories
  };
}

function callSubAPI(callback) {
   var token='Bearer '+localStorage.getItem("token");
    console.log(token);
    axios({
      method: 'get',
      url: `https://127.0.0.1:5001/api/Category/Subcategory`,
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


var category_state={
  parents:[],
   products:[],
   subcategories:[],
}
export default function home_reducer(state =category_state, action) {
  if(action.type=='GET_ALL_CATEGORY')
  {  
    let newState={...state};
    newState.parents=action.parents;
    return newState;
  }
  if(action.type=='GET_ALL_PRODUCT')
  {
    let newState={...state};
    newState.products=action.products
    return newState;
  }
  if(action.type=='GET_SUB_CATEGORY')
  {
    let newState={...state};
    newState.subcategories=action.subcategories
    return newState;
  }
  else return state;
}