import React from 'react';
import { Routes } from '../../route/BonusRoute';
import SidebarButton from './SideBarButton';

import './sidebar.scss';

interface IProps {

}

interface IState {

}

export default class BonusesSidebar extends React.Component<IProps, IState> {

	render() {
		return (
			<div className="Bonus_Sidebar">
				<div className="sidebar-content">
					{Routes.map(item => (
						<SidebarButton {...item} />
					))}
				</div>
			</div>
		)
	}
}