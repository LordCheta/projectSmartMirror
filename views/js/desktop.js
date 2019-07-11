var key = require('../config/key');
const axios = require('axios')

window.onload = () => {

    // Object containing all DOM queries
    let dom = {
    desktop: document.querySelector('.desktop'),
    timeDisplay: document.querySelector('#timeDisplay'),
    dateDisplay: document.querySelector('#dateDisplay')
}
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
};

// Method controlling weather display
this.getWeather = async() => {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=Awka,Nigeria&APPID='+ key.weather
    var details = await axios.default.get(url)
    return details.data;
    }
    
    this.diplayWeather = async() => {
        var res = await this.getWeather()
        console.log(res.main.temp)
    }
    this.diplayWeather();


// Method controlling calender todo list
// 1. Add button is clicked and a modal pops up
// 2. Title of todo, date and time of start of todo is set
// 3. Modal has cancel(x[close] is also included) & add button
// 4. When todo is added, on the right is a check box that indicates completion
// 5. Completed todos are either striked through and brought down the list or removed
//    entirely from the list, an alert should be shown to confirm this choice



// Method controlling news headlines display
this.getNews = async() => {
    var url = 'https://newsapi.org/v2/sources?language=en&country=ng&apiKey='+ key.news
    var details = await axios.default.get(url)
    return details.data;
    }
    
    this.displayNews = async() => {
        var res = await this.getNews()
        console.log(res)
    }
    this.displayNews();