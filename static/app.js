const INPUT = document.getElementById('url')
const BTN = document.getElementById('shorten')
const DISP = document.getElementById('tinyurl-link')

BTN.addEventListener('click', () => {
    DISP.innerText = 'Loading...'
    const url = encodeURI(INPUT.value)
    fetch(`/shorten?url=${ url }`)
        .then(json => json.json())
        .then(res => DISP.innerHTML = `TinyURL: <a href="${ res.tinyurl }" target="_blank">${ res.tinyurl }</a>`) 
        .catch(e => DISP.innerText = 'Error. Please try again.')
})