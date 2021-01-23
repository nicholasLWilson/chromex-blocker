window.visited = {};
window.lastVisited = null;

chrome.runtime.onMessage.addListener((request) => {
	if (window.lastVisited) {
		clearInterval(window.visited[window.lastVisited].intervalId);
	}
	createTimer(request.url);
});

chrome.browserAction.onClicked.addListener((tab) => {
	chrome.tabs.create({ url: "visited.html" });
});

function getTime(url) {
	if (window.visited[url]) {
		return window.visited.time;
	}
	return 0;
}

function createTimer(url) {
	window.visited[url] = {
		time: getTime(url),
		intervalId: setInterval(() => {
			window.visited[url].time++;
		}, 1000),
	};
}
