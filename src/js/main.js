const modal = document.querySelector("#myModal");
const info = document.querySelector(".main__skill_block");
const closeElement = document.querySelector("#close_btn");

info.addEventListener("click", () => {
	modal.classList.add("show_modal");
	document.body.classList.add("fixed");
});

closeElement.addEventListener("click", () => {
	modal.classList.remove("show_modal");
	document.body.classList.remove("fixed");
});
