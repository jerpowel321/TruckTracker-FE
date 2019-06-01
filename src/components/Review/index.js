import API from "./../../utils/API"
import Stars from "../Stars";

import React, { useCallback, useState } from "react";

function ReviewModal(props) {
	const { id, truckName } = props;

	const [username, setUsername] = useState('');
	const [rating, setRating] = useState(0);
	const [comment, setComment] = useState('');

	const onSumbit = useCallback(() => {
		API.saveReview({
			truckName,
			// username,
			rating,
			comments: comment,
		})
			.then(res => {
				console.log(res);
				setUsername('');
				setRating(0);
				setComment('');
			});
	}, [truckName, username, rating, comment]);

	const onCommentChange = useCallback(event => setComment(event.target.value), [setComment]);

	console.log(`username: ${username}, rating: ${rating}, comment: ${comment}`);

	return (
		<div className="modal fade" id={id} tabIndex="-1" role="dialog" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title text-center">{truckName}</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<div>
							<form>
								<div className="form-group">
									<label>
										Your name
										<input type="text" className="form-control" placeholder="Type your name" onChange={event => setUsername(event.target.value)} value={username} />
									</label>
								</div>
								<div className="form-group">
									<label>
										Rating
										<Stars onChange={rating => setRating(rating)} />
									</label>
								</div>
								<div className="form-group">
									<label>
										Comment
										<textarea className="form-control" rows="3" onChange={onCommentChange} value={comment} />
									</label>
								</div>
							</form>
						</div>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-primary approve" data-dismiss="modal" onClick={onSumbit}>Submit</button>
						<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>);
};

export default ReviewModal;