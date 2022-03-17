
const clear = ({ url }) => {
		chrome.history.deleteUrl({ url });

};
chrome.history.onVisited.addListener(clear);
chrome.runtime.onInstalled.addListener(() => {
	chrome.history.deleteAll(function(){
		console.log("history cleared")
	})

});
