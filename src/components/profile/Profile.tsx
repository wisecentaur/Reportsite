import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../card/Card';
import Divider from '../divider/Divider';
import PopupImage from '../popup/PopupImage';
// import { userInfo } from '../UserInformation/userInfo';
import InfoCard from './infoCard/InfoCard';
import {GetUser} from '../../axios/users'
// import {useParams} from "react-router-dom";

import './profile.scss';
interface IProps {
    image:any;
    match: {params:{id:number}};
}

interface IState {
    isOpenPopup:boolean
    image:any;
    userData?: IUserInfo;
    // id: any
}

export default class Profile extends React.Component<IProps, IState> {
    

    constructor(props:IProps){
        super(props);
        console.log(props)
        // console.log(this.props.location)
    
        this.state = {
            isOpenPopup:false,
            image:this.props.image,
            // id:useParams()
        }
    }


    async componentDidMount(){
        const userData =  await GetUser(this.props.match.params.id ? this.props.match.params.id : 0) 
        console.log(userData)
        this.setState({userData})
        // this.props.location.id
        console.log(this.props)
    }

    handleOpenPopup = () =>{
        this.setState({
            isOpenPopup:true
        })
    }

    handleClosePopup = () =>{
        this.setState({
            isOpenPopup:false
        })
    }

    handleSetImage = (image:any) =>{
        this.setState({
            image

        })
    }



	render() {
        // const {id} = props.match.params;
        const {image} = this.state;
        const userData = this.state.userData;
		return (
			<div className ="profile-content">
                
                <figure className="avatar">
                    <img src={image} alt="Avatar" />
                    <button onClick={this.handleOpenPopup}>Choose Photo</button>
                </figure>

                <Card class="userInformation">
                            <InfoCard typeInfo="Name" mainInfo={userData && userData.name ? userData!.name : '...'}/>
                            <Divider/>
                            <InfoCard typeInfo="Surname" mainInfo={userData ? userData!.surname : '...'}/>
                            <Divider/>
                            <InfoCard typeInfo="Age" mainInfo={userData  && userData.age ? userData!.age.toString() : '...'}/>
                            <Divider/>
                            <InfoCard typeInfo="eMail" mainInfo={userData ? userData!.email : '...'}/>
                            <Divider/>
                            <InfoCard typeInfo="Job" mainInfo={userData ? userData!.job : '...'}/>
                </Card>
                {this.state.isOpenPopup && <PopupImage handleAddPhoto={this.handleSetImage} close={this.handleClosePopup}/>}
			</div>
		)
	}
}