window.addEventListener("DOMContentLoaded", main)

function main() {
    timeCounter()
}

// time counter
function timeCounter() {
    let countDownDate = new Date("Nov 1, 2020 23:59:59").getTime()
    let daysOutput = document.getElementById("time-days")
    let hoursOutput = document.getElementById("time-hours")
    let minutesOutput = document.getElementById("time-minutes")
    let daysCircle = document.getElementById("days-circle")
    let hoursCircle = document.getElementById("hours-circle")
    let minutesCircle = document.getElementById("minutes-circle")
    
    function timeUpdate() {
        let now = new Date().getTime()
        let distance = countDownDate - now
        let days = Math.floor(distance / (1000 * 60 * 60 * 24))
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))

        daysOutput.innerText = days
        hoursOutput.innerText = hours
        minutesOutput.innerText = minutes

        function circleUpdate(target) {
            let progress = null
            const maxProgress = 390

            if (target == daysCircle) {
                progress = ((days / 10) * maxProgress)
                target.setAttribute("stroke-dasharray", `${progress},20000`)
            } else if (target == hoursCircle) {
                progress = ((hours / 24) * maxProgress)
                target.setAttribute("stroke-dasharray", `${progress},20000`)
            } else {
                progress = ((minutes / 60) * maxProgress)
                target.setAttribute("stroke-dasharray", `${progress},20000`)
            }

            target.parentElement.style.stroke = "#f33"
        }

        circleUpdate(daysCircle)
        circleUpdate(hoursCircle)
        circleUpdate(minutesCircle)
    }

    timeUpdate()

    setInterval(timeUpdate, 1000)
}