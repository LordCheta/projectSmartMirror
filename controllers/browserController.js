const dom = require('../views/base') // Object containing all DOM queries

// browser methods

let renderUrl = (url) => {
    let renderTemplate = `<iframe class="renderFrame" src="http://${url}" frameborder="0"></iframe>`

    let frames = document.querySelector('.renderFrame')
    if(frames) frames.parentNode.removeChild(frames)
    
    dom.tabContent.insertAdjacentHTML('beforeend', renderTemplate)
}




// listerners to trigger browser methods
dom.goToUrl.addEventListener('click', () => {
    let url = dom.urlInput.value
    // alert(url)
    renderUrl(url)
})