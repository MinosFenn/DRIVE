import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import CarsContainer from "../components/CarContainer"

const Cars = () => {
    return (
        <>
        <Hero hero="carsHero">
        <Banner title="Collection" subtitle="Retrouvez toute notre collection">

        </Banner>
</Hero>        
<CarsContainer />
</>
)
}

export default Cars


