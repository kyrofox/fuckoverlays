
var element = null;

document.addEventListener('mousedown', function(e){
    if( e.button == 2 ) { 
    console.log("RMB Clicked");
    element = e.target;
    console.log(element);
    return false; 
    } 
    return true; 
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  console.log(request);
    if(request === "fuckit") {
        console.log("Received message from BG Script");
        console.log(element);
        if(element === null) {
            setTimeout(function() {
                element.parentElement.removeChild(element);
                element = null;
            }, 100);
        } else {
            element.parentElement.removeChild(element);
            element = null;
        }
    }
});
