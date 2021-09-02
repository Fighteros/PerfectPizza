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

                text="white"
                key={store.id}
                className="storeCard mb-5 mt-5 card"
            >
                <Card.Img className="card-img overlay bg-img rounded" variant="top" src={storeImages} alt="Card image" />
                <Card.ImgOverlay bsPrefix="overlay-div">
                    <Card.Title className="mt-5"> <h2 className='pt-3 pb-4'>{store.name}</h2> </Card.Title>
                    <Card.Text className="card-item" variant="center">
                        {store.address1}{' '}
                        -
                        {store.address2}{' '}
                    </Card.Text>
                    <Button variant="primary">Go Store</Button>
                </Card.ImgOverlay>
            </Card>
        </>
    )
}

export default Store
