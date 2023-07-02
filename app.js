window.onload = () => {
    function buildClock(params) {
        console.log("Adarsh Mourya");

    const date = new Date();
    console.log(date);

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "AM";

    if(hours === 0){
        hours = 12;
    }
    if(hours > 12){
        hours = hours - 12;
        session = "PM";
     }

    hours = hours <10 ? '0' + hours : hours;
    minutes = minutes <10 ? '0' + minutes : minutes;
    seconds = seconds <10 ? '0' + seconds : seconds;
    //session = hours <12 ? "AM" : "PM";

    document.querySelector('#clock-hour').innerText = hours;
    document.querySelector('#clock-minute').innerText = minutes;
    document.querySelector('#clock-second').innerText = seconds;
    document.querySelector('#clock-session').innerText = session;

    setTimeout(buildClock, 1000);
    }

    buildClock();
    
}