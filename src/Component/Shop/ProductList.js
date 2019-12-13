import React from 'react';
import Dashboard from './Dashboard';
import { connect } from 'react-redux';
import {getProductsShop} from '../../redux/shop_reducer';

class ProductList extends React.Component
{
    componentWillMount()
    {
        var shop_id = localStorage.getItem('shop_id');
        this.props.getProductsShop(shop_id);
    }
    render(){
        let{products}=this.props
        return(
            <div>
                
                <div class="row">
                    {products.map((item)=>{
                        return(
                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                        <a href="#" className="thumbnail bg-thumnail">
                                            <img src={require('../../assets/'+item.image)} style={{width:"250px",height:"250px"}} alt=""/>
                                            <h5>{item.product_name}</h5>
                                            <br/>
                                            <p>Số lượng : <i>{item.quantity}</i></p>
                                        </a>
                                    </div>
                        )
                    })}
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = (state) =>
{
    return{
        products: state.shopState.products,
    }
}

const mapDispatchToProps = (dispath) =>
{
    localStorage.getItem('shop_id')
    return{
        getProductsShop: (shop_id)=>dispath(getProductsShop(shop_id)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);