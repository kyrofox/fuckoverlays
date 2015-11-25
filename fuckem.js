var fucker = null;
document.addEventListener('mousedown', function(e){
    if( e.button == 2 ) { fucker = e.target; } });
chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
		try { fucker.parentElement.removeChild(fucker); } catch(lmao) {/*as if i care*/} });