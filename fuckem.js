
var element = null;


$(document).ready(function(){ 

  $(document).mousedown(function(e){ 
    if( e.button == 2 ) { 
    console.log("RMB Clicked");
    element = $(event.target);
    console.log(element);
    return false; 
    } 
    return true; 
  }); 
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  console.log(request);
    if(request === "fuckit") {
        console.log("Received message from BG Script");
        console.log(element);
        if(element === null) {
            setTimeout(function() {
                element.remove();
                element = null;
            }, 100);
        } else {
            element.remove();
            element = null;
        }
    }
});
