import React from 'react';
import { Switch } from 'react-router-dom';
import routers from './router/router';
import './App.css';
import Menu from './components/menu/Menu';
import Home from './components/menu/Home';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Study {
  name?: string,
  phone?: string,
  email?: string,
}
const App: React.FC<Study> = (

) => {
  const auth = localStorage.getItem("token");
  return (
    <div>
        123:{auth}
        {!!auth ? <Menu /> : <Home/> }
        <Switch>
          {Object.keys(routers).map((key) => {
            //@ts-ignore
            const route = routers[key];
            return <route.route key={route.path} {...route} />;
          })}
        </Switch>
      <ToastContainer closeButton={false} />
    </div>
  )
}
export default App;


