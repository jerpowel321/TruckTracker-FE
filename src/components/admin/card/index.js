import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Card(props) {
	return (
		<div className="card ">
			<div className="card-image">
				<div><img className={props.imageClass} src={props.image} /></div>
			</div>
			<div className="card-content info">
				<div className="card-title center-align font5 red-text text-darken-4">{props.title}</div>
				<p className="font center-align font red-text text-darken-4">{props.number}</p>
				<div className="center-align">
					<Link className="red darken-4 btn text-white hvr-icon-pulse" to={props.link}>
						<i className={`fas la-lg ${props.icon} buttonIcon hvr-icon`}></i>
						{props.buttonText}
					</Link>
				</div>
			</div>
		</div>
	)
};

export default Card;