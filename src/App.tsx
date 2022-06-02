import React, { useEffect, useState } from 'react';
import Home from './components/home/Home'
import Employee from './components/employee/Employee'
import Layout from './components/layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import Bonus from './components/Bonus/Bonus';
import Profile from './components/profile/Profile'
import { EMPLOYEE, HOME, PROFILE, REGISTER, LOGIN, ADMIN, BONUSES, EMAIL} from './route/Routes';
import Email from './components/email/Email';
import Registration from './components/registration/Registration';
import LoginPage from './components/loginPage/loginPage';
import { isLoggedIn } from './auth/auth';
import Admin from './components/Admin/Admin';



function App() {
  const [isLogged, setLogged] = useState<Boolean>(isLoggedIn())  

  return (
    <BrowserRouter> 
      <div className="App" > { 
      !isLogged?( // isLogged
        <div className="Registration">
          <Switch>
            <Route exact path={LOGIN}>
              <LoginPage setLogged={setLogged}/>
            </Route>
            <Route path={REGISTER}>
              <Registration setLogged={setLogged}/>
            </Route>
          </Switch>
         
        </div>
        )
      :(
        <Layout>
          <div className="content-content">
          <Switch>
            <Route exact path={HOME}>
              <Home/>
            </Route>
            <Route path={EMPLOYEE}>
              <Employee />
            </Route>
            <Route path={BONUSES}>
              <Bonus />
            </Route>
            <Route path={`${PROFILE}/:id`} component={Profile}/>
            <Route path={ADMIN}>
              <Admin/>
             </Route> 
            <Route path={EMAIL}>
              <Email />
            </Route>
          </Switch>
          </div>
        </Layout>
        )
      }

      </div>
    </BrowserRouter>
  )
}

export default App;
