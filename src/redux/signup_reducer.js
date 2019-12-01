//Signup
import axios from 'axios';
const SET_SIGNUP_SUCCESS = 'SET_SIGNUP_SUCCESS';
export function signup(user_name,email,phone,password,password_confirm,address) { //reducer thuc hien action login xu ly du lieu lay qua
  return dispatch => {

    dispatch(setSignupSuccess(false));

    callSignupApi(user_name,email,phone,password,password_confirm,address,error=> {
      
      if (!error) {
        dispatch(setSignupSuccess(true));//tra ve cho form
      } else {
        
      }
    });
  }
}

function setSignupSuccess(isSignupSuccess) {
  return {
    type: SET_SIGNUP_SUCCESS,
    isSignupSuccess
  };
}


function callSignupApi(user_name,email,phone,password,password_confirm,address,callback) {
    var User={
        user_name:user_name,
        email:email,
        phone:phone,
        password:password,
        address:address,
        role:"1"
    }
    console.log(User);
   if(password==password_confirm) {
  setTimeout(() => {
   axios.post(`https://127.0.0.1:5001/api/User`,User)
      .then(res => {
        console.log('RES')
        console.log(res);
        console.log(res.data);
        if(res.status=="200")
        {
            return callback(null);
        }
        else return callback(new Error("can't create user"));
      })
     
  }, 1000);

}
else {
  return callback(new Error("Password and password confirm is not similar please enter again to signup!!!"))
}

}
 
var signup_state={
  isSignupSuccess:false,
}
export default function signup_reducer(state =signup_state, action) {
 
  if(action.type=='SET_SIGNUP_SUCCESS')
  {  let newState={...state};
    newState.isSignupSuccess=action.isSignupSuccess;
    if(newState.isSignupSuccess==true)alert("singup successfully");
    return newState;

  }

      return state;
  
}