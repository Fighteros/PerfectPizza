import { Card, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'

const Store = ({ store }) => {
    const [storeImages, setStoreImages] = useState('')

    useEffect(() => {
        const fetchImage = async () => {
            const image = await getStoreImage()
            // console.log(image.meals[0].strMealThumb)
            setStoreImages(image.meals[0].strMealThumb)
        }
        fetchImage()
    }, [])


    // fetch image json
    const getStoreImage = async () => {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        const data = res.json()
        return data

    }

    // const rand = Math.flooer(Math.random() * storeImages.length)

    return (
        <>
            <Card
                text="Dark"
                key={store.id}
                className="storeCard bg-dark mb-2 mt-5 text-white">
                <Card.Img className="overlay has-bg-img rounded h-10rem" variant="top" src={storeImages} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title> {store.name} </Card.Title>
                    <Card.Text variant="center">
                        {store.address1}{' '}
                        -
                        {store.address2}{' '}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.ImgOverlay>
            </Card>
        </>
    )
}

export default Store
