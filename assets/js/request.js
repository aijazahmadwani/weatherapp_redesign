// API KEY
const key = '4e027d2fcccd807da22c4507d2dafed5';
let currentApi;
const notificationElement = document.querySelector('.notification');
if (navigator.onLine) {
    console.log('online');

    // CHECK IF BROWSER SUPPORTS GEOLOCATION
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(setPosition, showError);
    } else {
        notificationElement.style.display = "block";
        notificationElement.innerHTML = "<p>Your Browser doesn't Support Geolocation. Please update your browser to latest version.</p>";
    }

    // SET USER'S POSITION
    function setPosition(position) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        currentApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
        detailApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${key}`;
        fetch(currentApi)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                updateCurrent(data);
                localStorage.setItem("currentData", JSON.stringify(data));
            })
            .then(() => {
                fetch(detailApi)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        localStorage.setItem("detailData", JSON.stringify(data));
                        updateHomepageForecast();
                    })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
    function showError(error) {
        notificationElement.style.display = "block";
        notificationElement.innerHTML = `<p> ${error.message} </p>`;

    }
} else {
    console.log('offline');
    async function viewOldData() {
        currentData = JSON.parse(localStorage.getItem("currentData"));
        detailData = JSON.parse(localStorage.getItem("detailData"));
        updateCurrent(currentData);
        updateHomepageForecast();
    }
    viewOldData();
}