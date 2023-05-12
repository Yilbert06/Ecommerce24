import React from 'react'
import { useForm } from 'react-hook-form'
import './style/filterPrice.css'

const FilterByPrice = ({setFromTo}) => {

const {reset, register, handleSubmit} = useForm()

const submit = data =>{
setFromTo(data)
reset({
    from:'',
    to:''
})
}

  return (
    <article className='filter__price'>
        <h4> Filter For Price</h4>
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor=""></label>
                <input {...register('from')} type="number" placeholder='From' id='from' />
            </div>
            <div>
                <label htmlFor="to"></label>
                <input {...register('to')} type="number" placeholder='To' id='to' />
            </div>
            <button>Filter Price</button>
        </form>
    </article>
  )
}

export default FilterByPrice