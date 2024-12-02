import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    review: {
      comment: "",
      rate: "1",
      elementId: this.props.asin,
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(this.state.review),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4NmEwYjA2ZmM4YzAwMTU2Yjg2ZWMiLCJpYXQiOjE3MzI3OTg5ODcsImV4cCI6MTczNDAwODU4N30.PFiu_jBim2Z29_yOl7A95HKUOfOLmYgg8QGNiIcvLkg",
      },
    }).then((response) => {
      if (response.ok) {
        alert("commento inviato");
      }
    });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="raiting">
          <Form.Label>Recensisci il libro selezionato</Form.Label>
          <Form.Select
            aria-label="Quanto lo consigli?"
            value={this.state.review.rate}
            onChange={(e) => this.setState({ review: { ...this.state.review, rate: e.target.value } })}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Scrivi il tuo commento...</Form.Label>
          <Form.Control
            as="textarea"
            rows={1}
            value={this.state.review.comment}
            onChange={(e) => this.setState({ review: { ...this.state.review, comment: e.target.value } })}
          />
        </Form.Group>
        <Button type="submit" variant="warning" className="border-radius">
          Invia Recensione
        </Button>
      </Form>
    );
  }
}
export default AddComment;
