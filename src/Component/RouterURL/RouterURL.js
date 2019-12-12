import React, { Component } from 'react';
import {  Route,  Switch } from "react-router-dom";
import Login from '../Login/Login.js';
import Signup from '../Signup/Signup.js';
import Home from '../Home/Home.js';
import Search from '../Search/Search.js';
import MenuResult from '../Menu/MenuResult';
import Detail from '../Product_Detail/Detail';
import Recent from '../Recent/Recent.js';
import Shop from '../Shop/Shop.js';
import ProfileShop from '../Shop/ProfileShop.js';
import OrderManage from '../Shop/OrderManage.js';
import OrderDetail from '../Shop/OrderDetail.js';
import ProductManage from '../Shop/ProductManage.js';
import ProductDetail from '../Shop/ProductDetail.js';
import AddProduct from '../Shop/AddProduct';
import AddByExcel from '../Shop/AddByExecl.js';

class RouterURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/signup" component={Signup}/>
                    <Route exact path="/search" component={Search}/>
                    <Route exact path="/category" component={MenuResult}/>
                    <Route exact path="/product" component={Detail}/>
                    <Route exact path="/recently_viewed" component={Recent}/>
                    <Route exact path="/shop" component={Shop}/>
                    <Route exact path="/shop/profile" component={ProfileShop}/>
                    <Route exact path="/shop/order" component={OrderManage}/>
                    <Route exact path="/shop/order/detail" component={OrderDetail}/>
                    <Route exact path="/shop/products" component={ProductManage}/>
                    <Route exact path="/shop/products/detail" component={ProductDetail}/>
                    <Route exact path="/shop/products/new" component={AddProduct}/>
                    <Route exact path="/shop/products/excel" component={AddByExcel}/>
                    <Route component={Home}/>
                    
                </Switch>
            </div>
        );
    }
}

export default RouterURL;
