let date = new Date('26 October 2023');


const day = document.querySelector('[data-day]');
const hour = document.querySelector('[data-hour]');
const minute = document.querySelector('[data-minute]');
const second = document.querySelector('[data-second]');

const changeCountdownButton = document.getElementById('change-countdown-button');
const setCountdownButton = document.getElementById('start-countdown-button');


//on clicking 'Set Countdown' button
setCountdownButton.addEventListener('click', setCountdown);

//on clicking add button
changeCountdownButton.addEventListener('click', () => {
    document.querySelector('[data-set-countdown-screen]').classList.remove('hidden');
    document.querySelector('[data-main-class]').classList.add('blur');
})


function setCountdown() {

    document.querySelector('[data-set-countdown-screen]').classList.add('hidden');
    document.querySelector('[data-main-class]').classList.remove('blur');

    const name = document.getElementById('countdown-name').value;
    document.getElementById('countdown-heading').innerText = "Coutndown till " + name;

    const selectedDate = document.getElementById('select-date').value;

    console.log(selectedDate)

    date = new Date(selectedDate);
    console.log(date);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);

}

function startCountDown() {


    const todaysDate = new Date();
    const totalSecondsLeft = (date - todaysDate) / 1000; // in seconds 

    const dayLeft = Math.trunc(totalSecondsLeft / 86400);
    const hourLeft = Math.trunc((totalSecondsLeft / 3600) % 24);
    const minuteLeft = Math.trunc((totalSecondsLeft / 60) % 60);
    const secondLeft = Math.trunc((totalSecondsLeft % 60));

    day.innerText = dayLeft;
    hour.innerText = hourLeft < 10 ? `0${hourLeft}` : hourLeft;
    minute.innerText = minuteLeft < 10 ? `0${minuteLeft}` : minuteLeft;
    second.innerText = secondLeft < 10 ? `0${secondLeft}` : secondLeft;


}


startCountDown();
setInterval(startCountDown, 1000);
