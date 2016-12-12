import React from 'react';
import style from './Hello.scss';
import 'whatwg-fetch';

import PhotoBox from '../box/PhotoBox/PhotoBox.jsx';

class Hello extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			showModal: false,
			showModalConfirm: false,
			photos: []
		};
	}
	componentDidMount () {
		const self = this;
		this.uploadFileButton = document.getElementById('uploadFileInput');
		this.uploadFileButton.onchange = (e) => {
			self.readImage(e.srcElement.files[0]);
			self.setState({
				showModalConfirm: true
			})
		};
		this.addPhoto = this.addPhoto.bind(this);
	}
	readImage (file) {
		const self = this;
		const reader = new FileReader();
		self.image = document.getElementById('showUploadFile');
		reader.addEventListener('load', () => {
			self.image.src = reader.result;
		},false);
		reader.readAsDataURL(file);
	}
	showModal () {
		this.setState({
			showModal: !this.state.showModal
		});
	}
	addPhoto () {
		this.setState({
			photos: [this.image.src]
		});
	}
	triggerFileUpload () {
		this.uploadFileButton.click();
	}
	confirmUpload () {
		const self = this;
		fetch('http://localhost:3000/files', {
			method: 'POST'
		})
		.then((result) => {
			return result.json();
		})
		.then((result) => {
			if (result.status === 'success') {
				self.showModal();
				self.addPhoto();
			}
		});
	}
	render () {
		let { photos } = this.state;
		console.log(photos);
		return (
			<div>
				<div className={style.mainArea}>
					<h1 className={style.title}>Your Photos</h1>
					<span onClick={this.showModal.bind(this)} className={style.uploadButton}>Upload <b>+</b></span>
					<div className={style.photosArea}>
						{
							photos.map((item, index) => {
								return (
									<PhotoBox photoSrc={photos} key={index}/>
								)
							})
						}
					</div>
				</div>
				<div style={ { display: this.state.showModal?'initial':'none' } } className={style.modalArea}>
					<div className={style.modalBlock}>
					</div>
					<div className={style.modalContent}>
						<span onClick={this.showModal.bind(this)}  className={style.cancel}>X</span>
						<div className={style.inputArea}>
							<span onClick={this.triggerFileUpload.bind(this)}>Choose File</span>
							<input type="file" id="uploadFileInput"></input>
						</div>
						<img id="showUploadFile"/>
						<span 
							style={ { display: this.state.showModalConfirm?'initial':'none' } }
							className={style.showModalConfirm}
							onClick={this.confirmUpload.bind(this)}
						>
							confirm
						</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Hello;
