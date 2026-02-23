// Storybook interactivity
document.addEventListener("DOMContentLoaded", () => {
    // Toggle demos
    document.querySelectorAll(".toggle input").forEach(input => {
        input.addEventListener("change", () => {
            const label = input.closest(".sb-preview")?.querySelector(".sb-toggle-state");
            if (label) label.textContent = input.checked ? "ON" : "OFF";
        });
    });
});
