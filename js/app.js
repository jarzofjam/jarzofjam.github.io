function getColor() {
	var colors = ['#873bce', '#3a5dce', '#39ce61', '#ce8839', '#ce3939'];
	return colors[Math.floor(Math.random() * colors.length)];
}

document.getElementById('title').style.color = random_color;