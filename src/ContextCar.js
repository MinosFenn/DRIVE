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
    loading: false,
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
        order: '-fields.prix',
        limit: 150,
      });
      let response1 = await Client.getEntries({
        content_type: 'cars',
        order: '-fields.prix',
        limit: 150,
        skip: 150,
      });
      let response2 = await Client.getEntries({
        content_type: 'cars',
        order: '-fields.prix',
        limit: 150,
        skip: 300,
      });
      let response3 = await Client.getEntries({
        content_type: 'cars',
        order: '-fields.prix',
        limit: 150,
        skip: 450,
      });
 


      let responseAll = [...response.items, ...response1.items, ...response2.items, ...response3.items, ];
      console.log(responseAll)

      let cars = this.formatData(responseAll);
      //order price descending
      cars = cars.sort(function (a, b) {
        return b.prix - a.prix;
      });

      let soldCars = cars.filter((car) => car.soldcars === true);

      let featuredCars = cars.filter((car) => car.featured === true);
      featuredCars = featuredCars.sort(function (a, b) {
        return b.prix - a.prix;
      });

      let availableCars = cars.filter((car) => car.soldcars === false);
      cars = cars.sort(function (a, b) {
        return b.prix - a.prix;
      });

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


  
  componentDidMount() {
    this.getData();
  }

  formatData(items) {
    console.log(items)
    // let tempItems = items.map((item) => {
    //   let id = item.sys.id;
    //   let images = item.fields.images.map((image) => image.fields.file.url);
    //   let car = { ...item.fields, images, id };
    //   return car;
    // });
    // return tempItems;
    try {
      let tempItems = items.map((item, index) => {

        // Log iteration number
        // console.log(`Processing item ${index + 1}`);
  
        // Check if 'item.fields' or 'item.fields.images' is undefined before accessing properties
        if (!item.fields || !item.fields.images) {
          // console.log(`Error: 'item.fields' or 'item.fields.images' is undefined at iteration ${index + 1}`);
          return null; // Return null for the problematic item
        }
  
        let id = item.sys.id;
        let images = item.fields.images.map((image) => {
          // Check if 'image.fields' or 'image.fields.file' is undefined before accessing properties
          if (!image.fields || !image.fields.file) {
            // console.log(`Error: 'image.fields' or 'image.fields.file' is undefined for image in item ${index + 1}`);
            return null; // Return null for the problematic image
          }
          return image.fields.file.url;
        });
  
        // Filter out null images (images that caused errors)
        images = images.filter(image => image !== null);
  
        let car = { ...item.fields, images, id };
        return car;
      });
  
      // Filter out null items (items that caused errors)
      tempItems = tempItems.filter(item => item !== null);


  
      return tempItems;
    } catch (error) {
      console.log(error);
      return []; // Return empty array in case of error
    }


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
    console.log(tempCars)

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
