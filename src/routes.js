import Constructor from "./pages/Constructor";
import Main from "./pages/Main";
import Quiz from "./pages/Quiz";
import QuizList from "./pages/QuizList";
import Register from "./pages/Register";

export const routes = {
   register: {
      url: "signup",
      component: <Register />
   },
   main: {
      url: "main",
      component: <Main />
   },
   quizes: {
      url: "quizes",
      component: <QuizList />
   },
   constructor: {
      url: "constructor",
      component: <Constructor />
   },
   quiz: {
      url: "quiz",
      component: <Quiz />
   },
}