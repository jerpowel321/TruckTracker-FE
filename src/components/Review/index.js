import API from "./../../utils/API"
import Stars from "../Stars";

import React, { useCallback, useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import HandleImageUploads from "../Dropzone"



function ReviewModal({ isShown, setIsShown, truckName }) {
	const [userName, setUserName] = useState('');
	const [rating, setRating] = useState(0);
	const [comment, setComment] = useState('');
	const [errors, setErrors] = useState({});
	const [userImages, setUserImages] = useState([]);

	const submit = useCallback((event) => {
		setErrors({});

		console.log('if we sent it, the urls would be');
		console.log(userImages);

		API.saveReview({
			truckName,
			userName,
			rating,
			comment,
			userImages
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
					setUserImages([]);
				}
			});
	}, [
		comment,
		rating,
		setComment,
		setErrors,
		setIsShown,
		setRating,
		setUserImages,
		setUserName,
		truckName,
		userImages,
		userName,
	]);

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
					<HandleImageUploads  
						url='https://api.cloudinary.com/v1_1/dbpqzyaat/image/upload'
						preset='i5aglck3'
						setUserImages={setUserImages}
					/>
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



export function ReviewButton({ truckName }) {
	const [isShown, setIsShown] = useState(false);

	const onClick = useCallback(() => setIsShown(true), [setIsShown]);

	return (
		<>
			<div onClick={onClick}>
				<p className="pt-1 pl-3 writeReview goldText"><i className="fa-lg fas fa-pencil-alt mr-2 " />Click Here to write a review!</p>
			</div>
			<ReviewModal isShown={isShown} setIsShown={setIsShown} truckName={truckName} />
		</>
	);
}

export default ReviewModal;