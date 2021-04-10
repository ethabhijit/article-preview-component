window.addEventListener("load", function() {
	const btn = document.querySelector("#btn");
	btn.addEventListener("click", function() {
		const box = document.querySelector("#share-container");
		if(box.style.display === "block") {
			box.style.display = "none";
		} else {
			box.style.display = "block";
		}
	});
});