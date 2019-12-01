const RECENTLY_VIEWED = 'RECENTLY_VIEWED';
var data = JSON.parse(localStorage.getItem('RECENT'));
var initialState = data ? data : [];
export function  addToRecentlyViewed(product) {
    return {
        type:RECENTLY_VIEWED,
        product,
       
    }
}

export default function recent_reducer(state =initialState, action)  {
    var { product } = action;
    var index = -1; // Không tìm thấy => index = -1
    if(action.type=='RECENTLY_VIEWED')
    {        index = findProductInCart(state, product);
            if (index == -1) {
                state.push({
                    product,
                });
            }
            localStorage.setItem('RECENT', JSON.stringify(state));
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
