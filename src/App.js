import NavBar from './components/NavBar'
import MainSection from './components/MainSection'
import Resturnats from './components/Resturnats';
import AppCarousal from './components/AppCarousal';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

// https://pizzaapp.docs.apiary.io/#reference/0/restaurants/list-restaurants?console=1
// https://react-bootstrap.github.io/components/cards/
// https://www.themealdb.com/api.php
// https://www.themealdb.com/api/json/v1/1/random.php
const App = () => {

  const [resturantsUI, setResturants] = useState([])

  // ui effect
  useEffect(() => {
    const getRests = async () => {
      const resturants = await getStores()
      setResturants(resturants)
    }
    getRests()
  }, [])

  // fetch data from server
  const getStores = async () => {
    const res = await fetch('https://private-anon-56e90a0735-pizzaapp.apiary-mock.com/restaurants/')
    const data = res.json()
    return data
  }




  return (
    <>
      <NavBar />
      <MainSection />

      <Resturnats resturants={resturantsUI} />

      <AppCarousal />

    </>
  )
}

export default App

