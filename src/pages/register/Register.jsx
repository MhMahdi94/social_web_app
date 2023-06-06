import './register.scss'

const Register = () => {
  return (
    <div className="register">
        <div className="card">
            <div className="left">
                <h1>Social App.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis interdum nulla at tincidunt. Mauris eget lectus venenatis, tristique metus vel, ornare elit. Donec quis turpis a magna egestas euismod. Maecenas in bibendum mi. Vestibulum sit amet nisl sodales, maximus lacus eu, bibendum turpis. Donec facilisis fermentum commodo. Etiam eu nulla tortor.</p>
                <span>Do you have an account?</span>
                <button>Login</button>
            </div>
            <div className="right">
                <h1>Register</h1>
                <form >
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email"/>
                    <input type="text" placeholder="name" />
                    <input type="password" placeholder="Password"/>
                    <button>Register</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register