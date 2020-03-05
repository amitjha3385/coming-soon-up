import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function HowItWorks() {
  return (
    <div className="howitworks section">
      <Container>
        <div className="sub-heading">
          <h2>How UnWild Planet Works</h2>
        </div>
        <Row>
          <Col md={4}>
            <Card className="HowItWorksCard">
              <Card.Header className="card-header">Choose your Experience</Card.Header>
              <Card.Body>
                <p>
                  Explore our selection of out of the world experiences crafted
                  with the help of local operators shortlisted by our
                  well-travelled team of experts.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="HowItWorksCard">
              <Card.Header className="card-header">Make it your own</Card.Header>
              <Card.Body>
                <p>
                  You have the option to pick the dates offered or make one of
                  your own; customize aspects of trips to personalize it or
                  simply go with the ones curated with you in mind.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="HowItWorksCard">
              <Card.Header className="card-header">Travel with the Experts</Card.Header>
              <Card.Body>
                <p>
                  Every company listed with us is unique in their own way. Their welcoming
                  hospitality, and unmatched local expertise would create an experience like none other.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
