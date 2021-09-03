import React from 'react'
import { Card } from 'react-bootstrap'

const ImageSlide = ({ url, name, description, }) => {
    const price = Math.floor(Math.random() * 100 + 1)

    return (
        <img src={url} />
    )
}

export default ImageSlide


/*

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={url} />
            <Card.Body>
                <Card.Title> {name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text>
                    price: {price}$
                </Card.Text>
            </Card.Body>
        </Card>
*/