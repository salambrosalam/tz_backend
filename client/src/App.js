import React from "react";
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {useRoutes} from "./Routes/routes";

const App = () => {


  //Достаем нашу маршрутизацию
  const routes = useRoutes();

  return (
      <BrowserRouter>
          {/* Вставляем ее в приложение */}
        {routes}
      </BrowserRouter>
  );
}

export default App;
