import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class Stars extends React.Component {
  onStarClick(nextValue, prevValue, name) {
    const { onChange } = this.props;
    onChange && onChange(nextValue);
  }

  render() {
    const { rating } = this.props;

    return (
      <div className="text-center">
        <h4 className="mt-2">{rating} Stars</h4>
        <div className="redText stars">
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
          emptyStarColor="#003366"
        />
        </div>
      </div>
    );
  }
}

export default Stars;
