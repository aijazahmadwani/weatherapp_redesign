const outer = document.querySelector('.outer')
data = JSON.parse(localStorage.getItem("currentData"));
console.log(data);


outer.innerHTML = `
<div class=" row ">
<div class="col-6 border-right border-bottom">
    <div class="row">
        <div class="col-8 text-center">
            <span class="detail-name">Sunrise</span>
            <p class="detail">${convertTimestamp(data.sys.sunrise, 'time')}</p>
        </div>
        <div class="col-4 p-2"><img src="./assets/detail-icons/sunrise.png" alt="" width="30px"
                height="30px" /></div>
    </div>

</div>
<div class="col-6 border-bottom">
    <div class="row">
        <div class="col-8 text-center">
            <span class="detail-name">Sunset</span>
            <p class="detail">${convertTimestamp(data.sys.sunset, 'time')}</p>
        </div>
        <div class="col-4 p-2"><img src="./assets/detail-icons/sunset.png" alt="" width="30px"
                height="30px" /></div>
    </div>
</div>
</div>
<div class=" row ">
<div class="col-6 border-right border-bottom">
    <div class="row">
        <div class="col-8 text-center">
            <span class="detail-name">Humidity</span>
            <p class="detail">${data.main.humidity} %</p>
        </div>
        <div class="col-4 p-2"><img src="./assets/detail-icons/humidity.png" alt="" width="30px"
                height="30px" /></div>
    </div>

</div>
<div class="col-6 border-bottom">
    <div class="row">
        <div class="col-8 text-center">
            <span class="detail-name">Pressure</span>
            <p class="detail">${data.main.pressure} hPa</p>
        </div>
        <div class="col-4 p-2"><img src="./assets/detail-icons/pressure.png" alt="" width="30px"
                height="30px" /></div>
    </div>
</div>
</div>
<div class=" row">
<div class="col-6 border-right border-bottom">
    <div class="row">
        <div class="col-8 text-center">
            <span class="detail-name">Wind Speed</span>
            <p class="detail">${data.wind.speed} m/s</p>
        </div>
        <div class="col-4 p-2"><img src="./assets/detail-icons/wind.png" alt="" width="30px"
                height="30px" /></div>
    </div>

</div>
<div class="col-6 border-bottom">
    <div class="row">
        <div class="col-8 text-center">
            <span class="detail-name">Wind Direction</span>
            <p class="detail">${data.wind.deg} &deg;</p>
        </div>
        <div class="col-4 p-2"><img src="./assets/detail-icons/wind-direction.png" alt="" width="30px"
                height="30px" /></div>
    </div>
</div>
</div>
<div class=" row">
<div class="col-6 border-right border-bottom">
    <div class="row">
        <div class="col-8 text-center">
            <span class="detail-name">Visibility</span>
            <p class="detail">${data.visibility} m</p>
        </div>
        <div class="col-4 p-2"><img src="./assets/detail-icons/visibility.png" alt="" width="30px"
                height="30px" /></div>
    </div>

</div>
<div class="col-6 border-bottom">
    <div class="row">
        <div class="col-8 text-center">
            <span class="detail-name">Clouds</span>
            <p class="detail">${data.clouds.all} %</p>
        </div>
        <div class="col-4 p-2"><img src="./assets/detail-icons/clouds.png" alt="" width="30px"
                height="30px" /></div>
    </div>
</div>
</div>
<div class=" row">
<div class="col-6 border-right">
    <div class="row">
        <div class="col-8 text-center">
            <span class="detail-name">Sea level</span>
            <p class="detail">${data.main.sea_level} hPa</p>
        </div>
        <div class="col-4 p-2"><img src="./assets/detail-icons/sea-level.png" alt="" width="30px"
                height="30px" /></div>
    </div>

</div>
<div class="col-6">
    <div class="row">
        <div class="col-8 text-center">
            <span class="detail-name">Ground level</span>
            <p class="detail">${data.main.grnd_level} hPa</p>
        </div>
        <div class="col-4 p-2"><img src="./assets/detail-icons/ground-level.png" alt="" width="30px"
                height="30px" /></div>
    </div>
</div>
</div>`





//function to convert unix timestamp to local time and date
function convertTimestamp(timestamp, arg) {
    var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
        yyyy = d.getFullYear(),
        mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
        dd = ('0' + d.getDate()).slice(-2),         // Add leading 0.
        hh = d.getHours(),
        h = hh,
        min = ('0' + d.getMinutes()).slice(-2),     // Add leading 0.
        ampm = 'AM',
        time;
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    day = weekday[d.getDay()];
    if (hh > 12) {
        h = hh - 12;
        ampm = 'PM';
    } else if (hh === 12) {
        h = 12;
        ampm = 'PM';
    } else if (hh == 0) {
        h = 12;
    }

    //time = h + ':' + min + ' ' + ampm + ',' + dd + '-' + mm + '-' + yyyy;
    time = h + ':' + min + ' ' + ampm;
    date = day + ' ' + dd + '-' + mm;
    if (arg === 'time') {
        return time;
    }
    else {
        return date;
    }
    return time;
}