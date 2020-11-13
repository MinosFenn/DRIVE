import React from 'react'
import CarsFilter from "./CarFilter"
import CarsList from "./CarList"
import {withCarConsumer} from "../Context"
import Loading from "./Loading"

function CarContainer({ context }) {
    const{loading,sortedCars,cars} = context;
    if (loading) {
        return <Loading />;
    }
        return (
            <div>
        <CarsFilter cars={cars} />
        <CarsList cars={sortedCars} />
        </div>
        )
}

export default withCarConsumer(CarContainer) 
