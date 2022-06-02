import {post} from './axiosFunctions';
import {get}  from './axiosFunctions';

export function Register(newUser){
    return post('http://localhost:8081/register', newUser)
}

export function GetUser(id){
    return get(`http://localhost:8081/getUser/${id}`)
}

export function AllUsers(){
    return get('http://localhost:8081/Allusers')
}

export function Login(login, password){
    return post('http://localhost:8081/Login', {login, password})
}
