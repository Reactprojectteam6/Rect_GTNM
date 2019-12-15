import React, { Component } from 'react';
import {  Route,  Switch } from "react-router-dom";
import Login from '../Login/Login.js';
import Signup from '../Signup/Signup.js';
import Home from '../Home/Home.js';
import Search from '../Search/Search.js';
import MenuResult from '../Menu/MenuResult.js';
import Detail from '../Product_Detail/Detail.js';
import Recent from '../Recent/Recent.js';
import CartContainer from '../Cart/CartContainer.js';
import About from '../About/About.js';
import Help from '../Help/Help.js';
import Contact from '../Contact/Contact.js'
import Complete from '../Cart/Complete.js';
import Profile from '../Profile/Profile.js';
import Orderhistory from '../OrderHistory/Orderhistory.js';
import Detailoforder from '../OrderHistory/Detailoforder.js';
import ResultFilter from '../Menu/ResultFilter.js';
import AdminDashboard from '../Admin/AdminDashboard.js';
import AdminUser from '../Admin/AdminUser.js';
import User from '../Admin/User.js';
import AddUser from '../Admin/AddUser.js';
import AdminStore from '../Admin/AdminStore.js';
import PaidShop from '../Admin/PaidShop.js';
import Webinfor from '../Admin/Webinfor.js';
import Shop from '../Shop/Shop.js';
import ProfileShop from '../Shop/ProfileShop.js';
import OrderManage from '../Shop/OrderManage.js';
import OrderDetail from '../Shop/OrderDetail.js';
import ProductManage from '../Shop/ProductManage.js';
import ProductDetail from '../Shop/ProductDetail.js';
import AddProduct from '../Shop/AddProduct';
import AddByExcel from '../Shop/AddByExcel.js';
import Payment from '../Shop/Payment.js';
class RouterURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/signup" component={Signup}/>
                    <Route exact path="/search" component={Search}/>
                    <Route exact path="/category/:id" component={MenuResult}/>
                    <Route exact path="/product/:id"component={Detail}/>
                    <Route exact path="/recently_viewed" component={Recent}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/cart" component={CartContainer}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/help" component={Help}/>
                    <Route exact path="/order" component={Complete}/>
                    <Route exact path="/profile/:id" component={Profile}/>
                    <Route exact path="/orderhistory/:id" component={Orderhistory}/>
                    <Route exact path="/order/:id" component={Detailoforder}/>
                    <Route exact path="/filter/by=:a/value=:b" component={ResultFilter}/>
                    <Route exact path="/admin" component={AdminDashboard}/>
                    <Route exact path="/admin/users" component={AdminUser}/>
                    <Route exact path="/admin/user/:id" component={User}/>
                     <Route exact path="/admin/new/user" component={AddUser}/>
                     <Route exact path="/admin/shops" component={AdminStore}/>
                     <Route exact path="/admin/store/:id" component={PaidShop}/>
                     <Route exact path="/webinfor" component={Webinfor}/>
                     {/*shop*/}

                    <Route exact path="/shop" component={Shop}/>
                    <Route exact path="/shop/profile" component={ProfileShop}/>
                    <Route exact path="/shop/order" component={OrderManage}/>
                    <Route exact path="/shop/order/detail" component={OrderDetail}/>
                    <Route exact path="/shop/products" component={ProductManage}/>
                    <Route exact path="/shop/products/detail" component={ProductDetail}/>
                    <Route exact path="/shop/products/new" component={AddProduct}/>
                    <Route exact path="/shop/products/excel" component={AddByExcel}/>
                     <Route exact path="/shop/payment" component={Payment}/> 
                     <Route component={Home}/>
                </Switch>
            </div>
        );
    }
}

export default RouterURL;
