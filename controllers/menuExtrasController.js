const dom = require('../views/base')

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

// Show system info

let showSytemInfo = () => {
    let info = 
    `   Enyo OS
    version 1.0.0
    Olibie Chidera, Lord Cheta
    copyright 2019.`
         
    alert(info)
}

dom.infoMenuBtn.addEventListener('click', showSytemInfo)