import React from 'react'
import { Col, Row } from 'react-bootstrap'
const ContactUs = () => {
    return (
        <section className="three" id="three">
            <Row className="justify-content-md-center gx-0">
                <Col className="contactus pt-5 text-center contactus-one">
                    <h1>We're Here</h1>
                    <p>our door is always open for a good cup of coffee.</p>
                </Col>
                <Col className="contactus text-center pt-5  contactus-two">
                    <h1>Let's Talk</h1>
                    <p>Share your excitement with us</p>
                    <span>FineFood@dummy.email</span>
                </Col>
            </Row>
        </section>
    )
}

export default ContactUs
