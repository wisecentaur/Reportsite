import React from 'react';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';

import './layout.scss';

interface IProps {

}

interface IState {

}

export default class Layout extends React.Component<IProps, IState> {

	render() {
		return (<div className="layout">
			<div className="headerComponent">
				<Header />
			</div>
			<div className="content">
				<div className="sidebarComponent">
					<Sidebar />
				</div>
				<div className="childComponent">{this.props.children}</div>
			</div>
		</div>)
	}
}