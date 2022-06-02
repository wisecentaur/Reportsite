import {get} from './axiosFunctions';

export function getBonus(id){
    return get(`http://localhost:8080/getBonus/${id}`)
}