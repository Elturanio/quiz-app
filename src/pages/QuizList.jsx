import "../styles/QuizList.css"
import QuizCard from "../components/QuizCard"
import { useEffect, useState } from "react"

import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const QuizList = () => {

   const [data, setData] = useState([])

   useEffect(() => {
      const getCollection = async () => {

         const querySnapshot = await getDocs(collection(db, "quiz-collection"));
         querySnapshot.forEach((doc) => {
            setData((state) => [...state, doc.data()])
            console.log(doc.id, " => ", doc.data());
         });

      }
      getCollection()
   }, [])

   console.log(data)
   const dataFor = data
   return (
      <div className="quizlist-component">
         {dataFor.map((quiz) => <QuizCard data={quiz} key={quiz.title} />)}
      </div>
   )
}

export default QuizList