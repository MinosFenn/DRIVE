import React, { Component } from 'react';
import Client from './Contentful';


const CarContext = React.createContext();

// <CarContext.Provider value={'hello}
class CarProvider extends Component {
  state = {
    cars: [],
    sortedCars: [],
    featuredCars: [],
    soldCars: [],
    loading: true,
    type: 'Tous',
    marque: 'Toutes marques',
    capacity: 1,
    prix: 0,
    minPrice: 0,
    maxPrice: 100000000,
    kilométrage: 0,
    prixasc: false,
    minKm: 0,
    maxKm: 0,
  };
  //getData
  getData = async () => {
    try {
      
      let response = await Client.getEntries({
        content_type: 'cars',
        order: '-sys.updatedAt',
        limit: 150,
        // order: "-fields.prix",
      });
      console.log(response)

      let response1 = await Client.getEntries({
        content_type: 'cars',
        order: '-sys.updatedAt',
        limit: 150,
        // order: "-fields.prix",
      });
      let response2 = await Client.getEntries({
        content_type: 'cars',
        order: '-sys.updatedAt',
        limit: 150,
        skip: 150,
        // order: "-fields.prix",
      });
      console.log(response)
      console.log(response2)


      let responseAll = [...response1.items, ...response2.items];
      console.log(responseAll)

      //  set price to croissant otherwise cars is by updated AT and sells stay n price order
      let cars2 = this.formatData(response.items);
      console.log(cars2)
      const cars = this.formatData(responseAll);
      console.log(cars)


      let soldCars = cars.filter((car) => car.soldcars === true);
      // console.log(soldCars);

      let featuredCars = cars.filter((car) => car.featured === true);
      featuredCars = featuredCars.sort(function (a, b) {
        return b.prix - a.prix;
      });


      let availableCars = cars.filter((car) => car.soldcars === false);
      // calculate max from the data
      let maxKm = Math.max(...availableCars.map((car) => car.kilométrage));
      let maxPrice = Math.max(...availableCars.map((car) => car.prix));

      this.setState({
        cars,
        featuredCars,
        availableCars,
        soldCars,
        sortedCars: availableCars,
        loading: false,
        prix: maxPrice,
        maxPrice,
        maxKm,
      });
      //nothing to add
    } catch (error) {
      console.log(error);
    }
  };
  // store and pass data
  componentDidMount() {
    this.getData();
  }
  formatData(items) {
      console.log(items)

    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let car = { ...item.fields, images, id };
      return car;
    });
    console.log(tempItems)

    return tempItems;
  }

  // create slug according to car
  getCar = (slug) => {
    let tempCars = [...this.state.cars];
    const car = tempCars.find((car) => car.slug === slug);
    return car;
  };

  // handleChange = (event) => {
  // const type = event.target.type;
  // const name = event.target.name;
  // const value = event.target.value

  // console.log(type, name, value);
  // }
  //   calculate the change in value to reorganise page according to search
  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    // console.log(name, value, target.type);

    this.setState(
      {
        [name]: value,
      },
      this.filterCars
    );
  };
  filterCars = () => {
    let {
      cars,
      cars2,
      marque,
      prix,
      richdescription,
      prixasc,
      prixdsc,
      availableCars,
      capacity,
      minPrice,
      maxPrice,
      kilométrage,
      minKm,
      maxKm,
    } = this.state;

    //all cars
    let tempCars = cars.filter((car) => car.soldcars === false);
    // transform value
    prix = parseInt(prix);

    //filter par marque
    if (marque !== 'Toutes marques') {
      tempCars = tempCars.filter((car) => car.marque === marque);
    }

    //filter by price bar
    tempCars = tempCars.filter((car) => car.prix <= prix);

    //filter by price dsc
    // if (prixdsc) {
    //   tempCars = tempCars.sort((car) => (car.prix < prix ? 1 : -1 === true));
    // }

    if (prixdsc === true) {
      tempCars = tempCars.sort(function (a, b) {
        return a.prix - b.prix;
      });
    }
    // } else {

    // }

    //change state
    this.setState({
      sortedCars: tempCars,
    });
  };
  render() {
    return (
      <CarContext.Provider
        value={{
          ...this.state,
          getCar: this.getCar,
          getCar: this.getCar,

          handleChange: this.handleChange,
        }}
      >
        {' '}
        {this.props.children}
      </CarContext.Provider>
    );
  }
}

const CarConsumer = CarContext.Consumer;

// Carcontainer
export function withCarConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <CarConsumer>
        {(value) => <Component {...props} context={value} />}
      </CarConsumer>
    );
  };
}



export {
  CarProvider,
  CarConsumer,
  CarContext,
};
