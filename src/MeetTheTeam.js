import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {teamMembers} from "./team/teamInfo"

function TeamMemberCard(props) {
    const {member} = props;
  return (
    <div className="team-card">
      <Row className="team-card-title">
        <Col>{member["title"]}</Col>
      </Row>
      <Row className="team-card-content">
        <Col md={4}>
          <img
            src={member["img"]}
            alt={member["imgAlt"]}
            style={{ width: "100%", height: "25vh", objectFit: "cover"}}
          />
        </Col>
        <Col md={8}>
          <p>
            {member["writeUp"]}
          </p>
        </Col>
      </Row>
    </div>
  );
}

function getMembersList(members) {
    const membersList = members.map(member => (
        <li key={member["id"]}>
          <TeamMemberCard member={member} />
        </li>
      ));
      return membersList;
}

export default function MeetTheTeam() {
    const membersList = getMembersList(teamMembers);
  return (
      <div className="section">
    <Container>
      <div className="sub-heading">
        <h2>Meet The Core Team</h2>
      </div>
      <div className="list-team-members">
        <ul>{membersList}</ul>
      </div>
    </Container>
    </div>
  );
}
