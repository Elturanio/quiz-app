import "../styles/Main.css"
import { Link, } from "react-router-dom"
import { routes } from "../routes"


const Main = () => {
   return (
      <div className="main-component">
         <Link to={routes.constructor.url} className="main-create-button btn btn-outline-primary btn-lg">Create own Quiz</Link>
         <Link to={routes.quizes.url} className="main-show-button btn btn-outline-primary btn-lg">Show Quiz list</Link>
      </div>
   )
}

export default Main