import PropTypes from 'prop-types'
import Store from './Store'
import { Container, Row, Col } from 'react-bootstrap'
const Resturnats = ({ resturants }) => {
    return (
        <section className="one bg-dark " id="one">
            <Container>
                <Row>
                    {resturants.map((resturant, index) => (
                        <Col>
                            < Store key={resturant.id} store={resturant} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>

    )
}

Resturnats.propTypes = {
    resturants: PropTypes.array.isRequired
}

export default Resturnats
