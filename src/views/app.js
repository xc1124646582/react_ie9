import React, { Component } from "react";
import { Router } from "react-router-dom";
import { Layout } from "antd";
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {click} from '../action';
import { SIDER_URLS, SIDER_MENU } from "../constants/columns";
import { RouteMenu } from "../components/Menu";
import { RouteList } from "../components/Route";
import history from "../utils/history";
import routes from "./routes";
import "./app.less";

const { Header, Footer, Sider, Content } = Layout;
class App extends Component{

	 render(){
	 	console.log(this.props.children) 
	 	return(<Router history={history}>
		<Layout>
			<Sider
				className="sider"
				breakpoint="md"
				collapsedWidth="80"
			>
				<div className="logo" />
				<RouteMenu
					theme="dark"
					mode="inline"
					menus={SIDER_MENU}
					urls={SIDER_URLS}
				/>
			</Sider>
			<Layout> 
				<Header className="header">{this.props.num}</Header>
				<Content>
					<RouteList routes={routes} />
				</Content>
				<Footer />
			</Layout>
		</Layout>
	</Router>)
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
export default connect (state2props,dispatch2props)(App);