import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Card(props) {
	return (
		<div>
			<div className="card" >
			<div className="text-center">
				<img className={`${props.imageClass} card-img-top `} src={props.image}/>
				</div>	
			<div className="card-body">
					<h5 className="card-title font5 redText text-center">{props.title}</h5>
					<h5 className="card-title font5 redText text-center">{props.number}</h5>
					<div className="text-center adminbtnarea">
					<Link className="btn text-white redBg hvr-icon-pulse " to={props.link} >{props.buttonText}
					<i className={`fas la-lg ${props.icon} buttonIcon hvr-icon`}></i>
					</Link></div>
				</div>
			</div>
		</div>
	)
};

export default Card;