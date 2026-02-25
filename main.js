const body = document.body;

function setColor(name) {
	body.style.backgroundColor = name;
}

function randomColor() {
	const r = Math.round(Math.random() * 255);
	const g = Math.round(Math.random() * 255);
	const b = Math.round(Math.random() * 255);
	body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// Attach events
document.getElementById("red").addEventListener("click", () => setColor("red"));
document
	.getElementById("green")
	.addEventListener("click", () => setColor("green"));
document
	.getElementById("blue")
	.addEventListener("click", () => setColor("blue"));
document.getElementById("random").addEventListener("click", randomColor);

// Initial random color
randomColor();
