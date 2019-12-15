import React from 'react';
import Dashboard from './Dashboard';
import { connect } from 'react-redux';
import {getSubCategory} from '../../redux/home_reducer.js';
import {GetColors,addProduct} from '../../redux/shop_reducer.js';
import axios from 'axios';
class AddProduct extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            image:"",
            product_name:"",
            description: "",
            cat_id: "",
            price: "",
            quantity: "",
            color_id: "",
            file:null,
            imagePreviewUrl: null,
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    async onSubmit(e){
        e.preventDefault() 
        let res = await this.uploadFile(this.state.file);
        this.setState({image:this.state.file.name});
    }
    onChange(e) {
        this.setState({file:e.target.files[0]});
        let reader = new FileReader();
     
        reader.onloadend = () => {
          this.setState({
            imagePreviewUrl: reader.result
          });
        }
     
        reader.readAsDataURL(e.target.files[0])
    }
    async uploadFile(file){


        const formData = new FormData();

        formData.append('file',file)
      
        return  await axios.post('https://127.0.0.1:5001/api/Image', formData,{
            headers: {
                'content-type': 'multipart/form-data'
            }
        }).then(res=>{if(res.status=="200") console.log(res.data); alert("upload thanh cong")});
      }
    componentWillMount(){
        this.props.getSubCategory();
        this.props.GetColors();
    }
    render()
    {
        let {product_name,description,cat_id,price,quantity,color_id,image}=this.state
        let {subcategory,colors,shop_id} = this.props
        let $imagePreview = (<div className="previewText image-container">Xin chọn ảnh để xem trước</div>);
        if (this.state.imagePreviewUrl) {
          $imagePreview = (<div className="image-container" ><img src={this.state.imagePreviewUrl} alt="icon" width="200" /> </div>);
        }
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
                                <option style={{display:"none"}}selected>None</option>
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
                             <option selected style={{display:"none"}}>None</option>   
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
                    <form onSubmit={ this.onSubmit }>
            <h1>Ảnh sản phẩm</h1>
            <input type="file" onChange={this.onChange} />
            <button type="submit">Chọn ảnh</button>
            { $imagePreview }
            

          </form>   
                    </div>
                    </div>
                    
                
                
                
                <div class="row" style={{marginTop:"30px"}}>
                    <button type="button" class="btn btn-warning" style={{width:"130px",height:"34px",marginLeft:"200px"}}>Hủy</button>
                    
                    <button type="button" class="btn btn-default" style={{width:"130px",height:"34px",marginLeft:"50px"}}
                    onClick={e=>{this.props.addProduct(product_name,description,cat_id,price,quantity,shop_id,false,color_id,image)}}
                    >Thêm và ẩn</button>
                    
                    <button type="button" class="btn btn-success" style={{width:"130px",height:"34px",marginLeft:"50px"}}
                    onClick={e=>{this.props.addProduct(product_name,description,cat_id,price,quantity,shop_id,true,color_id,image)}}
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
        addProduct:(product_name,description,cat_id,price,quantity,shop_id,permission,color_id,image)=>dispatch(addProduct(product_name,description,cat_id,price,quantity,shop_id,permission,color_id,image))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddProduct);