import React from 'react';
import { Link } from 'react-router-dom';


interface IProps {
	typeInfo: string;
	mainInfo: string;
}

interface IState {

}

export default class InfoCard extends React.Component<IProps, IState> {

	render() {
		return (
			<div className="info_block">
                <div className="typeInfo">
                    {this.props.typeInfo}
                </div>
                <div className="mainInfo">
                    {this.props.mainInfo}
                </div>
			</div>
		)
	}
}