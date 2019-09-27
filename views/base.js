module.exports = {
    //desktop dom elements
    desktop: document.querySelector('.desktop'),
    timeDisplay: document.querySelector('#timeDisplay'),
    dateDisplay: document.querySelector('#dateDisplay'),

    //menu dom elements
    menuCanvas: document.querySelector('#menu'),
    menuBtn: document.querySelector('#menuBtn'),
    closeMenuBtn: document.querySelector('#closeMenuBtn'),
    infoMenuBtn: document.querySelector('#infoMenuBtn'),
    musicApp: document.querySelector('#musicApp'),
    galleryApp: document.querySelector('#galleryApp'),
    uberApp: document.querySelector('#uberApp'),
    browserApp: document.querySelector('#browserApp'),
    timerApp: document.querySelector('#timerApp'),
    videoApp: document.querySelector('#videoApp'),

    //player dom elements
    player: document.querySelector('.player'),
    video: document.querySelector('.viewer'),
    progress: document.querySelector('.progress'),
    progressBar: document.querySelector('.progressFilled'),
    toggle: document.querySelector('.toggle'),
    skipButtons: document.querySelectorAll('[data-skip]'),
    ranges: document.querySelectorAll('.playerSlider'),

    // whether dom elements
    loadingWeather: document.querySelector('.loadingWeather'),
    temp:document.querySelector('#temp'),
    tempIcon:document.querySelector('#tempIcon'),
    tempDescription: document.querySelector('#tempDescription'),
    tempImage: document.querySelector('#tempImage'),

    //news dom elements
    news: document.querySelector('#news'),
    loadingNews: document.querySelectorAll('.loadingWeather')[1],

    // todo dom elements
    openModal: document.querySelector('#openModal'),
    todoModal: document.querySelector('#todoModal'),
    todoClose: document.querySelector('#todoClose'),
    addTodoText: document.querySelector('#addTodoText'),
    addTodoDate: document.querySelector('#addTodoDate'),
    addTodoBtn: document.querySelector('#addTodoBtn'),
    todos: document.querySelectorAll('.todo'),
    todoDiv: document.querySelector('#todos'),
    top5Todos: document.querySelector('#top5Todos'),

    //browser dom elements
    urlInput: document.querySelector('#urlInput'),
    goToUrl: document.querySelector('#goToUrl'),
    tabContent: document.querySelector('#tabContent'),
    body: document.querySelector('body')
}