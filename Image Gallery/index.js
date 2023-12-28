function myfucntion(){
    var element = document.body;
    element.classList.toggle("dark-mode")
}

setInterval(showtime,1000);


function showtime(){
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    day = "AM";

    if(hour>=12){
        if(hour>12)
        hour-=12;
     day="PM";

    }
    else if(hour==0){
        hour =12;
        day="AM";
    }
    hour = hour<10 ? "0" +hour : hour;
    min =min<10? "0" + min:min;
    sec =sec<10 ? "0"+sec : sec;

    let currentTime = hour+ ":"+min+ ":"+sec+day;

    document.getElementById("clock").innerHTML =currentTime;
}
showtime();