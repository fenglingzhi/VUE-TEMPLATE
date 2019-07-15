export const encryption = (password) => {
    let sha256 = require("js-sha256").sha256;
    let new_pwd = sha256(password);
    return new_pwd;
}