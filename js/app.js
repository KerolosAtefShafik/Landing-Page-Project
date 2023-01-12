// Start the Global Variables
let NavBarList = document.getElementById("navbar__list");
let Sections = document.querySelectorAll("section");
let Fragment = document.createDocumentFragment();
// End the Global Variables


/**
 * Start Navigation Bar Functions
 */
function BuildNavigationBar() {
	Sections.forEach(section => {
		let SectionId = section.getAttribute("id");
		let SectionTitle = section.getAttribute("data-nav");
		let ListItem = document.createElement("li");
		let ListLink = document.createElement("a");
		ListLink.classList.add("menu__link");
		ListLink.href = `#${SectionId}`;
		ListLink.textContent = SectionTitle;
		ListLink.addEventListener("click", evt => {
			evt.preventDefault();
			section.scrollIntoView({
				behavior: "smooth"
			});
		});
		ListItem.appendChild(ListLink);
		Fragment.appendChild(ListItem);
	})
	NavBarList.appendChild(Fragment);
}
window.addEventListener("load", BuildNavigationBar());
/**
 * End Navigation Bar Functions
 */
window.addEventListener("scroll", addHighLight);
let Links = document.querySelectorAll("a.menu__link");

function addHighLight() {
	Sections.forEach(section => {
		let SectionTop = section.getBoundingClientRect().top
		let SectionTitle = section.getAttribute("data-nav");
		if (SectionTop > 0 && SectionTop < 250) {
			section.classList.add("your-active-class");
			Links.forEach(link => {
				if (link.textContent === SectionTitle) {
					link.classList.add("active-link")
				} else {
					link.classList.remove("active-link")
				};
			});
		} else {
			section.classList.remove("your-active-class")
		};
	});
};
