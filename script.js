window.onload = function () {
    const domainCards = document.querySelectorAll('.domain-card');
    domainCards.forEach((card, index) => {
        card.style.animationDelay = (index * 0.1) + 's'; // Correct string concatenation
        card.style.opacity = '1'; // Ensure opacity is set to 1 after loading
    });
}
