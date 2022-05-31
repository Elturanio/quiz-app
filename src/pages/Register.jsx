import "../styles/Register.css"

const Register = () => {
   return (
      <div className="register-component">
         <div className="register-header">
            <h1>Sign Up</h1>
         </div>
         <div className="register-form-div">
            <form action="#" className="register-form">
               <div className="register-login-input-div">
                  <input type="text" className="login-input form-control" placeholder="Your Email" />
               </div>
               <div className="register-password-input-div">
                  <input type="password" className="input-password form-control" placeholder="Your Password" />
               </div>
               <div className="register-submit-button-div">
                  <input type="submit" className="register-submit-button btn btn-success" value={"Sign Up"} />
               </div>
            </form>
         </div>

      </div>
   )
}

export default Register