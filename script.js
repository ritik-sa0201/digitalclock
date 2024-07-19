let currtime = new Date();
let seconds = currtime.getSeconds();
let clock = document.getElementById("clock");
let timenow = 0;
setInterval(() => {
       seconds++;
       if(seconds == 59){
           seconds = 0;
           currtime.setMinutes(currtime.getMinutes()+1);

       }   
       if(currtime.getMinutes() == 59){
           currtime.setHours(currtime.getHours()+1);
       }
  currtime.setSeconds(seconds);
  timenow = currtime.toLocaleTimeString();
  clock.innerText = timenow;
}, 1000);