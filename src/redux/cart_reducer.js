const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_PRODUCT_IN_CART = 'DELETE_PRODUCT_IN_CART';
const UPDATE_PRODUCT_IN_CART='UPDATE_PRODUCT_IN_CART'
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];

export function  actAddToCart(product, quantity) {
    return {
        type:ADD_TO_CART,
        product,
        quantity
    }
}
export function  actDeleteProductInCart(product){
    return {
        type :DELETE_PRODUCT_IN_CART,
        product
    }
}

export function  actUpdateProductInCart(product, quantity ){
    return {
        type :UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}
export default function cart_reducer(state =initialState, action)  {
    var { product, quantity } = action;
    var index = -1; // Không tìm thấy => index = -1
    if(action.type=='ADD_TO_CART')
    {        
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity += parseInt(quantity);
            } else {
                state.push({
                    product,
                    quantity
                });
                alert("add product into cart successfully");
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        }       
    if(action.type=='DELETE_PRODUCT_IN_CART')
     {
            index = findProductInCart(state, product);
            if (index !== -1) {
                state.splice(index, 1);
               
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        }
     if(action.type=='UPDATE_PRODUCT_IN_CART')
     {
            index = findProductInCart(state, product);
            if(index !== -1){
                state[index].quantity = quantity;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        }      
     else return [...state];
    
}

var findProductInCart = (cart, product) => {//tim product da co trong cart hay chua
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}
