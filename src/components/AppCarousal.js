import { useState, useEffect } from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import ImageSlide from './ImageSlide';


const AppCarousal = () => {

    const [foodCat, setFoodCat] = useState([])

    useEffect(() => {
        const foodCatgories = async () => {
            const foodCatData = await getFoodCatData()
            console.log(foodCatData.drinks)
            setFoodCat(foodCatData.drinks)
        }
        foodCatgories()
    }, [])


    // fetch food catagories 
    const getFoodCatData = async () => {
        const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
        console.log(res.drinks)
        const data = res.json()
        return data
    }

    return (
        <section className="two" id="two">
            <div className="carousal-div bg-dark">
                <Carousel
                    className="carousal"
                    enableAutoPlay
                    autoPlaySpeed={2500}
                    easing="cubic-bezier(1,.15,.55,1.54)"
                    tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
                    transitionMs={700}
                    outerSpacing={0}
                    itemPadding={[0, 0]}
                    itemPosition={consts.CENTER}
                >

                    {foodCat.map((item, index) => {
                        if (index > 5) {
                            return
                        }
                        return <div key={item.idDrink} >
                            <ImageSlide url={item.strDrinkThumb} name={item.strDrink}></ImageSlide>
                        </div>
                    })}
                </Carousel>
            </div >
        </section >
    )
}

export default AppCarousal
