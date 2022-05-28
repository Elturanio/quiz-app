import "../styles/QuizCard.css"
const QuizCard = () => {
   return (
      <div className="card quizcard-component" style={{ width: '18rem' }}>
         <img src="https://media.istockphoto.com/vectors/quiz-neon-text-banner-on-brick-wall-questions-team-game-quiz-night-vector-id1223692043" className="card-img-top" alt="..." />
         <div className="card-body">
            <h5 className="card-title">Who is the best boxer in the UFC?</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. lore</p>
            <button className="btn btn-primary">Try to beat</button>
         </div>
      </div>

   )
}

export default QuizCard