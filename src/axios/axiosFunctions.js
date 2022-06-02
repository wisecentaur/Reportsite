export function get(url) {
    return fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers
    }).then(resp => {
        
        return resp.json()});
}

export function post(url, data) {
    return fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers,
        body: JSON.stringify(data)
    }).then(resp => resp.json());
}

export const headers = {
    'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type',
    'Access-Control-Allow-Origin': "*",
    "Content-Type": "application/json",
};