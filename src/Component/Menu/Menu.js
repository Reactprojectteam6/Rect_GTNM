import React from 'react';
import './Menu.css';
import {getSubCategory,getAllCategory} from '../../redux/home_reducer';
import {getCategoryName,getProductByCategory} from '../../redux/menu_reducer';
import {sort} from '../../redux/product_reducer';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
class Menu extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {value:"",by:""};
        this.change=this.change.bind(this);
    }
    componentDidMount()
    {  this.props.getSubCategory();
        this.props.getAllCategory();
    }
    change(event)
    {
      this.setState({value: event.target.value});
    }
    render()
    {  let {list_cate,list_sub}=this.props;
      let {id,name}=this.state;
    console.log(this.props);
        return(
            <div>
            
              <div className="nav-side-menu">
              <div className="brand">
             </div>
            <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content" style={{color:"brown"}}>Danh Mục Sản Phẩm</i>
             <div className="menu-list">
           
             <ul style={ {  border: "1px solid brown",marginTop:"5px"}}>
              {
                  this.props.list_cate.length>0 &&
                  this.props.list_cate.map((item,i)=>{
                      return (
                        <div>
                       <li  className="fa fa-dashboard fa-lg" style={{color:"brown",width:"200px",fontSize:"20px"}}><Link to={"/category/"+item.id} style={{color:"brown"}}onClick={e=>{this.props.getProductByCategory(item.id);this.props.getCategoryName(item.name)}}><strong>{item.name}</strong></Link></li>
                          <ul>
                            
                   {this.props.list_cate.length>0 &&
                  this.props.list_sub.map((item1,i)=>{
                    if(item1.parent_id==item.id) 
                    return(
                      <li  className="glyphicon glyphicon-heart-empty" style={{color:"brown",width:"200px",fontSize:"18px",marginLeft:"50px"}}><Link to={"/category/"+item1.id} style={{color:"brown"}} onClick={e=>{this.props.getProductByCategory(item1.id);this.props.getCategoryName(item1.name)}}>{item1.name}</Link></li>
                    )
                  }
                  )}
                          </ul>
                        </div>  
                      )
                  })
                  }
              

              </ul>
              </div>
            </div>


 <div className="filter">
 <div className="input-group">
      <span className="input-group-addon">
      Mức độ phổ biến
      </span>
      <select className="form-control" onChange={event=>this.setState({value: event.target.value,by:"Rating"})} >
      <option selected>None</option>
        <option>1-3</option>
       <option >4-5</option>
        </select>
      <span>
       
      </span>
    </div>
    <div className="input-group">
      <span className="input-group-addon">
       Giá
      </span>
      <select className="form-control" onChange={event=>this.setState({value: event.target.value,by:"Price"})} >
      <option selected>None</option>
        <option>1-300000</option>
       <option >300000-500000</option>
        <option>500000-1000000</option>
        </select>
      <span>
       
      </span>
    </div>
   
    <div className="input-group">
      <span className="input-group-addon">
       Sắp xếp theo
      </span>
      <select className="form-control" onChange={event=>this.setState({value: event.target.value,by:"Sort"})}>
        <option selected>None</option>
       <option  >Tên sản phẩm</option>
        <option >Giá</option>
        </select>
      <span>
     
      </span>
    </div>
 
    
     <button style={{marginLeft:"50px",marginTop:"20px",backgroundColor:"#A52A2A"}} type="submit" className="btn btn-default" onClick={e=>{this.props.sort(this.state.by,this.state.value)}}><Link to={`/filter/by=${this.state.by}/value=${this.state.value}`} style={{color:"white"}}>Filter</Link></button>
     
      
   </div>
            </div>
  
        )
    }
}

const mapDispatchToProps = (dispatch) => {//store.dispatch(action)
  return {
    
    //getProductByCategoryId:(id)=>dispatch(getProductByCategory(id)),
    //getCategoryName:(id)=>dispatch(getCategoryName(id))
    getSubCategory:()=>dispatch(getSubCategory()),
    getAllCategory:()=>dispatch(getAllCategory()),
    getCategoryName:(name)=>dispatch(getCategoryName(name)),
    getProductByCategory:(id)=>dispatch(getProductByCategory(id)),
    sort:(by,value)=>dispatch(sort(by,value))
  };
  }     
  const mapStateToProps = (state) => {//tra state return ve tu reducer ve thanh prop
   
      return {
        list_cate:state.homeState.parents,
        list_sub:state.homeState.subcategories,
    };
      }
  
    export default connect(mapStateToProps,mapDispatchToProps)(Menu);
    