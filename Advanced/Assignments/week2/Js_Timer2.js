let countTill=10;

function counter(){
   console.log(countTill);
   countTill--;
   if(countTill>0){
    setTimeout(counter,1000);
   }
   else{
    console.log("Counter stopped");
   }
}
counter();