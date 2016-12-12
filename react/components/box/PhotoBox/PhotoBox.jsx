import React from 'react';
import style from './PhotoBox.scss';

class PhotoBox extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		const { photoSrc } = this.props;
		return (
			<div className={style.mainArea}>
				<img src={photoSrc} />
			</div>
		);
	}
}

export default PhotoBox;
