


const targetDate = new Date(); 
targetDate.setDate(targetDate.getDate()+28);


const countDown = () => {

    const currentDate = new Date();

    const timeDifference = targetDate.getTime() - currentDate.getTime();

    const days = Math.floor((timeDifference / (1000*60*60*24)));

    const hours = Math.floor(((timeDifference % (1000*60*60*24)) / (1000*60*60)));

    const minutes = Math.floor(((timeDifference % (1000*60*60)) / (1000*60)));

    const seconds = Math.floor(((timeDifference % (1000*60)) / (1000)));

    const daysElement= document.getElementById("days");
    const hrElement = document.getElementById("hr");
    const minElement = document.getElementById("minutes");
    const secElement = document.getElementById("seconds");
   
    const daysElementMob= document.getElementById("days-mobile");
    const hrElementMob = document.getElementById("hr-mobile");
    const minElementMob = document.getElementById("minutes-mobile");
    const secElementMob = document.getElementById("seconds-mobile");


    daysElement.innerHTML =`${days}`;
    hrElement.innerHTML =`${hours}`;
    minElement.innerHTML =`${minutes}`;
    secElement.innerHTML =`${seconds}`;
    

    daysElementMob.innerHTML =`${days}`;
    hrElementMob.innerHTML =`${hours}`;
    minElementMob.innerHTML =`${minutes}`;
    secElementMob.innerHTML =`${seconds}`;

}

countDown();

setInterval(countDown,1000);