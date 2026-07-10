const forms = document.querySelectorAll("form");

forms.forEach(function (form) {
    form.onsubmit = function (event) {
        event.preventDefault();
        form.querySelector(".message").textContent = "Sent successfully.";
        form.reset();
    };
});
