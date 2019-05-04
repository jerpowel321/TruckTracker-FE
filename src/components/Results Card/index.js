import React from "react";

import { NavLink } from "react-router-dom";
import { defaultProps } from "recompose";

function ResultsCard(props) {
	return (
		<div class="card w-100">
			<div class="card-header font redText goldBg">
				Food Truck Results
  </div>
			<div class="card-body">
				<ol>
				
					<li>
						<h5 class="card-title">{props.title}</h5>
						<p class="card-text">{props.p}</p>
					</li>
				</ol>
			</div>
		</div>
	)
};

export default ResultsCard;