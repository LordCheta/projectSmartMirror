const key = require('../config/keys')
const axios = require('axios')
const dom = require('../views/base') // Object containing all DOM queries

window.onload = () => {

    // Desktop Funtionalities

    // Method controlling date and time display
    let showDateTime = async () => {
        let amPm = 'am';
        let desktopDate = new Date();
        // for the hour
        let hour = desktopDate.getHours();
        if ( hour > 12 ) {
            hour -= 12;
            amPm = 'pm';
        }
        let min = desktopDate.getMinutes() < 10 ? `0${desktopDate.getMinutes()}` : desktopDate.getMinutes();
        let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let day = days[desktopDate.getDay()];
        let date =desktopDate.getDate()
        let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let month = months[desktopDate.getMonth()];
        // console.log(desktopDate);
    
        dom.timeDisplay.innerHTML = `${hour}:${min}${amPm}`;
        dom.dateDisplay.innerHTML = `${day}, ${date} ${month}`
    }

    // calls the date and time method for display at specified interval
    setInterval(showDateTime, 1000);


// Method controlling weather display
let getWeather = async () => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=Awka,Nigeria&APPID='+ key.weather
    try {
        let details = await axios.default.get(url)
        return details.data;
    } catch (error) {
        return error
    }
}
    
let displayWeather = async () => {
    try {
        let res = await getWeather()
        let tempCel = res.main.temp - 273.15;
        let temp = tempCel.toFixed(0);
        console.log(res)
    } catch (error) {
        return error
    }
    
}
displayWeather();


// Method controlling calender todo list
// 1. Add button is clicked and a modal pops up
// 2. Title of todo, date and time of start of todo is set
// 3. Modal has cancel(x[close] is also included) & add button
// 4. When todo is added, on the right is a check box that indicates completion
// 5. Completed todos are either striked through and brought down the list or removed
//    entirely from the list, an alert should be shown to confirm this choice



// Method controlling news headlines display
this.getNews = async() => {
    const url = 'https://newsapi.org/v2/sources?language=en&country=ng&apiKey='+ key.news
    try {
        let details = await axios.default.get(url)
        return details.data;
    } catch (error) {
        return error
    } 
}
    
this.displayNews = async() => {
    try {
        let res = await this.getNews()
        // render result to UI
    } catch (error) {
        return error
    }  
}
this.displayNews();


// menu toggling
let toggleMenu = () => {
    if (dom.menuCanvas.style.display == 'none') {  
        dom.menuCanvas.style.display = 'block'
        return 
    }
    dom.menuCanvas.style.display = 'none'
    
}

dom.menuBtn.addEventListener('click', toggleMenu)
dom.closeMenuBtn.addEventListener('click', toggleMenu)

};