import React, { Component } from 'react'
import items from './data'
const CarContext = React.createContext();
// <CarContext.Provider value={'hello}
class CarProvider extends Component {
    state={
        cars: [],
        sortedCars:[],
        featuredCars:[],
        loading:true,
        type:'all',
        marque:'all',
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        kilométrage:0,
        minKm:0,
        maxKm:0,
    };
    //getData

    // show card on homepage if featured is true
   // TODO:a revoir
    componentDidMount(){
        let cars = this.formatData(items);
        // console.log(cars)
let featuredCars = cars.filter(car => car.featured === true);
// calculate max from the data
let maxKm = Math.max(...cars.map(item => item.kilométrage))
let maxPrice = Math.max(...cars.map(item => item.price))

this.setState({
    cars,
    featuredCars,
    sortedCars: cars,
    loading: false,
    price: 0,
    maxPrice,
    maxPrice,
    maxKm
});
//nothing to add 
    }
    formatData(items){
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let car = {...item.fields, images, id};
            return car;
        });
        return tempItems;
    }
    // create slug according to car
    getCar = (slug) => {
let tempCars = [...this.state.cars];
const car = tempCars.find((car) => car.slug === slug);
return car;
    };
    // calculate the change in value to reorganise page according to search
    handleChange = event => {
        const marque = event.target.marque
        const name = event.target.name
        const value = event.target.value
        // console.log(marque,name,value)
    }
    filterCars = () => {
        console.log("hello")
    }
    render() {
        return (
        <CarContext.Provider value={{
            ...this.state,
        getCar: this.getCar,
        handleChange: this.handleChange
        }}>
{this.props.children}
        </CarContext.Provider>
        );
    }
}

const CarConsumer = CarContext.Consumer
// Carcontainer 
export function withCarConsumer(Component) {
    return function ConsumerWrapper(props){
        return <CarConsumer>
            {value => <Component {...props} context={value}/>}
        </CarConsumer>
    }

}
export {CarProvider, CarConsumer, CarContext}