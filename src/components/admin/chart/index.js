import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import API from "../../../utils/API"

const colors = [
	'rgba(120,28,129)',
	'rgba(64,67,153)',
	'rgba(72,139,194)',
	'rgba(107,178,140)',
	'rgba(159,190,87)',
	'rgba(231,126,49)',
];

class Chart extends Component {
	state = {
		cuisines: new Map(),
	}
	componentDidMount() {
		API.getApprovedApplications()
			.then(res => {
				console.log("data:", res.data)
				const cuisineCounter = new Map();
				for (const truck of res.data) {
					const cuisine = truck.cuisine;
					if (cuisineCounter.has(cuisine)) {
						cuisineCounter.set(cuisine, cuisineCounter.get(cuisine) + 1);
					} else {
						cuisineCounter.set(cuisine, 1);
					}
				}

				this.setState({ cuisines: cuisineCounter });
			})
			.catch(err => console.log(err));
	}
	static defaultProps = {
		displayTitle: true,
		displayLegend: true,
		legendPosition: 'right'
	}
	render() {
		console.log(this.state.cuisines);
		return (
			<div className="chart">
				<Bar
					data={{
						labels: Array.from(this.state.cuisines.keys()),
						datasets: [{
							label: "Number of Trucks",
							data: Array.from(this.state.cuisines.values()),
							backgroundColor: colors,
							borderWidth: 1,
						}],
					}}
					options={{
						title: {
							display: this.props.displayTitle,
							text: 'Registered Food Trucks',
							fontSize: 40,
							fontFamily: "'Luckiest Guy', cursive",
							fontColor: 'rgba(183,28,28)',
							padding: 15
						},
						legend: {
							display: this.props.displayLegend,
							position: this.props.legendPosition
						}
					}}
				/>
			</div>
		)
	}
};

export default Chart;