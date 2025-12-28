import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "../pages/Signup";
import SignIn from "../pages/signIn";
export const serverUrl = "http://localhost:8000";

function App() {
  return (
    <Routes>
      <Route path="/Signup" element={<Signup />} />
      <Route path="/SignIn" element={<SignIn />} />
    </Routes>
  );
}
export default App;
