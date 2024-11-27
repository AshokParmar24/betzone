import "./App.css";
import betzone_full_logo from "./assets/betzon_full_logo.png";
import React from "react";
import AppRouter from "./routes/Routes";

function App() {
  return (
    <div className="flex flex-col h-[100vh]">
      <img src={betzone_full_logo} alt="betzone" className="w-full p-0 m-0" />
      <AppRouter />
    </div>
  );
}

export default App;
