import { useState } from "react"
import "../styles/Constructor.css"

import { doc, setDoc } from "firebase/firestore"
import { db } from "../firebase";
import { useNavigate } from "react-router-dom"

const Constructor = () => {


   const [title, setTitle] = useState("")
   const [question, setQuestion] = useState("")
   const [answer1, setAnswer1] = useState("")
   const [answer2, setAnswer2] = useState("")
   const [answer3, setAnswer3] = useState("")
   const [answer4, setAnswer4] = useState("")
   const [box1, setBox1] = useState(false)
   const [box2, setBox2] = useState(false)
   const [box3, setBox3] = useState(false)
   const [box4, setBox4] = useState(false)

   const navigate = useNavigate()




   const inputHandler = (e, fn) => {
      fn(e.target.value)
   }
   const checkboxHandler = (e, fn) => {
      fn(e.target.checked)
   }

   const submitHandler = (e) => {
      e.preventDefault()
      function defaultEverythng() {
         setTitle(""); setQuestion(""); setAnswer1(""); setAnswer2(""); setAnswer3(""); setAnswer4("");
         setBox1(""); setBox2(""); setBox3(""); setBox4("");
      }
      if (title && question && answer1 && answer2 && answer3 && answer4 && (box1 || box2 || box3 || box4)) {
         console.log("everything is good")
         const data = {
            title,
            question,
            answers: [{ answer: answer1, box: box1 }, { answer: answer2, box: box2 }, { answer: answer3, box: box3 }, { answer: answer4, box: box4 }]
         }
         const path = doc(db, `quiz-collection/${data.title}`)
         setDoc(path, data)
         defaultEverythng()
         navigate("/")

      } else console.log("you forgor to fill another inputs")
      console.table([title, question, answer1, answer2, answer3, answer4])
   }

   return (
      <div className="constructor-component">
         <form onSubmit={submitHandler} className="constructor-question-add-form">
            <div className="constructor-title-input-div">
               <h1 className="">Title of your Quiz</h1>
               <div className="input-group mb-3">
                  <input type="text" className="form-control" value={title} onChange={(e) => inputHandler(e, setTitle)} placeholder="Quiz Title" aria-label="Recipient's username" aria-describedby="button-addon2" />
               </div>
            </div>
            <div className="constructor-question-add-div">
               <h2>Quiestion</h2>
               <input type="text" className="form-control constructor-question-input" value={question} onChange={(e) => inputHandler(e, setQuestion)} placeholder="Quiz Title" aria-label="Recipient's username" aria-describedby="button-addon2" />
               <h3>Question answers</h3>
               <div>
                  <div className="input-group mb-3">
                     <div className="input-group-text">
                        <input onChange={(e) => { checkboxHandler(e, setBox1) }} checked={box1} className="form-check-input mt-0" type="checkbox" defaultValue aria-label="Checkbox for following text input" />
                     </div>
                     <input type="text" value={answer1} onChange={(e) => inputHandler(e, setAnswer1)} className="form-control" aria-label="Text input with checkbox" />
                  </div>
                  <div className="input-group mb-3">
                     <div className="input-group-text">
                        <input onChange={(e) => { checkboxHandler(e, setBox2) }} checked={box2} className="form-check-input mt-0" type="checkbox" defaultValue aria-label="Checkbox for following text input" />
                     </div>
                     <input type="text" value={answer2} onChange={(e) => inputHandler(e, setAnswer2)} className="form-control" aria-label="Text input with checkbox" />
                  </div>
               </div>
               <div>
                  <div className="input-group mb-3">
                     <div className="input-group-text">
                        <input onChange={(e) => { checkboxHandler(e, setBox3) }} checked={box3} className="form-check-input mt-0" type="checkbox" defaultValue aria-label="Checkbox for following text input" />
                     </div>
                     <input type="text" value={answer3} onChange={(e) => inputHandler(e, setAnswer3)} className="form-control" aria-label="Text input with checkbox" />
                  </div>
                  <div className="input-group mb-3">
                     <div className="input-group-text">
                        <input onChange={(e) => { checkboxHandler(e, setBox4) }} checked={box4} className="form-check-input mt-0" type="checkbox" defaultValue aria-label="Checkbox for following text input" />
                     </div>
                     <input type="text" value={answer4} onChange={(e) => inputHandler(e, setAnswer4)} className="form-control" aria-label="Text input with checkbox" />
                  </div>
               </div>
            </div>
            <div className="constructor-add-quiz-div">
               {/* <div className="questions-counter-div">
               <h4>Question 1</h4>
            </div> */}
               {/* <div className="question-add-button-div">
               <button className="btn btn-outline-primary">Add another question</button>
            </div> */}
               <div className="question-finish-button-div">
                  <input className="btn btn-outline-success" value={"Finish the Quiz"} type={"submit"}></input>
               </div>
            </div>
         </form>
      </div>
   )
}

export default Constructor