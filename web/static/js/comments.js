//Get the URL from the calling script

var head = document.getElementsByTagName('HEAD')[0];
var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = "/static/css/2.1d8ca2f6.chunk.css";

var link2 = document.createElement('link');
link2.href = "/static/css/main.4f94b0f1.chunk.css";
link2.rel = 'stylesheet';
// Append link element to HTML head
head.appendChild(link);
head.appendChild(link2);

var scriptSource = (function (scripts) {
 var scripts = document.getElementsByTagName('script'),
 script = scripts[scripts.length - 1];
 if (script.getAttribute.length !== undefined) {
 return script.src
 }
 return script.getAttribute('src', -1)
}());
function getURLParameter(name) {
 return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(scriptSource) || [, ""])[1].replace(/\+/g, '%20')) || null
}
var id = getURLParameter('id')
var title = getURLParameter('title')
var website = getURLParameter('website')
var link = getURLParameter('link')

var scripts = ['/static/js/Dexos.js', "/static/js/2.chunk.js", "/static/js/main.chunk.js"]
scripts.map((script, i) => {
 let d = document, s = d.createElement('script');
 s.src = script;
 if (i === scripts.length - 1) {
 s.setAttribute('id', id);
 s.setAttribute('link', link);
 s.setAttribute('title', title);
 s.setAttribute('website', website)
 }
 (d.head || d.body).appendChild(s);
})
