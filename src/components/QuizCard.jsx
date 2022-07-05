import { Link } from "react-router-dom"
import "../styles/QuizCard.css"

const QuizCard = ({ data: { title, question, answers } }) => {
   console.log(title, question, answers)
   return (
      <div className="card quizcard-component" style={{ width: '18rem' }}>
         <img src="https://media.istockphoto.com/vectors/quiz-neon-text-banner-on-brick-wall-questions-team-game-quiz-night-vector-id1223692043" className="card-img-top" alt="..." />
         <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{question}</p>
            <Link to={"any"} className="btn btn-primary">Try to beat</Link>
         </div>
      </div>

   )
}

export default QuizCard