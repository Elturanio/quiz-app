import "../styles/QuizList.css"
import QuizCard from "./QuizCard"

const QuizList = () => {
   return (
      <div className="quizlist-component">
         <QuizCard />
         <QuizCard />
         <QuizCard />
         <QuizCard />
      </div>
   )
}

export default QuizList