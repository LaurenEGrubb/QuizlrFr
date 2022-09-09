import '../styles/App.css'


function Login (){
  return (
    <div>
         <form className="loginform">
          
            <label htmlFor="username">Username</label>
            <input name="username"type="username"placeholder="Username"required/>
         
            <label htmlFor="password">Password</label>
            <input name="password"type="password"placeholder='Password'/>
        
          <button>
            Login
          </button>
        </form>
        
    </div>

  )
}
export default Login