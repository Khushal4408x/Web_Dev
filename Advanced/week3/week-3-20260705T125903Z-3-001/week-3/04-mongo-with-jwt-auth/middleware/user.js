const {JWT_SECRET}=require("../config")
const jwt=require("jsonwebtoken")
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token=req.headers.authorization;
    const words=token.split(" ");
    const jwtToken=words[1];
    const decodedValue=jwt.verify(jwtToken,JWT_SECERET)
    if(decodedValue.username){
        next();
    }
    else{
        res.send(403).json({
            msg:"you're not authenticated"
        })
    }
}

module.exports = userMiddleware;