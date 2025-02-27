
document.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelector(".typing");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                text.style.animation = "none"; // Reset animation
                setTimeout(() => {
                    text.style.animation = "typing 2s steps(10, end) forwards, blink 0.6s infinite";
                }, 100); // Restart animation
            }
        });
    });

    observer.observe(text);
});

