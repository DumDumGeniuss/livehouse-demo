import React from 'react';
import style from './Hello.scss';

class Hello extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			showModal: false,
			showModalConfirm: false
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
	}
	readImage (file) {
		const reader = new FileReader();
		const image = document.getElementById('showUploadFile');
		reader.addEventListener('load', () => {
			image.src = reader.result;
		},false);
		reader.readAsDataURL(file);
	}
	showModal () {
		this.setState({
			showModal: !this.state.showModal
		});
	}
	triggerFileUpload () {
		this.uploadFileButton.click();
	}
	render () {
		return (
			<div>
				<div className={style.mainArea}>
					<h1 className={style.title}>Your Photos</h1>
					<span onClick={this.showModal.bind(this)} className={style.uploadButton}>Upload <b>+</b></span>

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
						<span style={ { display: this.state.showModalConfirm?'initial':'none' } } className={style.showModalConfirm}>confirm</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Hello;
