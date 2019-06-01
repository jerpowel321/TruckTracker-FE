import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';


const CLOUDINARY_UPLOAD_PRESET = 'i5aglck3';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dbpqzyaat/image/upload';


export default class ImageUpload extends React.Component {


	constructor(props) {
		super(props);

		this.state = {
			uploadedFileCloudinaryUrl: ''
		};
	}


	onImageDrop(files) {
		this.setState({
			uploadedFile: files[0]
		});

		this.handleImageUpload(files[0]);
	}


	handleImageUpload(file) {
		let upload = request.post(CLOUDINARY_UPLOAD_URL )
			.field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
			.field('file', file);

		upload.end((err, response) => {
			if (err) {
				console.error(err);
			}

			if (response.body.secure_url !== '') {
				this.setState({
					uploadedFileCloudinaryUrl: response.body.secure_url
				});
			}
		});
	}

	render()  
	{ return (
			<div>
      <div className="FileUpload bgBlue">
      <div>
        {this.state.uploadedFileCloudinaryUrl === '' ? null :
        <div className="text-center bgGrey">
          <b><p className="pt-3">{this.state.uploadedFile.name}</p></b>
          <p><img className="pb-3" src={this.state.uploadedFileCloudinaryUrl} /></p>
        </div>}
      </div>
    </div>
			<Dropzone
				
				onDrop={this.onImageDrop.bind(this)}
				accept="image/*"
				multiple={false}>
				{({ getRootProps, getInputProps }) => {
					return (
						<div
							{...getRootProps()}
						>
							<input {...getInputProps()} />
							{
								<p className="text-center dropZone pt-2">Drag and drop some files here, or click to select files<br /><br /><br /><br/><br/></p>
								
							}
						</div>
					)
				}}
			</Dropzone>
			</div>
		)	}
}



