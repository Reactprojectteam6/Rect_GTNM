import  axios  from "axios";

const GET_PRODUCTS_ONSHOP = 'GET_PRODUCTS_ONSHOP';
const GET_SHOP_ID = 'GET_SHOP_ID';
const GET_SHOP = 'GET_SHOP';
const UPDATE_SHOP = 'UPDATE_SHOP';
const GET_ORDERS_SHOP = 'GET_ORDERS_SHOP';
const DELETE_ORDER = 'DELETE_ORDER';
const GET_ORDER_BY_ID = 'GET_ORDER_BY_ID';
const UPDATE_ORDER = 'UPDATE_ORDER';
const SET_PERMISSION_PRODUCT = 'SET_PERMISSION_PRODUCT';
const GET_PRODUCT = 'GET_PRODUCT';
const ADD_PRODUCT = 'ADD_PRODUCT';
const ADD_EXCEL = 'ADD_EXCEL';
const GET_LIST_PAYMENT_OF_SHOP='GET_LIST_PAYMENT_OF_SHOP';
const GET_WEB_PAYPAL_ACCOUNT='GET_WEB_PAYPAL_ACCOUNT';
const SET_PAYMENT_FOR_WEB='SET_PAYMENT_FOR_WEB';
//lay products tra ve form
export function getProductsShop(shop_id)
{
    //alert(shop_id);
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
    //var oldShop = JSON.parse(localStorage.getItem('Shop'));
    var newShop = {
        shop_name: name,
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

// DUNG DE HUY HOAC XAC NHAN DON HANG
export function UpdateOrder(id,status)
{
    return dispatch =>{
        CallUpdateOrder(id,status,data=>{
            dispatch(setUpdateOrder(data))
        })
    }
}

function setUpdateOrder(order)
{
    return{
        type: UPDATE_ORDER,
        order
    }
}
export function CallUpdateOrder(id,status,callback)
{ 
    var newOrder = {
        status: status
    }
    axios({
        method: 'put',
        url: `https://127.0.0.1:5001/api/Order/${id}`,
        data: newOrder
    }).then(response=>{
        if(response.data!=null)
        {
            axios({
                method: 'get',
                url: `https://127.0.0.1:5001/api/Order/${id}`
            }).then(response=>{
                if(response.data!=null)
                {
                    alert("Updated!!!");
                    localStorage.setItem("orderDetail",JSON.stringify(response.data));
                    callback(response.data);
                }
            })
        }
    })
}
//update permission
export function UpdatePermission(id,permission)
{
    return dispatch => {
        callUpdatePermission(id,permission,data=>{
            dispatch(setPermissionProduct(data))
        })
    }
}

function setPermissionProduct(products)
{
    return{
        type: SET_PERMISSION_PRODUCT,
        products
    }
}

export function callUpdatePermission(id,permission,callback)
{
    var newProduct = {
        permission: permission
    }
    axios({
        method: 'put',
        url: `https://127.0.0.1:5001/api/Product/${id}/permission`,
        data: newProduct
    }).then(response=>{
        if(response.data!=null)
        {
            var shop_id = localStorage.getItem('shop_id');
            axios({
                method: 'get',
                url: `https://127.0.0.1:5001/api/Product/Shop/${shop_id}`,
                headers:{
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization':'Bearer '+localStorage.getItem("token")
                  }
            }).then(res =>{
                if(res.data != null){
                    console.log("call shop");
                    console.log(res.data);
                    callback(res.data);
                }
            })
        }
    })
}

//GET PRODUCT BY ID
export function getProduct(productDetail)
{  
    //alert("get produtc by id");
    return dispatch => {
        dispatch({type: GET_PRODUCT,payload: productDetail})
    }
}

//UPDATE PRODUCT
export function UpdateProduct(id,product_name,description,cat_id,price,quantity,permission)
{
    return dispatch => {
        callUpdateProduct(id,product_name,description,cat_id,price,quantity,permission,data=>{
            dispatch(setUpdateProduct(data))
        })
    }
}

function setUpdateProduct(productDetail)
{
    return {
        type: 'UPDATE_PRODUCT',
        productDetail
    }
}
export function callUpdateProduct(id,product_name,description,cat_id,price,quantity,permission,callback)
{    
    console.log("state")
    console.log(cat_id,price,quantity);
    var product = {
        product_name: product_name,
        description: description,
        cat_id: cat_id,
        price: price,
        quantity: quantity,
        permission: permission
    }
    axios({
        method: 'put',
        url: `https://127.0.0.1:5001/api/Product/${id}/shop`,
        data: product
    }).then(response=>{
        if(response.data!=null){
            alert("Updated!!")
            axios({
                method: 'get',
                url: `https://127.0.0.1:5001/api/Product/${id}/detail`
            }).then(res=>{
                if(res.data!=null) {
                    //alert("dafgahsdf");
                    callback(res.data[0])
                }
            })
        }
    })
}
// get all color 
export function GetColors()
{
    return dispatch => {
        callGetColors(data=>{
            dispatch(setColors(data))
        })
    }
}

function setColors(colors)
{
    return {
        type: 'GET_COLORS',
        colors
    }
}

export function callGetColors(callback)
{
    axios({
        method: 'get',
        url: `https://127.0.0.1:5001/api/Color`
    }).then(response=>{
        if(response.data != null) callback(response.data);
    })
}
// Add product
export function addProduct(product_name,description,cat_id,price,quantity,shop_id,permission,color_id,image)
{
    return dispatch => {
        callAddProduct(product_name,description,cat_id,price,quantity,shop_id,permission,color_id,image,data=>{
            dispatch(setAddProduct(data));
        })
    }
}

function setAddProduct(products)
{
    return {
        type: ADD_PRODUCT,
        products
    }
}
export function callAddProduct(product_name,description,cat_id,price,quantity,shop_id,permission,color_id,image,callback)
{    console.log("image");
     console.log(image);
    var product  = {
        product_name: product_name,
        description: description,
        cat_id: cat_id,
        price: price,
        quantity: quantity,
        shop_id: shop_id,
        image: image,
        permission: permission,
        color_id: color_id
    }
    axios({
        method: 'post',
        url: `https://127.0.0.1:5001/api/Product`,
        data: product
    }).then(response=>{
        if(response.data!=null)
        {
            alert("updated!!")
            var shop_id = localStorage.getItem('shop_id');
            console.log(shop_id);
            axios({
                method: 'get',
                url: `https://127.0.0.1:5001/api/Product/Shop/${shop_id}`,
                headers:{
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization':'Bearer '+localStorage.getItem("token")
                  }
            }).then(res=>{
                if(res.data!=null) callback(res.data);
            })
        }
    })
}
//ADD EXCEL
export function  addExcel(products) {
    return dispatch =>{
        callAddExcel(products,data=>{
            dispatch(setAddExcel(data));
        })
    }
}

function setAddExcel(products) {
    return {
        type:ADD_EXCEL,
        products
    }
}

async function callAddExcel(products,callback) {
    for(var i = 0; i < products.length; i++)
    {
       await axios({
            method: 'post',
            url: `https://127.0.0.1:5001/api/Product`,
            data: products[i]
        }).then(response=>{
            if(response.data!=null) alert("Updated");
        })
    }
    var shop_id = localStorage.getItem('shop_id');
    axios({
        method: 'get',
        url: `https://127.0.0.1:5001/api/Product/Shop/${shop_id}`,
        headers:{
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization':'Bearer '+localStorage.getItem("token")
          }
    }).then(res=>{
        if(res.data!=null) callback(res.data);
    })
}
export function getListPayment()
{ var shop_id=localStorage.getItem('shop_id');
  return dispatch=>{
    axios({
        method: 'get',
        url: `https://127.0.0.1:5001/api/Shop/Payment/${shop_id}`,
        headers:{
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization':'Bearer '+localStorage.getItem("token")   
        } 
    }).then(res=>{
     if(res.status=="200") dispatch({type:GET_LIST_PAYMENT_OF_SHOP,payload:res.data});
    })
      
  }

}
export function getPaypalAccountOfWeb()
{ return dispatch=>{
    axios({
        method: 'get',
        url: `https://127.0.0.1:5001/api/Shop/PaypalWeb`,
        headers:{
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization':'Bearer '+localStorage.getItem("token")   
        } 
    }).then(res=>{
     if(res.status=="200") dispatch({type:GET_WEB_PAYPAL_ACCOUNT,payload:res.data});
    })
}

}
export function setPaymentforweb()
{  alert("sdfhsdf");
     return dispatch=>{
    var shop_id=localStorage.getItem('shop_id')
    var check={
    date_paid:new Date(Date.now()),
    shop_id:shop_id,
    money:200000
    }
    axios({
     method:"post",   
     url:`https://127.0.0.1:5001/api/Shop/pay/web`,
     data:check,
     headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization':'Bearer '+localStorage.getItem("token")   
    } 

    }).then(res=>{if(res.status=="200")
       { axios({
        method: 'get',
        url: `https://127.0.0.1:5001/api/Shop/Payment/${shop_id}`,
        headers:{
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization':'Bearer '+localStorage.getItem("token")   
        } 
    }).then(res1=>{
     if(res.status=="200") dispatch({type:SET_PAYMENT_FOR_WEB,payload:res1.data});
    })
    }

       }
    )
}

}

//initialState
var data =localStorage.getItem('shop_id');
var data2 = JSON.parse(localStorage.getItem('productShop'));
var data3 = JSON.parse(localStorage.getItem('Shop'))
var data4 = JSON.parse(localStorage.getItem('Orders'));
var data5 = JSON.parse(localStorage.getItem('orderDetail'));
var data6 = JSON.parse(localStorage.getItem('productDetail'))
var shop_state = {
    shop_id : data?data:null,
    shop: data3?data3:null,
    products : data2?data2:[],
    orders: data4?data4:[],
    orderDetail: data5?data5:[],
    productDetail:data6?data6:null,
    colors:[],
    list_payments:[],
    webpaypal:[],
    pay:false
}
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
    if(action.type === 'UPDATE_ORDER')
    {
        let newState = {...state};
        newState.orderDetail = action.order;
        localStorage.setItem("orderDetail",JSON.stringify(newState.orderDetail));
        return newState;
    }
    if(action.type == 'SET_PERMISSION_PRODUCT')
    {
        let newState = {...state};
        newState.products = action.products;
        console.log("set permission");
        console.log(newState.products);
        localStorage.setItem("productShop",JSON.stringify(newState.products));
        return newState;
    }
    if(action.type === 'GET_PRODUCT')
    {   
        let newState = {...state};
        newState.productDetail = action.payload;
        localStorage.setItem("productDetail",JSON.stringify(newState.productDetail));
        return newState;
    }
    if(action.type == 'UPDATE_PRODUCT')
    {
        let newState = {...state};
        newState.productDetail = action.productDetail;
        localStorage.setItem("productDetail",JSON.stringify(newState.productDetail));
        return newState;
    }
    if(action.type === 'GET_COLORS')
    {
        let newState = {...state};
        newState.colors = action.colors;
        return newState;
    }
    if(action.type === 'ADD_PRODUCT')
    {
        let newState = {...state};
        newState.products = action.products;
        localStorage.setItem("productShop",JSON.stringify(newState.products));
        return newState;
    }
    if(action.type === 'ADD_EXCEL')
    {
        let newState = {...state};
        newState.products = action.products
        localStorage.setItem("productShop",JSON.stringify(newState.products));
        return newState;
    }
    if(action.type=='GET_LIST_PAYMENT_OF_SHOP')
    {   let newState = {...state};
        newState.list_payments= action.payload;
        console.log(newState.list_payments);
        return newState;
    }
    if(action.type=='GET_WEB_PAYPAL_ACCOUNT')
    { let newState = {...state};
    newState.webpaypal= action.payload;
    console.log(newState.webpaypal);
    return newState;

    }
    if(action.type=='SET_PAYMENT_FOR_WEB')
    {let newState = {...state};
    newState.list_payments= action.payload;
    if(newState.pay==true) alert("tao hoa don thanh cong");
    return newState;

    }
    else return state;
}
