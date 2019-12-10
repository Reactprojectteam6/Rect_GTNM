import React, { Component } from 'react';
import { Link ,Redirect} from "react-router-dom";
import { connect } from 'react-redux';
class Paypal extends Component {
    constructor(props)
    {
        super(props);
        
    }
    render() {
        var {list_order=[]} = this.props;
        return (
          <div>abc</div>
        );
    }

}
const mapStateToProps = state => {
     console.log(state.paypalState.paypalState);
    return {
        
      list_order:state.paypalState.paypalState
    }
}
const mapDispatchToProps = (dispatch) => {//store.dispatch(action)
    return {
    };
    }
export default connect(mapStateToProps,mapDispatchToProps)(Paypal);
