import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';

class Stars extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 0,
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
    const {onChange} = this.props;
    onChange && onChange(nextValue);
  }

  render() {
    const { rating } = this.state;

    return (                
      <div>
        <h2>{rating} Stars</h2>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
        
      </div>
    );
  }
}

export default Stars;
