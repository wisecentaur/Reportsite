import React, { useState } from 'react';
import Card from "../card/Card";
import {Link} from 'react-router-dom'
import { REGISTER } from '../../route/Routes';
import { Login } from '../../axios/users';
import {loginInCookie} from '../../auth/auth'


interface IProps{

  setLogged: (a:boolean) => void
}

function LoginPage(props:IProps) {
    const [login, changeLogin] = useState('');
    const [passWord, changePassword] = useState('');
    // const [canLink, setCanLink] = useState(false)

  const loginAction = async () => {
    const user = await Login(login, passWord);
    if(!user) return;
    loginInCookie(user)
    props.setLogged(true)
  }

  return (
      <Card class="registrationCard">
        <div className="card__content">
          <div className="form__item">
              <label htmlFor="regLogin">Введіть логін</label>
              <input name="regLogin" placeholder="Введіть логін" onChange={(event) => changeLogin(event.target.value)}/>
          </div>
          <div className="form__item">
              <label htmlFor="regPassword">Введіть пароль</label>
              <input name="regPassword" placeholder="Введіть пароль" onChange={(event) => changePassword(event.target.value)}/>
          </div>
          <div className="form__buttons">
            <button  className="regButton" onClick={loginAction}>Login</button>
            <Link className="regButton secButton" to={REGISTER}>Register</Link>
          </div>
        </div>
      </Card>
  )
}

export default LoginPage;
