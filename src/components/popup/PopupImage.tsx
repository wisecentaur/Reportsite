import React from 'react';

import './popup.scss'


interface IProps {
	close: () => void;
	handleAddPhoto: (image:any) => void;
	image?:any;
}

interface IState {
	canClose:boolean
	image: any;
}

export default class PopupImage extends React.Component<IProps, IState> {

	constructor(props:IProps){
		super(props)

		this.state= {
			canClose:true,
			image:props.image
		}
	}


	handleAddPhoto = () =>{
		const photoInput = document.getElementById('avatarFile') as  (any);
		const avatar =  URL.createObjectURL(photoInput!.files[0]);

		this.setState({image:avatar})
		this.props.handleAddPhoto(avatar);
		this.props.close();
	} 
	handleClose = () => {
		if(this.state.canClose)
			this.props.close()
	}

	render() {
		return (
			<div className ="popup-content" onClick={this.handleClose}>
                <div className="mainPopup" 	onMouseOver={() => this.setState({canClose: false})} 	onMouseLeave={() => this.setState({canClose: true})}>
                    <h2>Select photo</h2>
                    <input type="file" src={this.state.image} id="avatarFile"  />
                    <button className="saveBtn" onClick={this.handleAddPhoto} >Save</button>
                </div>
			</div>
		)
	}
}