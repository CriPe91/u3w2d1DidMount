import { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
// import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    const { book } = this.props;
    return (
      <Container>
        <Row className="justify-content-center">
          <Col>
            <Card className={this.state.selected ? "border-danger" : "border-light"}>
              <Card.Img variant="top" src={book.img} onClick={() => this.setState({ selected: !this.state.selected })} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                {/* {this.state.selected && <CommentArea asin={book.asin} />} */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SingleBook;
