const forms = document.querySelectorAll("form");

forms.forEach(function (form) {
    form.onsubmit = function (event) {
        event.preventDefault();
        // This HTML project has no server to receive bookings or messages.
        form.querySelector(".message").textContent =
            "Demo completed. Nothing was sent or saved. Use the contact links to reach us.";
    };
});

// Build today's date in the browser's local timezone.
const dateInput = document.getElementById("date");
if (dateInput) {
    const today = new Date();
    dateInput.min = today.getFullYear() + "-" +
        String(today.getMonth() + 1).padStart(2, "0") + "-" +
        String(today.getDate()).padStart(2, "0");
}
