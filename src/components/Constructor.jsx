import "../styles/Constructor.css"

const Constructor = () => {
   return (
      <div className="constructor-component">
         <div className="constructor-title-input-div">
            <h1 className="">Title of your Quiz</h1>
            <div className="input-group mb-3">
               <input type="text" className="form-control" placeholder="Quiz Title" aria-label="Recipient's username" aria-describedby="button-addon2" />
            </div>
         </div>
         <div className="constructor-question-add-div">
            <h2>Quiestion</h2>
            <input type="text" className="form-control constructor-question-input" placeholder="Quiz Title" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <form className="constructor-question-add-form">
               <h3>Question answers</h3>
               <div>
                  <div className="input-group mb-3">
                     <div className="input-group-text">
                        <input className="form-check-input mt-0" type="checkbox" defaultValue aria-label="Checkbox for following text input" />
                     </div>
                     <input type="text" className="form-control" aria-label="Text input with checkbox" />
                  </div>
                  <div className="input-group mb-3">
                     <div className="input-group-text">
                        <input className="form-check-input mt-0" type="checkbox" defaultValue aria-label="Checkbox for following text input" />
                     </div>
                     <input type="text" className="form-control" aria-label="Text input with checkbox" />
                  </div>
               </div>
               <div>
                  <div className="input-group mb-3">
                     <div className="input-group-text">
                        <input className="form-check-input mt-0" type="checkbox" defaultValue aria-label="Checkbox for following text input" />
                     </div>
                     <input type="text" className="form-control" aria-label="Text input with checkbox" />
                  </div>
                  <div className="input-group mb-3">
                     <div className="input-group-text">
                        <input className="form-check-input mt-0" type="checkbox" defaultValue aria-label="Checkbox for following text input" />
                     </div>
                     <input type="text" className="form-control" aria-label="Text input with checkbox" />
                  </div>
               </div>
            </form>
         </div>
         <div className="constructor-add-quiz-div">
            <div className="questions-counter-div">
               <h4>Question 1</h4>
            </div>
            <div className="question-add-button-div">
               <button className="btn btn-outline-primary">Add another question</button>
            </div>
            <div className="question-finish-button-div">
               <button className="btn btn-outline-success">Finish the Quiz</button>
            </div>
         </div>
      </div>
   )
}

export default Constructor