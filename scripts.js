// Click YES button
function clickYesButton() {
    const popup = document.createElement('div');
    popup.textContent = 'I love you too <3';
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = 'rgba(255, 0, 0, 0.8)';
    popup.style.color = 'white';
    popup.style.padding = '20px 40px';
    popup.style.borderRadius = '10px';
    popup.style.fontSize = '20px';
    popup.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
    popup.style.zIndex = '1000';
    popup.style.animation = 'fadeInOut 2s';

    document.body.appendChild(popup);

    setTimeout(() => popup.remove(), 2000);
}

// Move NO button on hover (hard to click)
function hoverNoButton() {
    const button = document.getElementById('no-button');
    const container = document.querySelector('.button-container');
    const containerRect = container.getBoundingClientRect();
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    // Calculate random position within container bounds
    let x = Math.random() * (containerRect.width - buttonWidth);
    let y = Math.random() * (containerRect.height - buttonHeight);

    // Adjust position
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
    button.style.transition = 'left 0.0s ease, top 0.0s ease'; // Faster animation
}

// Attach event listeners
window.onload = () => {
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');

    yesButton.addEventListener('click', clickYesButton);

    noButton.addEventListener('mouseover', hoverNoButton);

    // Make the NO button move even when the user gets close
    noButton.addEventListener('mousemove', hoverNoButton);
};

// Keyframes for popup fade effect
const style = document.createElement('style');
style.textContent = `
@keyframes fadeInOut {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
}
`;
document.head.appendChild(style);
