import React from 'react';
import Dashboard from './Dashboard';
import { connect } from 'react-redux';
import {getProductsShop,getShop,getOrdersShop} from '../../redux/shop_reducer';
import {deleteProduct} from '../../redux/shop_reducer';
import './Shop.css'

class Shop extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            showMore: false,
            quantity: 1
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick()
    {
        this.setState({
            showMore: true,
            
        })
        this.setState((prevState) => ({
            quantity: prevState.quantity + 1
            }))
    }
    componentWillMount()
    {
        var shop_id = localStorage.getItem('shop_id');
        //this.props.getProductsShop(shop_id);
        this.props.getShop(shop_id);
        //this.props.getOrdersShop(shop_id);
    }
    render()
    {  
        console.log("shop")
        console.log(this.props);
        let{products=[],isShop}=this.props
        const numberOfItems = this.state.showMore ? this.state.quantity : 1
        return(
            <div>
                { isShop!=null &&
                
                <div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <Dashboard/>
                </div>
                
                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 bg-right">
                    <div class="row">
                        {products.length>0 &&
                        products.slice(0,numberOfItems).map((item)=>{
                            return(
                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                            <div className="thumbnail bg-thumnail abc">
                                                    <img src={require('../../assets/'+item.image)} style={{width:"250px",height:"250px"}} alt=""></img> 
                                                    <button class="overlay" onClick={e=>{this.props.deleteProduct(item.id);
                                                    //this.props.getProductsShop(localStorage.getItem('shop_id'));
                                                    }}><p style={{marginTop:"-10px",color:"#B22222",marginLeft:"-5px"}}>X</p></button>
                                                <h5>{item.product_name}</h5>
                                                <br/>
                                                <p>Số lượng : <i>{item.quantity}</i></p>
                                            </div>
                                        </div>
                            )
                        })}
                        
                        
                        
                    </div>  
                    <button type="button" class="btn btn-default" style={{marginLeft:"500px",marginTop:"50px",marginBottom:"20px"}} onClick={this.handleClick}>Show More</button>
                </div>
                </div>
    }
    {isShop==null &&
    <div>
        <div class="row" style={{marginTop:"50px"}}>
            <div class="container">
                <div style={{backgroundColor:"#A52A2A",height:"160px"}} >   
                    <div class="container" style={{paddingTop:"23px"}}>
                        <h4 className="label">Hiện tại bạn chưa đăng kí để trở thành người bán hàng trên Style Shop.  Muốn biết thêm chi tiết vui lòng đặt câu hỏi tại đây !!! </h4>
                    </div>
                    <div className="row" style={{marginTop:"23px",marginLeft:"220px"}}>
                        
                        <div class="container">
                            <input type="text" className="form-control" style={{width:"480px",marginLeft:"40px",float:"left",marginTop:"20px"}}  placeholder="Bạn muốn đặt câu hỏi gì?"  /> 
                            <button type="button" className="btn btn-default" style={{backgroundColor:"#D3D3D3",marginTop:"20px",marginLeft:"5px"}}>Gửi</button>  
                        </div>
                    </div>
                </div>
            </div>
            
           
        </div>
    </div>   

    }
                
            </div>
        );
    }
}

const mapStateToProps = (state) =>
{
    var isShop = localStorage.getItem("shop_id")
    return{
       isShop:isShop,
       products:state.shopState.products
    }
}

const mapDispatchToProps = (dispath) =>
{
    return{
        //getProductsShop: (shop_id)=>dispath(getProductsShop(shop_id)),
        getShop: (shop_id) => dispath(getShop(shop_id)),
        deleteProduct:(id)=>dispath(deleteProduct(id)),
       // getOrdersShop: (shop_id)=>dispath(getOrdersShop(shop_id))

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Shop);