
import axios from 'axios';
const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';    
export function show(product) {

  return dispatch => {
   
        dispatch({type:GET_PRODUCT_DETAIL,Product:product});//tra ve cho form
        
   
  }
}


var data = JSON.parse(localStorage.getItem('detail'));
var initialState = data ? data : [];
export default function product_reducer(state =initialState, action) {
  if(action.type=='GET_PRODUCT_DETAIL')
  { let newState={...state};
    newState.Product=action.Product
    localStorage.setItem('detail', JSON.stringify(newState));
    return newState;
  }
  else return state;
}