const box = document.querySelector(".box");
const list = document.querySelectorAll(".list");
const contextMenu = document.querySelector(".context-menu");

const showMenu = (ev) => {
    ev.preventDefault();
    contextMenu.style.left = ev.clientX + "px";
    contextMenu.style.top = ev.clientY + "px";
    contextMenu.classList.remove("hide");
}

const hideContextMenu = (ev) => {
    console.log("hide")
    contextMenu.classList.add("hide");

}

box.addEventListener("contextmenu", showMenu);

list.forEach((listItem) => listItem.addEventListener("click", hideContextMenu));

document.body.addEventListener("mousedown", () => {
    contextMenu.classList.add("hide");
});