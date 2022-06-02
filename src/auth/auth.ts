export function loginInCookie(user: IUserInfo){
    document.cookie = `user=${JSON.stringify(user)}`;
}

export function isLoggedIn(){
    return document.cookie.split(";").findIndex((x) => x.split("=").findIndex(y => y === 'user') !== -1) !== -1;
}
export function getLogin(){
    try {
        return JSON.parse(document.cookie.split(";").filter(x => x.split("=")[0] === 'user')[0].split("=")[1]);
    } catch (e){
        return undefined;
    }
}
// "user={id:0,name:'user'};meta=2;"

export function getUser(){
    const cookie = document.cookie.split(";");
    const index = cookie.findIndex((x) => x.includes("user"));
    return JSON.parse(cookie[index].substring(5));
}