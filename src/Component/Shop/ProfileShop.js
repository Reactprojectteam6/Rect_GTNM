import React from 'react';
import './ProfileShop.css';
import Dashboard from './Dashboard';
import {connect} from 'react-redux';
import {getShop,UpdateShop} from '../../redux/shop_reducer.js';

class ProfileShop extends React.Component  {
    constructor(props)
    {
        super(props);
        this.state={};
    }
    componentWillMount()
    {
        var shop = JSON.parse(localStorage.getItem('Shop'));
        this.setState({name: shop.shop_name, address: shop.address,id: shop.id});

    }
    
  render(){
      let {shop} = this.props;
      let {id,name,address,} = this.state;
      return (
       <div>
            
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <Dashboard/>
            </div>
            

            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <img src="https://scontent.fdad1-1.fna.fbcdn.net/v/t1.15752-9/78457047_2562797093768843_4931508614935347200_n.png?_nc_cat=100&_nc_ohc=zt759fSzzCIAQmD5NyOEQ6Jg6hRg8ZzcOerZ2MN6waT1W34Uoj-9PC8Pg&_nc_ht=scontent.fdad1-1.fna&oh=ea930a71572354c6181878c580c9716a&oe=5E8713F6" className="image anhbia" />
                
                <img src="https://concung.com/31758-37256-large_mobile/set-ao-quan-be-trai-ngan-cf-b107004-3m-xanh.jpg" class="avatar" alt={name}/>
                
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" style={{marginTop:"50px"}}>
                <div className="form-group">
                    <div className="row">
                        <i className="fas fa-user " style={{fontSize:"20px"}}></i>&nbsp;
                        <label style={{fontFamily:"'Times New Roman', Times, serif",fontSize:"20px"}}>Tên Shop: </label>
                    </div>
                        <input type="text" className="form-control" onChange={e => this.setState({name: e.target.value})}  value={name}/>
                </div>
                <div className="form-group">
                    <div className="row">
                            <i className="fas fa-map-marker-alt" style={{fontSize:"20px"}}></i>&nbsp;
                            <label style={{fontFamily:"'Times New Roman', Times, serif",fontSize:"20px"}}>Địa chỉ: </label>
                    </div>
                    <input type="text" className="form-control" onChange={e=>this.setState({address: e.target.value})} value={address}/>
                </div>
                <div className="form-group">
                    <div className="row">
                                <i className="far fa-image" style={{fontSize:"22px"}}></i>&nbsp;
                            <label style={{fontFamily:"'Times New Roman', Times, serif",fontSize:"20px"}}>Mô tả bằng hình ảnh: </label>
                    </div>
                    <div className="row">
                        <img src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.15752-9/77289070_2388054798121883_1317058009150521344_n.png?_nc_cat=101&_nc_ohc=qD9B0_P9zWIAQnEVX1f0nu7ZVa-ZccNuz6s1iHaIT4AW6ubmVYEvHhWJg&_nc_ht=scontent.fdad2-1.fna&oh=14018590b05b98d4d1291cbd3ae2cd5a&oe=5E43111B" className="picture" />
                        <img src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.15752-9/77289070_2388054798121883_1317058009150521344_n.png?_nc_cat=101&_nc_ohc=qD9B0_P9zWIAQnEVX1f0nu7ZVa-ZccNuz6s1iHaIT4AW6ubmVYEvHhWJg&_nc_ht=scontent.fdad2-1.fna&oh=14018590b05b98d4d1291cbd3ae2cd5a&oe=5E43111B" className="picture2" style={{marginLeft:"30px"}}/>
                        
                    </div>
                </div>
                <div className="form-group" style={{marginTop:"20px"}}>
                    <div className="row">
                            <i className="far fa-edit"style={{fontSize:"20px"}}></i>&nbsp;
                            <label style={{fontFamily:"'Times New Roman', Times, serif",fontSize:"20px"}} >Mô tả shop: </label>
                    </div>
                    <input type="text" className="form-control" placeholder="Hãy viết mô tả vào đây ..."/>
                </div>
            </div>
            
            <div class="container">
                <button type="button" class="btn btn-primary" onClick={e=>{this.props.UpdateShop(id,name,address)}}>Lưu thay đổi</button>
            </div>
            
                
            
       </div>
  );
}
}
const mapStateToProps = (state) => {
    return {
        shop: state.shopState.shop
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        UpdateShop:(shop_id,name,address)=>dispatch(UpdateShop(shop_id,name,address)),
        //getShop: (shop_id)=>dispatch(getShop(shop_id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProfileShop);
