import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import RouterUtils from '../utils/RouterUtils';
import { bindActionCreators } from 'redux';
import {click} from '../action';
import { Redirect } from 'react-router-dom';  
import { Table, Icon, Divider } from 'antd';
import "./Menu.less";
const { Column, ColumnGroup } = Table;
class Tables extends Component{
  state = {
    redirect:'',
    data:[{
  key: '1',
  firstName: 'John',
  lastName: 'Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  firstName: 'Jim',
  lastName: 'Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}]
  };

  render() {
  	if (this.state.redirect) {  
    return <Redirect push to="/hello" />; //or <Redirect push to="/sample?a=xxx&b=yyy" /> 传递更多参数  
  }  
    return (
      <Table dataSource={this.state.data}>
 
      <Column
        title="First Name"
        dataIndex="firstName"
        key="firstName"
      />
      <Column
        title="Last Name"
        dataIndex="lastName"
        key="lastName"
      />
    <Column
      title="Age"
      dataIndex="age"
      key="age"
    />
    <Column
      title="Address"
      dataIndex="address"
      key="address"
    />
    <Column
      title="Action"
      key="action"
      render={(text, record) => (
        <span>
          <a href="#">Action 一 {record.name}</a>
          <Divider type="vertical" />
          <a href="#">Delete</a>
          <Divider type="vertical" />
          <a href="#" className="ant-dropdown-link">
            More actions <Icon type="down" />
          </a>
        </span>
      )}
    />
  </Table>
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
export default connect (state2props,dispatch2props)(Tables);