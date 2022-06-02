import React from 'react';
import { Link } from 'react-router-dom';

import './sidebar.scss';

interface IProps {
	buttonText: string;
	getPath: (...args:any[]) => string;
}

interface IState {

}

export default class SidebarButton extends React.Component<IProps, IState> {

	render() {
		return (
			<div className="sidebar-button">
				<Link className='sidebar__link' to={this.props.getPath()}>
					<div className="sidebar-button-text">
						{this.props.buttonText}
					</div>
				</Link>
			</div>
		)
	}
}