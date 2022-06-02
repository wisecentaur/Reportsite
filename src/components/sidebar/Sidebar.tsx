import React from 'react';
import { Routes } from '../../route/SidebarRoutes';
import SidebarButton from './SideBarButton';

import './sidebar.scss';

interface IProps {

}

interface IState {

}

export default class Sidebar extends React.Component<IProps, IState> {

	render() {
		return (
			<div className="sidebar">
				<div className="sidebar-content">
					{Routes.map(item => (
						<SidebarButton {...item} />
					))}
				</div>
			</div>
		)
	}
}