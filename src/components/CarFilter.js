import React from "react";
import { useContext } from "react";
import { CarContext } from "../Context";
import Title from "../components/Title";
//get all unique values
const getUnique = (items, value)=> {
    return [
        ...new Set(items.map(item => item[value]))
    ]
}
export default function CarFilter({cars}) {
  const context = useContext(CarContext);
  const {
    handleChange,
    marque,
    price,
    minPrice,
    maxPrice,
    kilométrage,
    minKm,
    maxKm,
  } = context;
  // get unique types
  let marques = getUnique(cars,'marque')
  //all 
  marques=['all',...marques]
  //map to jsx
  marques = marques.map((item,index)=>{
      return <option value={item} key={index}>{item}</option>
  })
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form action="" className="filter-form">
        {/*select type */}
        <div className="form-group">
          <label htmlFor="type"> Marque</label>
          <select
            name="type"
            id="type"
            value={marque}
            className="form-control"
            onChange={handleChange}
          >
              {marques}
          </select>
        </div>
        {/*end select type*/}
      </form>
    </section>
  );
}
