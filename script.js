//America/ NY
setInterval(() => {
  let newYorkDate = document.querySelector("#new-york .date");
  let newYorkTime = document.querySelector("#time-ny");
  let newYork = moment().tz("America/New_York");

  newYorkDate.innerHTML = newYork.format("MMMM Do, YYYY");
  newYorkTime.innerHTML = newYork.format("h:mm:ss[<small>] A[</small>]");
}, 1000);

//Asia / Istanbul;
setInterval(() => {
  let istanbulDate = document.querySelector("#istanbul .date");
  let istanbulTime = document.querySelector("#time-istanbul");
  let istanbul = moment().tz("Asia/Istanbul");

  istanbulDate.innerHTML = istanbul.format("MMMM Do, YYYY");
  istanbulTime.innerHTML = istanbul.format("h:mm:ss[<small>] A[</small>]");
}, 1000);

//dropdown menu

let selectCity = document.querySelector("#city");
selectCity.addEventListener("change", updateCity);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `   
     <div class="current-city">
          <div>
              <h2>${cityName}</h2>
                    <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
             </div>
             <div class="time">${cityTime.format(
               "h:mm[<small>] A[</small>]"
             )}</div>
    </div>`;
}
updateCity();
setInterval(updateCity, 1000);
