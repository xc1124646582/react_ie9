import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {click} from '../action';
class Greeter extends Component{

    confn(){
    	this.props.click()
    }
  render() {
  	console.log(this.props.num)
    return (
      <div>
        <div>
        	<button onClick={this.confn.bind(this)}>点击</button>
        	<span>span{this.props.num}</span>
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