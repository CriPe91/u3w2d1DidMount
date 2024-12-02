import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    reviews: [],
  };
  getReview = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4NmEwYjA2ZmM4YzAwMTU2Yjg2ZWMiLCJpYXQiOjE3MzI3OTg5ODcsImV4cCI6MTczNDAwODU4N30.PFiu_jBim2Z29_yOl7A95HKUOfOLmYgg8QGNiIcvLkg",
      },
    })
      .then((resp) => resp.json())
      .then((reviews) => {
        this.setState({ reviews });
      });
  };

  componentDidMount() {
    this.getReview();
  }

  render() {
    return (
      <>
        <p>Sono COMMENT AREA</p>
        <CommentList reviews={this.state.reviews} />
        <AddComment asin={this.props.asin} />
      </>
    );
  }
}
export default CommentArea;
