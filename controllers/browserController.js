const dom = require('../views/base') // Object containing all DOM queries

// browser methods
let renderNewTab = () => {
    let tablinkTemplate = `<button class="tabLinks activeTab" id="tabName">New Tab</button>`
    
}
let renderTab = () => {
    let template = `
    <!-- TAB LINKS  -->
    <section id="browserTabs">
        <button class="tabLinks activeTab" id="tabName">New Tab</button>
        <button class="tabLinks" id="createNewTabIcon"> + </button>
    </section>

    <!-- TAB CONTENT -->
    <section id="tabContent">
        <!-- these are the browser controls -->
        <span class="browserIcons" id="goBack">&#8592;</span>
        <span class="browserIcons" id="goForward">&#8594;</span>
        <!-- <span class="browserIcons" id="goHome"></span> -->
        <input id="urlInput" type="text" placeholder="type url here">
        <span class="broswerIcons" id="goToUrl">go</span>

        <!-- the iframe is used to renderer the web pages -->
        
    </section>
    `
    dom.body.insertAdjacentHTML('afterbegin', template)
    return "done"
}

let renderUrl = (url) => {
    document.querySelector('#tabName').innerHTML = url
    let renderTemplate = `<iframe class="renderFrame" src="http://${url}" frameborder="0"></iframe>`

    let frames = document.querySelector('.renderFrame')
    if(frames) frames.parentNode.removeChild(frames)
    
    document.querySelector('#tabContent').insertAdjacentHTML('beforeend', renderTemplate)
}


// page load listerners 
window.onload = async () => {
let renderTabAction =  await renderTab()

// listerners to trigger browser methods
console.log(renderTabAction)
if(renderTabAction) {
  document.querySelector('#goToUrl').addEventListener('click', () => {
    let url = document.querySelector('#urlInput').value
    renderUrl(url)
    })  
}

}