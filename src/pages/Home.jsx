import React, { useRef, useState } from "react";
import CardProduct from "../components/Home/CardProduct";
import { useSelector } from "react-redux";
import FilterCategory from "../components/Home/FilterCategory";
import FilterByPrice from "./FilterByPrice";
import '../App.css'

const Home = () => {

  const [inputValue, setInputValue] = useState('')
const [fromTo, setFromTo] = useState({
  from:0,
  to:Infinity
})

  const { productGlobal } = useSelector(state => state);

const input = useRef()

  const handleChangeInput = () =>{
setInputValue(input.current.value.toLowerCase().trim())
  }
  const productFilter = productGlobal
  ?.filter(prod => prod.title.toLowerCase().includes(inputValue))
  .filter(prod =>{
    const from = +fromTo.from
    const to = +fromTo.to
    const price = +prod.price
    if(from && to){
      return from <= price && price <= to
    }
    if(from && !to){
      return from <= price
    }
    if(to && !from){
      return  price <= to 
    }
    if(!from && !to){
      return true
    }
  })
  return (
    <div className="home">
      <div className="home__filter">
        <input className="inputfilter" ref={input} onChange={handleChangeInput} type="text" placeholder="  Search Product" />
      <FilterCategory />
        <FilterByPrice setFromTo={setFromTo}/>
      </div>
      <div className="filter">
      </div>
      {
      productFilter?.map(prod => (
        <CardProduct key={prod.id} product={prod} />
        
      ))}
      
    </div>
    
  );
};

export default Home;
