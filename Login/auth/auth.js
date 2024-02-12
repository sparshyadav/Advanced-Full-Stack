const jwt=require("jsonwebtoken");
const secretKey="naag skati";

module.exports.createWebToken=(user)=>{
    return jwt.sign(user, secretKey, {expiresIn: "24h"});
}