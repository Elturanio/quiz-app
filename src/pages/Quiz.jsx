import "../styles/Quiz.css"

const Quiz = () => {
   return (
      <div className="quiz-component">
         <div className="quiz-some card">
            <div className="card-body">
               <h5 className="card-title quiz-title">Who is the best boxer in UFC?</h5>
               <div className="card-text">
                  <ul className="list-group quiz-vars">
                     <li className="list-group-item quiz-var">
                        <input className="form-check-input me-1" type="checkbox" defaultValue aria-label="..." />
                        First checkbox
                     </li>
                     <li className="list-group-item quiz-var">
                        <input className="form-check-input me-1" type="checkbox" defaultValue aria-label="..." />
                        Second checkbox
                     </li>
                     <li className="list-group-item quiz-var">
                        <input className="form-check-input me-1" type="checkbox" defaultValue aria-label="..." />
                        Third checkbox
                     </li>
                     <li className="list-group-item quiz-var">
                        <input className="form-check-input me-1" type="checkbox" defaultValue aria-label="..." />
                        Fourth checkbox
                     </li>
                  </ul>
               </div>
               <div className="quiz-bottom">
                  <div className="quiz-component-counter">
                     <h4>Question 1 of 13</h4>
                  </div>
                  <button href="#" className="btn btn-primary text-center quiz-btn">Next question</button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Quiz