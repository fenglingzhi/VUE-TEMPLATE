import { getData,postData } from '../config.js';

export function Login(username,pwd) {
    let req = {
        username:username,
        password:pwd
        // userName:username,
        // password:pwd
    };
    return postData('/login',req)
}
