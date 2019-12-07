import  axios  from "axios";
import { functionTypeAnnotation } from "@babel/types";

const GET_PRODUCTS_ONSHOP = 'GET_PRODUCTS_ONSHOP';
const GET_SHOP_ID = 'GET_SHOP_ID';
const GET_SHOP = 'GET_SHOP';
const UPDATE_SHOP = 'UPDATE_SHOP';
const DELETE_PRODUCT ='DELETE_PRODUCT';
const GET_ORDERS_SHOP = 'GET_ORDERS_SHOP';
const DELETE_ORDER = 'DELETE_ORDER';
const GET_ORDER_BY_ID = 'GET_ORDER_BY_ID';
//lay products tra ve form
export function getProductsShop(shop_id)
{
    return dispath => {
        CallApi(shop_id,data=>{
            dispath(setProductsShop(data))
        })
    }
}

//action products shop
function setProductsShop(products)
{
    return{
        type : GET_PRODUCTS_ONSHOP,
        products
    }
}


//lay product trong shop tren api
function CallApi(shop_id,callback)
{
    axios({
        method: 'get',
        url : `https://127.0.0.1:5001/api/Product/Shop/${shop_id}`,
        headers:{
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization':'Bearer '+localStorage.getItem("token")
          }
    }).then(response=>{
        if(response.data != null)
        {
            console.log(response.data);
            callback(response.data);
        }
        else callback(new("can't get data"));
    })
}

//lay shop_id biet user_id
export function getShopID()
{
    return dispath =>{
        callShopIDApi(data =>{
            dispath(setShopID(data))
        });
    }
}

function setShopID(shop_id){
    return {
        type : GET_SHOP_ID,
        shop_id
    }
}

function callShopIDApi(callback)
{
    //var token='Bearer '+localStorage.getItem("token");
    var user = JSON.parse(localStorage.getItem('currentUser'));
//    console.log(user.id);
    if(user != null)
    {
        var token='Bearer '+localStorage.getItem("token");
        axios({
            method: 'get',
            url: `https://127.0.0.1:5001/api/User/${user.id}/shop`,
            headers:{
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization':'Bearer '+localStorage.getItem("token")
              }
        }).then(response =>{
            if(response.data!=null) callback(response.data);
            else callback(null);
        }).catch(err => console.log(err));
    }
    else alert("Vui lòng đăng nhập!! please!!!")
}

//lay shop tu shop_id
export function getShop(shop_id)
{
    return dispath =>{
        callShopApi(shop_id,data =>{
            dispath(setShop(data))
        });
    }
}

function setShop(shop){
    return {
        type : GET_SHOP,
        shop
    }
}

function callShopApi(shop_id,callback)
{
    var user = JSON.parse(localStorage.getItem('currentUser'));
    if(user != null)
    {
        var token='Bearer '+localStorage.getItem("token");
        axios({
            method: 'get',
            url: `https://127.0.0.1:5001/api/User/shop/${shop_id}`,
            headers:{
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization':'Bearer '+localStorage.getItem("token")
              }
        }).then(response =>{
            if(response.data!=null) callback(response.data);
            else callback(new("can't get data"));
        }).catch(err => console.log(err));
    }
    else alert("Vui lòng đăng nhập!! please!!!")
}

//UPDATE SHOP
export function UpdateShop(shop_id,name,address)
{
    return dispath =>{
        callUpdateShop(shop_id,name,address,data=>{
            dispath(setUpdateShop(data))
        })
    }
}

function setUpdateShop(shop)
{
    return{
        type: UPDATE_SHOP,
        shop
    }
}
export function callUpdateShop(shop_id,name,address,callback)
{
    var oldShop = JSON.parse(localStorage.getItem('Shop'));
    var newShop = {
        name: name,
        address: address
    };
    console.log(newShop);
    axios({
        method: 'put',
        url: `https://127.0.0.1:5001/api/User/shop/${shop_id}`,
        data: newShop,
        headers:{
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization':'Bearer '+localStorage.getItem("token")
          }
    }).then(response=>{
        if(response.data!=null)
        {
            axios({
                method: 'get',
                url : `https://127.0.0.1:5001/api/User/shop/${shop_id}`,
                headers:{
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization':'Bearer '+localStorage.getItem("token")
                  }
            }).then(response1=>{
                if(response1.data != null)
                {                    
                    localStorage.setItem('Shop',JSON.stringify(response1.data));
                    alert("Update completed!!!!")      
                }
            })
            return callback(response.data);
        }
        else
        {
            alert("Can't update!! Try again later!!")
            return callback(null);
        }
    })
}
//delete product of shop
export function deleteProduct(id)
{   console.log("id la:");
console.log(id);
  return dispatch => {
    axios({
      method:'delete',
      url: `https://127.0.0.1:5001/api/Product/${id}`,
          
     headers:{
    'Content-Type': 'application/json',
     Accept: 'application/json',
    'Authorization':'Bearer '+localStorage.getItem('token')
          }
    }).then(res=>{
     if(res.status=="200") 
     {  axios({
        method: 'get',
        url : `https://127.0.0.1:5001/api/Product/Shop/${localStorage.getItem('shop_id')}`,
        headers:{
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization':'Bearer '+localStorage.getItem("token")
          }
    }).then(response=>{
        if(response.data != null)
        {
            dispatch({type:DELETE_PRODUCT,payload:response.data})
        }
        
    })

    }
  
     if(res.status=="400") dispatch({type:DELETE_PRODUCT,payload:JSON.parse(localStorage.getItem('productShop'))})
    })
   
    //dispatch({type:GET_PRODUCT_DETAIL,Product:product});//tra ve cho form


}
}

//ACTION CREATER GET ORDERS
export function getOrdersShop(shop_id)
{
    return dispath=>{
        callOrdersShop(shop_id,data =>{
            dispath(setOrdersShop(data))
        })
    }
}

function setOrdersShop(orders)
{
    return {
        type: GET_ORDERS_SHOP,
        orders
    }
}

export function callOrdersShop(shop_id,callback)
{
    axios({
        method: 'get',
        url: `https://127.0.0.1:5001/api/Order/shop/${shop_id}`
    }).then(response => {
        if(response.data != null) callback(response.data);
        else callback(null)
    }
    );
}

//DELETE ORDER
export function DeleteOrder(id)
{
    return dispath => {
        callDeleteOrder(id,data=>{
            dispath(setDeleteOrder(data))
        })
    }
}

function setDeleteOrder(orders)
{
    return {
        type: DELETE_ORDER,
        orders
    }
}

export function callDeleteOrder(id,callback)
{
    axios({
        method: 'delete',
        url: `https://127.0.0.1:5001/api/Order/${id}`
    }).then(response=>{
        if(response.data != null)
        {
            axios({
                method: 'get',
                url: `https://127.0.0.1:5001/api/Order/shop/${localStorage.getItem("shop_id")}`
            }).then(response=>{
                if(response.data!=null) callback(response.data);
            })
        }
        else alert("Can't delete");
    })
}

//LAY 1 ORDER BANG ORDER_ID
export function getOrderByID(id)
{
    return dispath => {
        console.log("data");
    
        callGetOrderByID(id,data=>{
            console.log(data);
            dispath(setOrderByID(data))
        })
    }
}


function setOrderByID(order)
{
    return {
        type : GET_ORDER_BY_ID,
        order
    }
}

export function callGetOrderByID(id,callback)
{
    axios({
        method: 'get',
        url: `https://127.0.0.1:5001/api/Order/${id}`
    }).then(response=>{
        if(response.data!=null){
            console.log(response.data)
            callback(response.data)
        }
    })
}

//initialState
var data =localStorage.getItem('shop_id');
var data2 = JSON.parse(localStorage.getItem('productShop'));
var data3 = JSON.parse(localStorage.getItem('Shop'))
var data4 = JSON.parse(localStorage.getItem('Orders'));
var data5 = JSON.parse(localStorage.getItem('orderDetail'));
var shop_state = {
    shop_id : data?data:null,
    shop: data3?data3:null,
    products : data2?data2:[],
    orders: data4?data4:[],
    orderDetail: data5?data5:[]
}


//REDUCER
export default function shop_reducer(state = shop_state, action)
{
    if(action.type === 'GET_PRODUCTS_ONSHOP'){
        let newState = {...state};
        newState.products = action.products;
        localStorage.setItem("productShop",JSON.stringify(newState.products));
        return newState;
    }
     if(action.type === 'GET_SHOP_ID')
    {
        let newState = {...state};
        newState.shop_id = action.shop_id;
        localStorage.setItem("shop_id",newState.shop_id);
        return newState;
    }
     if(action.type === 'GET_SHOP')
    {
        let newState = {...state};
        newState.shop = action.shop;
        localStorage.setItem("Shop",JSON.stringify(newState.shop));
        return newState;
    }
     if(action.type === 'UPDATE_SHOP')
    {
        let newState = {...state}
        newState.shop = action.setShop;
        localStorage.setItem("Shop",JSON.stringify(newState.shop));
        return newState;
    }
    if(action.type==='DELETE_PRODUCT')
    {
        let newState = {...state}
        newState.products= action.payload;
        if(newState.products.length>0) alert("xoa thanh cong");
        localStorage.setItem("productShop",JSON.stringify(newState.products));
        return newState;
    }
    if(action.type==='GET_ORDERS_SHOP')
    {
        let newState = {...state};
        newState.orders = action.orders;
        localStorage.setItem("Orders",JSON.stringify(newState.orders));
        return newState;
    }
    if(action.type === 'DELETE_ORDER')
    {
        let newState = {...state};
        newState.orders = action.orders;
        localStorage.setItem("Orders",JSON.stringify(newState.orders));
        return newState;
    }
    if(action.type === 'GET_ORDER_BY_ID')
    {
        let newState = {...state};
        newState.orderDetail = action.order;
        console.log("dfsdf");
        console.log(newState.orderDetail);
        localStorage.setItem("orderDetail",JSON.stringify(newState.orderDetail));
        return newState;
    }
    else return state;
}
