import React from 'react'

const ImageSlide = ({ url, name }) => {

    return (
        <>
            <p>{name}</p>
            <img src={url} alt="food element" />
        </>
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