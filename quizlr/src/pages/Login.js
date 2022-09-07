import '../styles/App.css'

function Login (){
  return (
    <div>
         <form className="loginform">
          <div className="form-wrap">
            <label htmlFor="email">Email</label>
            <input
              
              name="email"
              type="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="form-wrap">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder='Password'
            />
          </div>
          <button>
            Login
          </button>
        </form>
        
    </div>

  )
}
export default Login