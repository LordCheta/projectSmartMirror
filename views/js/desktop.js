window.onload = () => {

    // Object containing all DOM queries
    let dom = {
    desktop: document.querySelector('.desktop'),
    timeDisplay: document.querySelector('#timeDisplay'),
    dateDisplay: document.querySelector('#dateDisplay')
}

    
    // Desktop Funtionalities
    let showDateTime = async () => {
        let amPm = 'am';
        let desktopDate = new Date();
        // for the hour
        let hour = 24;
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
        console.log(desktopDate);
    
        dom.timeDisplay.innerHTML = `${hour}:${min}${amPm}`;
        dom.dateDisplay.innerHTML = `${day}, ${date} ${month}`
    }
    
    setInterval(showDateTime, 1000);
};
