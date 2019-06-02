import API from "./../../utils/API"
import Stars from "../Stars";

import React, { useCallback, useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone'
import Dropzone from 'react-dropzone'
import HandleImageUploads from "../Dropzone"
import axios from 'axios'


function ReviewModal({ isShown, setIsShown, truckName }) {
	const [userName, setUserName] = useState('');
	const [rating, setRating] = useState(0);
	const [comment, setComment] = useState('');
	const [errors, setErrors] = useState({});
	// const [userImages, setuserImages] = useState([]);

	const submit = useCallback((event) => {
		setErrors({});

		API.saveReview({
			truckName,
			userName,
			rating,
			comment,
			// userImages
		})
			.then(({ data }) => {
				if (data.errors) {
					console.log(data.errors);
					const errorMap = {};
					for (const error of data.errors) {
						errorMap[error.path] = error;
					}
					setErrors(errorMap);
				} else {
					console.log(data);
					setUserName('');
					setRating(0);
					setComment('');
					setIsShown(false);
					// setUserImages([])
				}
			});
	}, [truckName, userName, rating, comment]);

	const closeDialog = useCallback(() => setIsShown(false), [setIsShown]);
	const onUserNameChange = useCallback(event => setUserName(event.target.value), [setUserName]);
	const onCommentChange = useCallback(event => setComment(event.target.value), [setComment]);
	const onRatingChange = useCallback(value => setRating(value), [setRating]);
	// const onUserImagesChange = useCallback(event => setUserImages(event.target.value), [setUserImages]);
	
	return (
		<Modal show={isShown} onHide={closeDialog}>
			<Modal.Header closeButton>
				<Modal.Title className="redText font">{truckName}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<form className="formReview">
					<div className="form-group">
						<label>
							<b>Your Name</b>
							<input type="text" className="form-control" placeholder="Type your name" onChange={onUserNameChange} value={userName} />
						</label>
						<InputValidationError error={errors.userName} />
						<div >{} </div>
					</div>
					<div className="form-group">
						<label >
							<b>Rating        1-Poor 2-Fair 3-Average 4-Good 5-Excellent</b>
							<Stars onChange={onRatingChange} rating={rating} />
						</label>
						<InputValidationError error={errors.rating} />
					</div>
					<div className="form-group">
						<label>
							<b>Comment</b>
							<textarea className="form-control" rows="3" onChange={onCommentChange} value={comment} />
						</label>
						<InputValidationError error={errors.comment} />
					</div>
					<div className="form-group" >
					<label>
					<b>Images</b>
					</label>
						<p className="text-center">Feel free to add some tasty Food Truck food photos below! </p>
					<HandleImageUploads  />
					</div>
				</form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="primary" onClick={submit}>
					Submit
        </Button>
				<Button variant="secondary" onClick={closeDialog}>
					Close
        </Button>
			</Modal.Footer>
		</Modal>
	);
};

function InputValidationError({ error }) {
	if (error == null) {
		return null;
	}

	return (
		<div className="text-danger" role="alert">
			{error.message}
		</div>
	);
}

// function MyDropzone() {
// 	const onDrop = useCallback(acceptedFiles => {
// 		// Do something with the files
// 		console.log("Photo is selected")
// 		console.log(acceptedFiles)
// 	}, [])
// 	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

// 	return (
// 		<div {...getRootProps()}>
// 			<input className="imageInputArea" {...getInputProps()} />
// 			{
// 				isDragActive ?
// 					<p>Drop the files here ...</p> :
// 					<p className="text-center pt-3">Drag and drop some files here, or click to select files <br></br><span>(Only *.jpeg and *.png images will be accepted)</span><br /> <br /> <br /></p>
					
// 			}
// 		</div>
// 	)
// }



export function ReviewButton({ truckName }) {
	const [isShown, setIsShown] = useState(false);

	const onClick = useCallback(() => setIsShown(true), [setIsShown]);

	return (
		<>
			<div onClick={onClick}>
				<p><i className="fa-lg fas fa-pencil-alt mr-2" />Click Here to write a review!</p>
			</div>
			<ReviewModal isShown={isShown} setIsShown={setIsShown} truckName={truckName} />
		</>
	);
}

export default ReviewModal;