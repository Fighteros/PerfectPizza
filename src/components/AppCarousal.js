import { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import ImageSlide from './ImageSlide';
import Item from './Item'

const AppCarousal = () => {

    const [foodCat, setFoodCat] = useState([])

    useEffect(() => {
        const foodCatgories = async () => {
            const foodCatData = await getFoodCatData()
            const foddCatDataCat = foodCatData.categories
            // console.log(foodCatData.categories)
            setFoodCat(foddCatDataCat)
        }
        foodCatgories()
    }, [])


    // fetch food catagories 
    const getFoodCatData = async () => {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        const data = res.json()
        return data
    }

    return (
        <section className="two bg-white" id="two">
            <div className="carousal-div bg-dark">
                <Carousel
                    isRTL={true}
                    className="carousal"
                    enableAutoPlay
                    autoPlaySpeed={3000}
                    easing="cubic-bezier(1,.15,.55,1.54)"
                    tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
                >
                    {foodCat.map(item => (
                        <Item> <ImageSlide key={item.idCategory} url={item.strCategoryThumb} d></ImageSlide></Item>
                    ))}
                </Carousel>
            </div >
        </section >
    )
}

export default AppCarousal
