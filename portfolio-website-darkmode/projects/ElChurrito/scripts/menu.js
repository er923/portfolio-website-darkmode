document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.classList.add("hovered");
        });

        item.addEventListener("mouseleave", () => {
            item.classList.remove("hovered");
        });
    });
});
