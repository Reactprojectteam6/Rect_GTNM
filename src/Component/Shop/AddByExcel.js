import React from 'react';
import Dashboard from './Dashboard';
import { connect } from 'react-redux';
import * as XLSX from 'xlsx';
import {GetColors,addExcel} from '../../redux/shop_reducer';
import {getSubCategory} from '../../redux/home_reducer';

class AddByExcel extends React.Component
{
    constructor(props)
  {
    super(props);
    this.state = {
      read: false,
      data: []
    }
  }
  componentWillMount()
  {
      this.props.getSubCategory();
      this.props.GetColors();
  }
  onChange(e){
    var file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr,{type:'binary'});
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws,{header:1});
      if(data!=null)
      this.setState({
        read: true,
        data: data
      })      
    }
    reader.readAsBinaryString(file);
  }
    onClick(e)
    {
        let {colors,subcategory,shop_id} = this.props;
        let products = [];
        for(var i=1; i<this.state.data.length;i++)
        {
            let cat_id = "";
            let color_id ="";
            for(var j=0;j<subcategory.length;j++)
            {
               // console.log(subcategory[j])
                if(subcategory[j].name==this.state.data[i][2]) cat_id = subcategory[j].id
            }
            for(var j=0;j<colors.length;j++)
            {
               // console.log(subcategory[j])
                if(colors[j].name==this.state.data[i][6]) color_id = colors[j].id
            }
            let product = {
                product_name: this.state.data[i][0],
                description: this.state.data[i][1],
                cat_id: cat_id,
                price: this.state.data[i][3],
                quantity: this.state.data[i][4],
                shop_id: shop_id,
                image: this.state.data[i][5],
                permission: false,
                color_id: color_id,
            }
            products.push(product);
        }
        this.props.addExcel(products);
        
    }
    render()
    {
        
        return(
            <div>
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <Dashboard/>
                </div>

                
                <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                    <h3 style={{marginTop:"15px"}}>Thêm nhiều sản phẩm</h3>
                    <hr/>

                    <input type="file" ref={fileInput => this.fileInput = fileInput} style={{display:"none"}} onChange={(e)=>{this.onChange(e)}} />
                    
                    <button type="button" class="btn btn-success" onClick={()=>this.fileInput.click()}>Chọn tập tin</button>
                    
                    
                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Tên sản phẩm</th>
                                    <th>Mô tả</th>
                                    <th>Danh mục</th>
                                    <th>Giá</th>
                                    <th>Số lượng</th>
                                    <th>Ảnh</th>
                                    <th>Màu</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.read == true &&
                                this.state.data.map((item,index)=>{
                                    if(index>0) return(
                                    <tr>
                                        {
                                        item.map((k)=>{
                                            return(
                                            <td>{k}</td>
                                            )
                                        })
                                        }
                                    </tr>
                                    )
                                })

                                }
                            </tbody>
                        </table>
                    </div>
                    
                    <button type="button" class="btn btn-warning" onClick={(e)=>{this.onClick(e)}}>Submit</button>
                    
                </div>
                
            </div>
        ) 
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
        addExcel: (products)=>dispatch(addExcel(products))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddByExcel);