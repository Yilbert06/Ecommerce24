import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { useDispatch } from 'react-redux'
import { getAllProductsThunk } from '../../store/slices/products.slice'
import './style/fiterCategory.css'


const FilterCategory = () => {

const dispatch = useDispatch()

const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories'
const [ categories, getAllCategory ] = useFetch(url)

useEffect(() => {
    getAllCategory()
}, [])

const handleClickCategories= id =>{
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`
dispatch(getAllProductsThunk(url))
}

const handleClickAllProductss= () =>{
    dispatch(getAllProductsThunk())
}

  return (
    <article className='category'>
        <h3 className='category__name'>Category</h3>
            <button className='category__btn'
                onClick={handleClickAllProductss}>All products
                </button>
                 {
            
            categories?.map(category => (
        <button className='category__btn' onClick={()=> handleClickCategories(category.id)} key={category.id}>{category.name}</button>
    ))
        }  
       
    </article>
  )
}

export default FilterCategory