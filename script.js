//America/ NY
setInterval(() => {
  let newYorkDate = document.querySelector("#new-york .date");
  let newYorkTime = document.querySelector("#time-ny");
  let newYork = moment().tz("America/New_York");

  newYorkDate.innerHTML = newYork.format("MMMM Do, YYYY");
  newYorkTime.innerHTML = newYork.format("h:mm:ss[<small>] A[</small>]");
}, 1000);

//Asia / Istanbul;
function updateTime() {
  let istanbulDate = document.querySelector("#istanbul .date");
  let istanbulTime = document.querySelector("#time-istanbul");
  let istanbul = moment().tz("Asia/Istanbul");

  istanbulDate.innerHTML = istanbul.format("MMMM Do, YYYY");
  istanbulTime.innerHTML = istanbul.format("h:mm:ss[<small>] A[</small>]");
}
setInterval(updateTime, 1000);
