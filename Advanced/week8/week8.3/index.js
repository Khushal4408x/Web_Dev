const { response } = require("express");
const axios =require ('axios');

async function main2(){
    const response=await fetch("https://httpdump.app/dumps/9d8822c0-b8b9-47aa-8d1e-4a6cc6073516",{
        method:'POST',
        body:{
            username:"Khushal",
            password:"123"
        },
        headers:{
            "Authorization":"Bearer 123"
        }
    },
    )
        const textualData=await response.text();
        console.log(textualData)
   
}
//in a get req we cannot send body
async function main() {
    const response = await axios.post("https://httpdump.app/dumps/9d8822c0-b8b9-47aa-8d1e-4a6cc6073516",

        {
            username:"khushal",
            password:"12344"
        },
        {
            headers:{
                Authorization:"Bearer 123",
            }
        }
    );
    console.log(response.data);

    
}
main2()
main ()