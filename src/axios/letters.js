import {get} from './axiosFunctions';

export function GetAllLettersByReciever(id){
    return get(`http://localhost:8081/getLettersByReciever/${id}`)
}