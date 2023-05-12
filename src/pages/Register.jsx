import React from 'react'
import useAuthentication from '../hooks/useAuthentication'
import { useForm } from 'react-hook-form'
import './style/register.css'
import { Route } from 'react-router-dom'

const Register = () => {

    const {register, handleSubmit, reset} = useForm ()

    const {createNewUser} = useAuthentication()

    const submit = data =>{
    createNewUser(data)
    reset(defaultRegisterValues)
    }
    const handleHome = ()=>{
        Route
    }

  return (
    <section className='register'>
        <div className='register__section'>
        <form className='register__form' onSubmit={handleSubmit(submit)}>
            <h2 className='register__name'>New User</h2>
        <div>
            <label className='register__label' htmlFor="firstName" >First Name</label>
            <input className='register__input' {...register('firstName')} type="text"placeholder='First Name' id='firstName' />
        </div>
        <div>
            <label className='register__label' htmlFor="lastName">Last Name</label>
            <input className='register__input' {...register('lastName')}type="text"placeholder='Last Name' id='lastName' />
        </div>
        <div>
            <label className='register__label' htmlFor="email">Email</label>
            <input className='register__input' {...register('email')} type="email"placeholder='example@mail.com ' id='email' />
        </div>
        <div>
            <label className='register__label' htmlFor="password">Password</label>
            <input className='register__input' {...register('password')} type="password"placeholder='Enter Your Password ' id='password' />
        </div>
        <div>
            <label className='register__label' htmlFor="phone">Phone</label>
            <input className='register__input' {...register('phone')} type="tel"placeholder='11-31822916 ' id='phone' />
        </div>
        <button className='register__btn'>Register</button>
        <a className='register__btn2' href="#/">Cancel</a>
    </form>
        </div>
    
    </section>
  )
}

export default Register