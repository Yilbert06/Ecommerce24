import './style/login.css'
import useAuthentication from '../hooks/useAuthentication'
import fond from '../../public/th.jpg'

const Login = () => {

    const {loginUser} = useAuthentication()

const handleLogin= e =>{
e.preventDefault()
const email= e.target.email.value
const password= e.target.password.value
const data = { email, password }
loginUser(data)
}


  return (
    <section className='login__section'>
    <form className='login' onSubmit={handleLogin}>
      <div className='img'>
      <i className="fa-solid fa-circle-user"></i> 
      </div>
        <h2 className='login__title'>User Login</h2>
        <div className='login__email'>
        <label className='login__label' htmlFor="email"></label>
        <input className='login__input' type="text" placeholder=' Enter Your Email' id='email' />
        </div>
        <div> 
        <label className='login__label' htmlFor="password"></label>
        <input className='login__input' type="password" placeholder='Enter Your Password' id='password' />
        </div>
        <div className='loginbtn'>
          <button className='login__bnt'>Sing In</button>
        <a className='login__btn2' href="#/">Cancel</a>
        </div>
        
        <a href="#/register/">Create new user</a>
    </form>
    </section>
    
  )
}

export default Login