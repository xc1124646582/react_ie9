import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import RouterUtils from '../utils/RouterUtils';
import { bindActionCreators } from 'redux';
import { getRoute } from "../components/Route";
import {click} from '../action';
import { Redirect } from 'react-router-dom';  
class Greeter extends Component{
  state = {
    redirect:''
  };
    confn(){
    	this.props.click()
    }

    clearfn=()=>{
       RouterUtils.go('home');
    }

    handleOnClick = () => {  
  this.setState({redirect: true});  
}  
  render() {
  	if (this.state.redirect) {  
    return <Redirect push to="/hello" />; //or <Redirect push to="/sample?a=xxx&b=yyy" /> 传递更多参数  
  }  
    return (
      <div>
        <div>
        	<button onClick={this.confn.bind(this)}>点击</button>
        	<span>span{this.props.num}</span>
          <button onClick={this.handleOnClick} type="button">进入加载页</button>
        </div>
      </div>
    );
  }
}

const state2props = (state = {},ownProps)  =>{

    const num = state.one.num
    // 获取数据
    return Object.assign({},{num},ownProps) ;

};

const dispatch2props =(dispatch) => {

    // 获取方法

    return bindActionCreators({click}, dispatch);

};
export default connect (state2props,dispatch2props)(Greeter);