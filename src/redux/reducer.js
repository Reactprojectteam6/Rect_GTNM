
import login_reducer from './login_reducer';
import {combineReducers} from 'redux';

import cart_reducer from './cart_reducer';
import signup_reducer from './signup_reducer';
import home_reducer from './home_reducer';
import search_reducer from './search_reducer';
import menu_reducer from './menu_reducer';
import recent_reducer from './recent_reducer';
import product_reducer from './product_reducer';
const  reducer=combineReducers(
  {
    loginState: login_reducer ,
    cartState: cart_reducer,
    signupState:signup_reducer,
    homeState:home_reducer,
    searchState:search_reducer,
    menuState:menu_reducer,
    recentState:recent_reducer,
    productState:product_reducer,
  }
)
export default reducer;
