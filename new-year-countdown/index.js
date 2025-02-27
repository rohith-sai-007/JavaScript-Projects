const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
console.log(seconds);

const t = setInterval(() => {
    let newYearDate = new Date(2026,0,1);
    let currentDate = new Date();
    let timeDiff = (newYearDate-currentDate);

    const MS_IN_A_DAY = 24 * 60 * 60 * 1000;
    const MS_IN_AN_HOUR = 60 * 60 * 1000;
    const MS_IN_A_MINUTE = 60 * 1000;
    const MS_IN_A_SECOND = 1000;

    let daysLeft = Math.floor(timeDiff / MS_IN_A_DAY);
    let remainingMs = timeDiff % MS_IN_A_DAY;

    let hoursLeft = Math.floor(remainingMs / MS_IN_AN_HOUR);
    remainingMs %= MS_IN_AN_HOUR;

    let minutesLeft = Math.floor(remainingMs / MS_IN_A_MINUTE);
    remainingMs %= MS_IN_A_MINUTE;

    let secondsLeft = Math.floor(remainingMs / MS_IN_A_SECOND);
    remainingMs %= MS_IN_A_SECOND;

    days.textContent = daysLeft;
    seconds.textContent = secondsLeft;
    minutes.textContent = minutesLeft;
    hours.textContent = hoursLeft;
},1000);

