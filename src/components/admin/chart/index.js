import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ["Italian", "Thai", "Malaysian", "Mexican", "American", "Other"],
                datasets: [
                    {
                        label: "Number of Trucks",
                        data: [
                            34,
                            15,
                            56,
                            44,
                            15,
                            5
                        ],
                        backgroundColor: [
                            'rgba(120,28,129)',
                            'rgba(64,67,153)',
                            'rgba(72,139,194)',
                            'rgba(107,178,140)',
                            'rgba(159,190,87)',
                            'rgba(231,126,49)'

                        ],
                        borderColor: [
                            'rgba(120,28,129)',
                            'rgba(64,67,153)',
                            'rgba(72,139,194)',
                            'rgba(107,178,140)',
                            'rgba(159,190,87)',
                            'rgba(231,126,49)'
                        ],
                        borderWidth: 1
                    }
                ]
            }
        }
    }
    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right'
    }


    render() {
        return (
            <div className="chart">

                <Bar
                    data={this.state.chartData}
                    options={{
                       title: {
                           display: this.props.displayTitle,
                           text: 'Popular Food Trucks',
                           fontSize: 25
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