import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { IoFastFoodOutline } from "react-icons/io5";
import { FaHome, FaStore, FaPhoneAlt } from "react-icons/fa";
import PropTypes from 'prop-types'


// https://react-icons.github.io/react-icons/icons?name=fa
// https://react-bootstrap.github.io/components/navs/


const NavBar = ({ storeName }) => {
    return (
        <>
            <Navbar className="p-4" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#">
                        <IoFastFoodOutline className='mb-1' />
                        {' '}
                        <h2>{storeName}</h2>
                    </Navbar.Brand>
                    <Nav className="justfiy-content-end">
                        <Nav.Item>
                            <Nav.Link>
                                <FaHome className="mb-1" /> {' '} Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <FaStore className="mb-1" /> Stores
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <FaPhoneAlt className="mb-1" />{' '}Contact Us
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <div className="md-3">
                        <Button variant="light" size="lg">
                            Login
                        </Button>{' '}
                        <Button variant="dark" size="lg">
                            Sign up
                        </Button>{' '}
                    </div>
                </Container>
            </Navbar>

        </>
    )
}

NavBar.defaultProps = {
    storeName: "Fine Food"
}

NavBar.propTypes = {
    storeName: PropTypes.string.isRequired,
}

export default NavBar
