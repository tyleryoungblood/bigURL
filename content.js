// inject css
var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('styles.css');
(document.head||document.documentElement).appendChild(style);

// show/hide bigURL
if(document.getElementById('kty208bigURL')) {
   // bigURL is already being displayed. Remove it.
   document.getElementById('kty208bigURL').remove();
} else {
   // bigURL is not being displayed. Create it. 
   let body = document.body;
   let bigURL = document.createElement('h1')
   bigURL.setAttribute('id', 'kty208bigURL')
   bigURL.innerHTML = window.location.href
   body.insertBefore(bigURL, body.firstChild);
   bigURL.onclick = function() { bigURL.remove() }
}
