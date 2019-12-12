import React from 'react';
import Dashboard from './Dashboard';
import { connect } from 'react-redux';
import {getSubCategory} from '../../redux/home_reducer.js';
import {GetColors,addProduct} from '../../redux/shop_reducer.js';

class AddProduct extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            product_name:"",
            description: "",
            cat_id: "",
            price: "",
            quantity: "",
            color_id: "",
        }
    }
    componentWillMount(){
        this.props.getSubCategory();
        this.props.GetColors();
    }
    render()
    {
        let {product_name,description,cat_id,price,quantity,color_id}=this.state
        let {subcategory,colors,shop_id} = this.props
        console.log(colors);
        return(
            <div>
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <Dashboard/>
                </div>
                
                
                <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                    <h3 style={{marginTop:"15px"}}>Thêm sản phẩm mới</h3>
                    <hr/>
                    
                    
                    <div class="row">
                        <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <p>Tên sản phẩm</p>                    
                            <input type="text" class="form-control" value={this.state.product_name} onChange={e=>{this.setState({product_name: e.target.value})}} />
                            <p>Danh mục</p>                  
                            <select class="form-control" required="requried" onChange={e=>{this.setState({cat_id: e.target.value})}}>
                                {
                                    subcategory.length>0 &&
                                    subcategory.map(item=>{
                                        return(
                                            <option value={item.id}>{item.name}</option>
                                        )
                                    })
                                }
                            </select>
                            <p>{this.state.cat_id}</p>
                            
                            <p>Mô tả</p>
                            <textarea className="form-control" value={this.state.description} onChange={e=>{this.setState({description: e.target.value})}}></textarea>

                            <p>Giá</p>                    
                            <input type="text" class="form-control" value={this.state.price} onChange={e=>{this.setState({price: e.target.value})}}/>

                            <p>Số lượng</p>                    
                            <input type="text" class="form-control" value={this.state.quantity} onChange={e=>{this.setState({quantity: e.target.value})}}/>

                            <p>Màu sắc</p>                  
                            <select class="form-control" required="required" onChange={e=>{this.setState({color_id: e.target.value})}}>
                            {
                                    colors.length>0 &&
                                    colors.map(item=>{
                                        return(
                                            <option value={item.id}>{item.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    
                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        abc
                    </div>
                    </div>
                    
                
                
                
                <div class="row" style={{marginTop:"30px"}}>
                    <button type="button" class="btn btn-warning" style={{width:"130px",height:"34px",marginLeft:"200px"}}>Hủy</button>
                    
                    <button type="button" class="btn btn-default" style={{width:"130px",height:"34px",marginLeft:"50px"}}
                    onClick={e=>{this.props.addProduct(product_name,description,cat_id,price,quantity,shop_id,"ChongNang1.jpg",false,color_id)}}
                    >Thêm và ẩn</button>
                    
                    <button type="button" class="btn btn-success" style={{width:"130px",height:"34px",marginLeft:"50px"}}
                    onClick={e=>{this.props.addProduct(product_name,description,cat_id,price,quantity,shop_id,"ChongNang1.jpg",true,color_id)}}
                    >Thêm và hiển thị</button>
                </div>
                
                
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        shop_id: state.shopState.shop_id,
        subcategory:state.homeState.subcategories,
        colors: state.shopState.colors
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getSubCategory:()=> dispatch(getSubCategory()),
        GetColors: ()=>dispatch(GetColors()),
        addProduct: (product_name,description,cat_id,price,quantity,shop_id,image,permission,color_id)=>dispatch(addProduct(product_name,description,cat_id,price,quantity,shop_id,image,permission,color_id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddProduct);