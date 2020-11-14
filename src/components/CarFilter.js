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
  // console.log(context)
  const {
    handleChange,
    marque,
    prix,
    prixasc,
    minPrice,
    maxPrice,
    kilométrage,
    minKm,
    maxKm,
  } = context;

  // get unique types
  let marques = getUnique(cars,'marque')
  //all 
  marques=['Toutes marques',...marques]
  //map to jsx
  marques = marques.map((item,index)=>{
      return <option value={item} key={index}>{item}</option>
  })
  return (
    <section className="filter-container">
      <Title title="Trouver une voiture" />
      <form action="" className="filter-form">
        {/*select type */}
        <div className="form-group">
          <label htmlFor="type"> Marque</label>
          <select
            name="marque"
            id="marque"
            value={marque}
            className="form-control"
            onChange={handleChange}
          >
              {marques}
          </select>
        </div>
        {/*end select type*/}
                {/*car price */}
                <div className="form-group">
          <label htmlFor="prix"> Prix des voitures {prix} euros</label>
          <input type="range" name="prix" min={minPrice} max={maxPrice} id="prix" value={prix} onChange={handleChange} className="form-control"/>

        </div>
        {/*end select type*/}
                        {/*car price asc desc */}
                        <div className="form-group"><div className="single-extra">
                       <input type="checkbox" name="prixasc" id="prixasc" checked={prixasc} onChange={handleChange}/>
                       <label htmlFor="prixasc">Prix Croissant</label>
</div>
        </div>
        {/*end select type*/}

      </form>
    </section>
  );
  
}
