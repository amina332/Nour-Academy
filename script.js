const popup_button = document.getElementById("popup_button");
const popup = document.getElementById("popup");
const exit_popup_button = document.getElementById("exit_popup");


popup_button.addEventListener("click" , () => {
    popup.classList.remove("hidden");
    popup.classList.add("flex");
});

exit_popup_button.addEventListener("click" , () => {
    popup.classList.remove("flex");
    popup.classList.add("hidden");
})