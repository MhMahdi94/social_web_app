import { Link } from 'react-router-dom'
import './login.scss'

const Login = () => {
  return (
    <div className="login">
        <div className="card">
            <div className="left">
                <h1>Hello World.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis interdum nulla at tincidunt. Mauris eget lectus venenatis, tristique metus vel, ornare elit. Donec quis turpis a magna egestas euismod. Maecenas in bibendum mi. Vestibulum sit amet nisl sodales, maximus lacus eu, bibendum turpis. Donec facilisis fermentum commodo. Etiam eu nulla tortor.</p>
                <span>Don't you have an account?</span>
                <Link to='/register'>
                    <button>Register</button>
                </Link>
                
            </div>
            <div className="right">
                <h1>Login</h1>
                <form >
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password"/>
                    <button>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login