import React from 'react';
import Container from "react-bootstrap/Container";

import Logo from "./Logo.svg";
import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <Container>
            <div className="centered">
                <img src={Logo} alt="company brand logo" style={{width: "300px"}}/>
                <p style={{marginTop: "1rem"}}>404 - Page does not exist</p>
                <p><Link to="/">Click Here</Link> to go back to Unwild Planet - Coming Soon Site</p>
            </div>
        </Container>
    )
}
