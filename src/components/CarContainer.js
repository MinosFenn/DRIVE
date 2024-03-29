import React from 'react';
import CarsFilter from './CarFilter';
import CarsList from './CarList';
import { withCarConsumer } from '../ContextCar';
import Loading from './Loading';

function CarContainer({ context }) {
  const { loading, sortedCars, cars, availableCars } = context;
  // console.log(cars);
  // console.log(context);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <CarsFilter cars={cars} />
      <CarsList cars={sortedCars} />
    </div>
  );
}

export default withCarConsumer(CarContainer);
