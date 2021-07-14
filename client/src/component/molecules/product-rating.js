import React from "react";
import { FullStar, EmptyStar } from "../atoms/rating-star";

class ProductRating extends React.Component {
  getFullStarsCount() {
    const rating = this.props.rating;
    const baseRate = this.props.baseRate;
    const starsCount = this.props.starsCount;
    const oneStarValue = baseRate / starsCount;
    return Math.round(rating / oneStarValue);
  }
  render() {
    const fullStarsCount = this.getFullStarsCount();
    const starsCount = this.props.starsCount;
    const emptyStarsCount = starsCount - fullStarsCount;
    const fullstarsElements = [];
    const emptystarsElements = [];
    for (let i = 0; i < fullStarsCount; i++) {
      fullstarsElements.push(<FullStar key={i}></FullStar>);
    }
    if (emptyStarsCount > 0)
      for (let i = 0; i < emptyStarsCount; i++) {
        emptystarsElements.push(<EmptyStar key={i}></EmptyStar>);
      }
    return (
      <div>
        {fullstarsElements}
        {emptystarsElements}
      </div>
    );
  }
}
export default ProductRating;
