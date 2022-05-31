import { Routes, Route } from "react-router-dom";
import { routes } from "../routes";

function App() {
  return (
    <Routes>
      <Route path={routes.register.url} element={routes.register.component} />
      <Route path={routes.main.url} element={routes.main.component} />
      <Route path={routes.quizes.url} element={routes.quizes.component} />
      <Route path={routes.constructor.url} element={routes.constructor.component} />
      <Route path={routes.quiz.url} element={routes.quiz.component} />
    </Routes>
  );
}

export default App;
