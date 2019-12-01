import React, { Component } from 'react';
import {  Route,  Switch } from "react-router-dom";
import Login from '../Login/Login.js';
import Signup from '../Signup/Signup.js';
import Home from '../Home/Home.js';
import Search from '../Search/Search.js';
import MenuResult from '../Menu/MenuResult';
import Detail from '../Product_Detail/Detail';
import Recent from '../Recent/Recent.js';
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
                    <Route component={Home}/>
                </Switch>
            </div>
        );
    }
}

export default RouterURL;
