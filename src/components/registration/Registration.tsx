import React, {useState} from "react";
import { Component } from "react";
import { Register } from "../../axios/users";
import { LOGIN } from "../../route/Routes";
import {Link} from "react-router-dom"
import Card from "../card/Card";
import './registration.scss'
import { loginInCookie } from "../../auth/auth";



interface IProps{
    setLogged: (a:boolean) => void
}

export default function Registration(props:IProps){
   

     const checkPassword  = async () =>{
        const userPassword = (document.getElementById('regPassword') as HTMLInputElement).value
        const userRepPassword = (document.getElementById('regRepeatedPassword') as HTMLInputElement).value


        if(userPassword === userRepPassword){
            const userLogin= (document.getElementById('regLogin') as HTMLInputElement).value
            const userName = (document.getElementById('regName') as HTMLInputElement).value
            const userSurName = (document.getElementById('regSurName') as HTMLInputElement).value
            const user = await Register({
                name: userName,
                surname: userSurName ,
                login: userLogin,
                password: userPassword
            }) 
            if(user !== undefined){
                loginInCookie(user)
                props.setLogged(true)
            }
        } else{
            alert('bad')
            console.log(userPassword)
            console.log(userRepPassword)
        }
    }
    return(
        <Card class="registrationCard">
            <div className="card__content">
                <div className="form__item">
                    <label htmlFor="regLogin">Cтворіть логін</label>
                    <input name="regLogin" placeholder="Створіть логін" id="regLogin"/>
                </div>
                <div className="form__item">
                    <label htmlFor="regName">Ваше ім'я</label>
                    <input name="regName" placeholder="Ваше ім'я" id="regName"/>
                </div>
                <div className="form__item">
                    <label htmlFor="regSurName">Ваше прізвище</label>
                    <input name="regSurName" placeholder="Ваше прізвище" id="regSurName"/>
                </div>
                <div className="form__item">
                    <label htmlFor="regPassword">Створіть пароль</label>
                    <input name="regPassword" placeholder="Створіть пароль" id="regPassword"/>
                </div>
            <div className="form__item">
                    <label htmlFor="regRepeatedPassword">Повторіть ваш пароль</label>
                    <input name="regRepeatedPassword" placeholder="Повторіть ваш вароль" id="regRepeatedPassword"/>
            </div>
                <div className="form__buttons">
                    <button onClick={checkPassword}className="regButton" id="regButton">Register</button>
                        <Link className="regButton secButton" to={LOGIN}>Login</Link>
                </div>
            </div>
        </Card>
    )    
}
