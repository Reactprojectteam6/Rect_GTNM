import React from 'react';
import Dashboard from './Dashboard';
import { connect } from 'react-redux';
import {getProductsShop,getShop} from '../../redux/shop_reducer';
import './Shop.css'

class Shop extends React.Component
{
    componentWillMount()
    {
        var shop_id = localStorage.getItem('shop_id');
        this.props.getProductsShop(shop_id);
        this.props.getShop(shop_id);
    }
    render()
    {
        let{products}=this.props
        return(
            <div>
                
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <Dashboard/>
                </div>
                
                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 bg-right">
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
                
                
            </div>
        );
    }
}

const mapStateToProps = (state) =>
{
    return{
        products: state.shopState.products,
        shop: state.shopState.shop
    }
}

const mapDispatchToProps = (dispath) =>
{
    return{
        getProductsShop: (shop_id)=>dispath(getProductsShop(shop_id)),
        getShop: (shop_id) => dispath(getShop(shop_id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Shop);