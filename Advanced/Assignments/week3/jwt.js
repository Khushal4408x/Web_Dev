const jwt = require('jsonwebtoken');
const { decode } = require('node:punycode');
const jwtPassword = 'secret';
const zod=require('zod')

const usernameSchema=zod.string().email();
const passwordSchema=zod.string().min(6);



function signJwt(username, password) {
    usernameResponse=usernameSchema.safeParse(username);
    passwordResponse=passwordSchema.safeParse(password);
    if(!usernameResponse.success||!passwordResponse.success){
        return null;
    }
    const signature=jwt.sign(username,jwtPassword);
    return signature;
}


function verifyJwt(token) {
    let ans=true;
   try{ const verified=jwt.verify(token,jwtPassword); 
    
   }//It can throw exception if something goes wrong!!!! therefore use try catch
   catch(e){
    ans=false;
   }
    return ans;
}


function decodeJwt(token) {
    const decoded=jwt.decode(token);//either decode funct will return  null or decoded string 
    if(!decoded){
        return false;
    }
    else{return true;}
}


