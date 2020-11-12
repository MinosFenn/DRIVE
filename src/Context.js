import React, { Component } from 'react'
import items from './data'
const CarContext = React.createContext();
// <CarContext.Provider value={'hello}
class CarProvider extends Component {
    state={
        cars: [],
        sortedCars:[],
        featuredCars:[],
        loading:true
    };
    //getData

    // show card on homepage if featured is true
   // TODO:a revoir
    componentDidMount(){
        let cars = this.formatData(items);
        // console.log(cars)
let featuredCars = cars.filter(car => car.featured === true);
this.setState({
    cars,
    featuredCars,
    sortedCars: cars,
    loading: false
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
    render() {
        return (
        <CarContext.Provider value={{
            ...this.state,
        getCar: this.getCar}}>
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