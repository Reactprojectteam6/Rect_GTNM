import React, { Component } from 'react';

class CartItem extends Component {

    render() {
        var { item } = this.props;
        var { quantity } = item;
        return (
           
            <tr >
                <td style={{width:"400px"}}>
                    <img  style={{width:"40%", marginLeft:"50px"}}src={"https://127.0.0.1:5001/api/Image/"+item.product.image}
                            alt={item.product.name} className="img-fluid z-depth-0" />
                
                
                    </td>
                <td style={{width:"400px"}}>
                    <h5>
                        <b>{item.product.product_name}</b>
                    </h5>
                </td>
                <td>{item.product.price}Đ</td>
                <td className="center-on-small-only">
                    <span className="qty">{item.quantity}</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label
                             style={{backgroundColor:"white"}}
                            onClick={() => this.onUpdateQuantity(item.product, item.quantity - 1)}
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                        >
                            <a>—</a>
                        </label>
                        <label
                            style={{backgroundColor:"white"}}
                            onClick={() => this.onUpdateQuantity(item.product, item.quantity + 1)}
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                        >
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{item.product.name}</td>
                <td>{this.showSubTotal(item.product.price, item.quantity)}Đ</td>
                <td>
                    <button
                        style={{color:"red",backgroundColor:"white"}}
                        type="button"
                        className="btn btn-sm btn-primary waves-effect waves-light"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Remove item"
                        onClick={() => this.onDelete(item.product)}
                    >
                        X
                    </button>
                </td>

               
            </tr>
        );
    }

    onUpdateQuantity = (product, quantity) => {
        if (quantity > 0) {
            var { onUpdateProductInCart } = this.props;
            onUpdateProductInCart(product, quantity);
            
        }
    }

    onDelete = (product) => {
        var { onDeleteProductInCart } = this.props;
        onDeleteProductInCart(product);
       
    }

    showSubTotal = (price, quantity) => {
        return price * quantity;
    }

}

export default CartItem;
