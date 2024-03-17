
const alarm = document.querySelector(".alarm");
const audio = document.querySelector("audio");
const btnReset = document.querySelector(".reset");
const btnStart = document.querySelector(".start");
const timeInput = document.querySelector("input");
const timeDisplay = document.querySelector(".timer");

const timeSet1 = () => {
    alarm.classList.add("alarm--ring")
    audio.play()
}

const reloadPage = () => {
    location.href = location.href
}
btnReset.addEventListener("click", reloadPage)


const timeSet2 = btnStart.addEventListener("click", () => {
    let timeValue = timeInput.value
    let hours = Number(timeValue.slice(0, 2))
    let minutes = Number(timeValue.slice(3, 5))
    let seconds = Number(timeValue.slice(6, 8))

    const time = (hours * 3600000) + (minutes * 60000) + (seconds * 1000)
    setTimeout(timeSet1, time)


    const interval = setInterval(() => {
    let totalSeconds = hours * 3600 + minutes * 60 + seconds

/*         if(totalSeconds > 0){
            totalSeconds--

            let remainingHours = Math.floor(totalSeconds / 3600)
            let remainingMinutes = Math.floor((totalSeconds % 3600) / 60)
            let remainingSeconds = totalSeconds % 60

            timeDisplay.textContent = `${String(remainingHours).padStart(2, "0")} : ${String(remainingMinutes).padStart(2, "0")} : ${String(remainingSeconds).padStart(2, "0")}`

            if(seconds <= 0){
                clearInterval(interval)
            }
        }  */  

        if (hours === 0 && minutes === 0 && seconds === 0) {
            clearInterval(interval);
            return;
        }

        if (seconds === 0) {
            if (minutes === 0) {
                hours--;
                minutes = 59;
                seconds = 59;
            } else {
                minutes--;
                seconds = 59;
            }
        } else {
            seconds--;
        }

        timeDisplay.textContent = `${String(hours).padStart(2, "0")} : ${String(minutes).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`
    }, 1000)
})