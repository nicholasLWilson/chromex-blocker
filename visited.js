document.addEventListener("DOMContentLoaded", () => {
	const background = chrome.extension.getBackgroundPage();
	Object.entries(background.visited).forEach(([page, pageObject]) => {
		const div = document.createElement("div");
		div.innerText = `${page}: ${pageObject.time}s`;
		document.body.appendChild(div);
	});
});
