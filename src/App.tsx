import React from 'react';
import { Switch } from 'react-router-dom';
import routers from './router/router';
import './App.css';
import Menu from './components/menu/Menu';

interface Study {
  name?: string,
  phone?: string,
  email?: string,
}
const App: React.FC<Study> = (

) => {
  return (
    <div>
      <Menu />
      <Switch>
        {Object.keys(routers).map((key) => {
          //@ts-ignore
          const route = routers[key];
          return <route.route key={route.path} {...route} />;
        })}
      </Switch>
    </div>
  )
}
export default App;


