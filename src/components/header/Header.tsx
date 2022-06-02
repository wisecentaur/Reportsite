import React from 'react';

import './header.scss';
import logo  from '../../images/svg-seeklogo.svg'
import Card from '../card/Card'


interface IProps {

}

interface IState {

}

export default class Header extends React.Component<IProps, IState> {

	render() {

		return (<div className="header">
			<div className="logo">
				<img src={logo} alt="logo" />
			</div>
			<div>
				<Card>
				</Card>
			</div>
		</div>)
	}
}