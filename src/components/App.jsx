import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux"
import { routes } from "../routes";
import { useEffect } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";



function App() {

  const user = useSelector(state => state.user.isRegisted)
  return (
    <Routes>
      {!user && <Route path={routes.register.url} element={routes.register.component} />}
      {user && <>
        <Route path="/" element={routes.main.component} />
        <Route path={routes.quizes.url} element={routes.quizes.component} />
        <Route path={routes.constructor.url} element={routes.constructor.component} />
        <Route path={routes.quiz.url} element={routes.quiz.component} />
      </>}
      <Route path="*" element={<Navigate to={user ? "/" : routes.register.url} />} />
    </Routes>
  );
}

export default App;
