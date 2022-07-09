import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import "../styles/Quiz.css"


import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";


const Quiz = () => {
   const navigate = useNavigate()
   let { titleId } = useParams()

   const [data, setData] = useState(null)

   const [answer, setAnswer] = useState(false)



   const changeValue = (e) => {
      setAnswer(e.target.value)
   }

   const quizResults = (e) => {
      e.preventDefault(); console.log(answer)
      if (data.answers[answer - 1].box) {
         alert(" it's correct")
         navigate("/quizes")

      } else {
         alert(" it's not correct")
         navigate("/quizes")
      }
   }

   useEffect(() => {

      const getData = async () => {


         const docRef = doc(db, "quiz-collection", `${titleId}`);
         const docSnap = await getDoc(docRef);

         if (docSnap.exists()) {
            setData(docSnap.data());
            console.log(docSnap.data())
         } else {
            console.log("No such document!");
         }

      }
      getData()

   }, [])


   const forRender = data ? <div className="quiz-component">
      <div className="quiz-some card">
         <div className="card-body">
            <form onSubmit={(e) => { quizResults(e) }}>

               <h5 className="card-title quiz-title">{data.question}</h5>
               <div className="card-text">
                  <ul className="list-group quiz-vars">
                     <li className="list-group-item quiz-var">
                        <input type="radio" name="answer" onChange={(e) => { changeValue(e) }} checked={answer == "1" ? true : false} value="1" className="form-check-input me-1" defaultValue aria-label="..." />
                        {data.answers[0].answer}
                     </li>
                     <li className="list-group-item quiz-var">
                        <input type="radio" name="answer" onChange={(e) => { changeValue(e) }} checked={answer == "2" ? true : false} value="2" className="form-check-input me-1" defaultValue aria-label="..." />
                        {data.answers[1].answer}
                     </li>
                     <li className="list-group-item quiz-var">
                        <input type="radio" name="answer" onChange={(e) => { changeValue(e) }} checked={answer == "3" ? true : false} value="3" className="form-check-input me-1" defaultValue aria-label="..." />
                        {data.answers[2].answer}
                     </li>
                     <li className="list-group-item quiz-var">
                        <input type="radio" name="answer" onChange={(e) => { changeValue(e) }} checked={answer == "4" ? true : false} value="4" className="form-check-input me-1" defaultValue aria-label="..." />
                        {data.answers[3].answer}
                     </li>
                  </ul>

               </div>
               <div className="quiz-bottom">
                  <div className="quiz-component-counter">
                     <h4>{data.title}</h4>
                  </div>
                  <button type="submit" href="#" className="btn btn-primary text-center quiz-btn">Finish quiz</button>
               </div>
            </form>
         </div>
      </div>
   </div> : <div className="loading-component"><h1>Loading...</h1></div>

   return (
      forRender
   )
}

export default Quiz