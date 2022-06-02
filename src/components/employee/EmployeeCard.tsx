import React from 'react';
import Card  from '../card/Card';
import profilephoto from '../../images/UnkAvatar.png'
import {Link} from 'react-router-dom';
import './employee.scss';

interface IProps {
	name:string;
	surname:string;
	skype:string;
	job:string;
	email:string;
	id:number
}

interface IState {

}

export default class EmployeeCard extends React.Component<IProps, IState> {

	render() {
		const {name, surname, job, email, skype, id } = this.props;
	
		return (
			<>
				<Card class="EmployeeCard">
				<Link className='CardLink' to={{pathname:`/profile/${this.props.id}`, 
						state:{name: name, surname:surname, job:job, email:email, skype:skype, id:id}}}>
							<div>
								<img className='EmployeeCardImage' src={profilephoto}/>
							</div>
							<div className="card__item">
								<p>{this.props.name} {this.props.surname}</p>
							</div>
							<div className="card__item">
								<p>{this.props.job}</p>
							</div>
							<div>
								<a className='EmployeeCardLink' href={`skype:${this.props.skype}? call`}> Skype </a>
							</div>
							<div>
								<a className='EmployeeCardLink' href={`mailto:${this.props.email}`}> email</a>
							</div>
						</Link>
				</Card>
			</>
		)
	}
}