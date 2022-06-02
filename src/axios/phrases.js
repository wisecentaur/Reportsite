import {post} from './axiosFunctions'

export function getPhrases() {
    return 		fetch('https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(response => response.json())
    .then(data => {
     return data.quotes;
    })
}

export function postData(data) {
    console.log(data)
    return post(`http://localhost:8080/file`, data)
} 