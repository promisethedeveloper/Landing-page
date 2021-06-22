// Build the nav
const navBarArray = [];
const allSections = document.querySelectorAll("section");
const navBar = document.querySelector("#navbar__list");

for (const section of allSections.entries()) {
	const listItem = document.createElement("li");
	const anchorTag = document.createElement("a");

	// Appends the anchorElement, a to the li
	listItem.appendChild(anchorTag);

	// Appends the li to the ul with id="#navbar__list"
	navBar.appendChild(listItem);

	// Sets the text of the naviagation bar
	anchorTag.textContent = `Link${section[0] + 1}`;

	// Sets the class of the anchor elements to the ids in the section tags
	anchorTag.setAttribute("class", `section${section[0] + 1}`);

	// Pushes the anchor tags into the already created empty array, so that the forEach function can be called on it
	navBarArray.push(anchorTag);
}

// Loops through the nav bar array and add click event listener to each tag
navBarArray.forEach((anchorTag, index) => {
	anchorTag.addEventListener("click", () => {
		allSections[index].scrollIntoView({ behavior: "smooth" });
	});
});

// Scroll to section on link click
// Material from https://www.youtube.com/watch?v=RsPWEmfOQdU&t=567s

window.addEventListener("scroll", () => {
	let current = "";
	allSections.forEach((section) => {
		const topOfSection = section.offsetTop;
		const heightOfSection = section.clientHeight;
		if (pageYOffset >= topOfSection - heightOfSection / 2) {
			current = section.getAttribute("id");
		}
	});

	navBarArray.forEach((anchorTag, index) => {
		anchorTag.classList.remove("active");
		if (anchorTag.classList.contains(current)) {
			allSections[index].classList.add("your-active-class");
			anchorTag.classList.add("active");
		} else {
			allSections[index].classList.remove("your-active-class");
		}
	});
});
