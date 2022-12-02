// const departMinutes = 5
// let temps = departMinutes * 60

// const timerElement = document.getElementById("timer")

// setInterval(() => {
//   let minutes = parseInt(temps / 60, 10)
//   let secondes = parseInt(temps % 60, 10)

//   minutes = minutes < 10 ? "0" + minutes : minutes
//   secondes = secondes < 10 ? "0" + secondes : secondes

//   timerElement.innerText = `${minutes}:${secondes}`
//   temps = temps <= 0 ? 0 : temps - 1
// }, 1000)


var timeleft = 120;

var downloadTimer = setInterval(function function1(){
document.getElementById("timer").innerHTML = timeleft + 
"&nbsp"+"seconds remaining";

timeleft -= 1;
if(timeleft < 0){
    clearInterval(downloadTimer);
    document.getElementById("timer").innerHTML = "Time is up!"
    // redirect to index.html
    window.location.href = "index.html";
}
}, 1000);

console.log(timer);