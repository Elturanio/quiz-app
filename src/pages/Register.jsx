import "../styles/Register.css"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/slices/userSlice"



const Register = () => {

   const [loginValue, setLoginValue] = useState("")
   const [passValue, setPassValue] = useState("")
   const [checkboxValue, setCheckboxValue] = useState(true)

   const dispatch = useDispatch()

   const submitHandler = (e) => {
      e.preventDefault()
      const email = e.target[0].value
      const password = e.target[1].value
      const auth = getAuth()
      checkboxValue ? createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            console.log(userCredential)
            dispatch(signIn())
         })
         .catch((err) => { alert("your email is not correct"); console.log("erorka", err) })

         : signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
               console.log(userCredential)
               dispatch(signIn())
            })
            .catch((err) => { alert("your email is not correct"); console.log("erorka", err) })
   }

   const inputHandler = (e, fn) => {
      fn(e.target.value)
   }
   const checkboxHandler = (e) => {
      setCheckboxValue(e.target.checked)
   }

   return (
      <div className="register-component">
         <div className="register-header">
            <h1>Sign Up</h1>
         </div>
         <div className="register-form-div">
            <form action="#" className="register-form" onSubmit={submitHandler}>
               <div className="register-login-input-div">
                  <input type="text" value={loginValue} onChange={(e) => inputHandler(e, setLoginValue)} className="login-input form-control" placeholder="Your Email" />
               </div>

               <div className="register-password-input-div">
                  <input type="password" value={passValue} onChange={(e) => inputHandler(e, setPassValue)} className="input-password form-control" placeholder="Your Password" />
               </div>
               <div className="register-checkbox-input-div">
                  <input type="checkbox" checked={checkboxValue} onChange={checkboxHandler} />
                  <p className="register-checkbox-text">Sign Up</p>
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